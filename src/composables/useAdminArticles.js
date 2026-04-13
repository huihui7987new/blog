// 管理后台文章 CRUD 逻辑 - 基于统一 articleStore + GitHub Actions 自动同步
import { articleStore } from './articlesStore'

const GITHUB_REPO = 'huihui7987new/blog'
const WORKFLOW_ID = '260204424'  // Sync Articles workflow ID

// GitHub Actions API 基础路径
const GH_API = 'https://api.github.com'

// 触发 GitHub Actions workflow
const triggerSyncWorkflow = async (articles) => {
  const token = import.meta.env.VITE_GITHUB_TOKEN
  if (!token) {
    console.warn('[Admin] VITE_GITHUB_TOKEN 未配置，GitHub 前台不会自动更新')
    return
  }

  // 排序：id 升序（与 articles.json 格式一致）
  const sorted = [...articles].sort((a, b) => a.id - b.id)
  const content = btoa(unescape(encodeURIComponent(JSON.stringify(sorted, null, 2))))
  const payload = JSON.stringify({ ref: 'gh-pages', inputs: { articles_content: content } })

  try {
    const res = await fetch(`${GH_API}/repos/${GITHUB_REPO}/actions/workflows/${WORKFLOW_ID}/dispatches`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Accept': 'application/vnd.github.v3+json',
        'Content-Type': 'application/json'
      },
      body: payload
    })
    if (!res.ok) {
      const err = await res.json().catch(() => ({}))
      console.warn('[Admin] workflow 触发失败:', res.status, err)
    } else {
      console.log('[Admin] ✅ GitHub Actions workflow 已触发，articles.json 将在 1-2 分钟内同步')
    }
  } catch (e) {
    console.warn('[Admin] workflow 触发失败:', e)
  }
}

// 计算阅读时间
const calcReadTime = (content) => {
  const words = (content || '').length / 2
  const minutes = Math.ceil(words / 400)
  return `${minutes} 分钟`
}

// 获取下一个 ID
const getNextId = () => {
  const list = articleStore.articles.value
  if (!list || list.length === 0) return 1
  return Math.max(...list.map(a => a.id)) + 1
}

// 初始化：从 localStorage 加载到 store
const initArticles = () => {
  const stored = localStorage.getItem('blog_admin_articles')
  if (stored) {
    try {
      articleStore.init(JSON.parse(stored))
      return
    } catch { /* fall through */ }
  }
  articleStore.load()
}

// 获取单篇文章
const getArticle = (id) => {
  return articleStore.articles.value.find(a => a.id === parseInt(id))
}

// 新增文章
const createArticle = async (articleData) => {
  const article = {
    id: getNextId(),
    ...articleData,
    date: new Date().toISOString().split('T')[0],
    readTime: calcReadTime(articleData.content),
    cover: articleData.cover || 'linear-gradient(135deg, #6366f1, #8b5cf6)'
  }
  const newList = [article, ...articleStore.articles.value]
  articleStore.save(newList)
  // 触发 GitHub Actions 同步
  await triggerSyncWorkflow(newList)
  return article
}

// 更新文章
const updateArticle = async (id, articleData) => {
  const list = articleStore.articles.value
  const index = list.findIndex(a => a.id === id)
  if (index !== -1) {
    const updated = { ...list[index], ...articleData, readTime: calcReadTime(articleData.content || list[index].content) }
    const newList = [...list]
    newList[index] = updated
    articleStore.save(newList)
    // 触发 GitHub Actions 同步
    await triggerSyncWorkflow(newList)
    return updated
  }
  return null
}

// 删除文章
const deleteArticle = async (id) => {
  const newList = articleStore.articles.value.filter(a => a.id !== id)
  articleStore.save(newList)
  await triggerSyncWorkflow(newList)
}

export const useAdminArticles = () => {
  return { articles: articleStore.articles, initArticles, createArticle, updateArticle, deleteArticle, getArticle }
}
