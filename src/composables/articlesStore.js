// 统一的文章数据存储，所有页面和后台共享同一个响应式状态
import { ref } from 'vue'
import articlesData from '@/data/articles.json'

const ADMIN_STORAGE_KEY = 'blog_admin_articles'

// 统一 articles ref - 全模块唯一（所有页面和后台共享）
const articles = ref([])

export const articleStore = {
  articles,

  // 加载文章：从 localStorage 优先，没有则从静态 JSON
  load() {
    // 先尝试从 window（后台发布后同步的数据）
    if (window.__blogAdminArticles && window.__blogAdminArticles.length > 0) {
      articles.value = window.__blogAdminArticles
      return
    }

    const stored = localStorage.getItem(ADMIN_STORAGE_KEY)
    if (stored) {
      try {
        articles.value = JSON.parse(stored)
        return
      } catch {
        // fall through
      }
    }

    // 静态数据（articlesData 是编译时导入的 JSON）
    articles.value = articlesData
    localStorage.setItem(ADMIN_STORAGE_KEY, JSON.stringify(articlesData))
  },

  // 保存完整列表到 localStorage（后台 CRUD 后调用）
  save(articleList) {
    articles.value = articleList
    localStorage.setItem(ADMIN_STORAGE_KEY, JSON.stringify(articleList))
    // 同步到 window（供静态页面使用）
    window.__blogAdminArticles = articleList
  },

  // 初始化（后台启动时调用，传入后台文章列表）
  init(articleList) {
    if (articleList && articleList.length > 0) {
      articles.value = articleList
      window.__blogAdminArticles = articleList
      localStorage.setItem(ADMIN_STORAGE_KEY, JSON.stringify(articleList))
    }
  }
}

// 模块加载时立即初始化（保证直接访问详情页时也有数据）
articleStore.load()
