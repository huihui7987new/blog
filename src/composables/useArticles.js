import { ref, computed, watch, onMounted } from 'vue'
import { articleStore } from './articlesStore'

// 分类和标签筛选器 - 模块级别共享状态
const selectedCategory = ref('all')
const selectedTag = ref(null)

// 初始化：加载文章数据
articleStore.load()

// 监听 localStorage 变化（跨 Tab / 外部修改时同步）
watch(
  () => localStorage.getItem('blog_admin_articles'),
  () => {
    const stored = localStorage.getItem('blog_admin_articles')
    if (stored) {
      try {
        articleStore.articles.value = JSON.parse(stored)
      } catch {
        // ignore
      }
    }
  }
)

// 刷新函数，供 useAdminArticles CRUD 后调用
export const reloadArticles = () => {
  articleStore.load()
}

export function useArticles() {
  const categories = computed(() => {
    const cats = new Set(articleStore.articles.value.map(a => a.category))
    return ['全部文章', ...cats]
  })

  const tags = computed(() => {
    const allTags = articleStore.articles.value.flatMap(a => a.tags)
    return [...new Set(allTags)]
  })

  // 筛选后的文章列表（默认显示全部）
  const filteredArticles = computed(() => {
    let result = articleStore.articles.value

    if (selectedCategory.value && selectedCategory.value !== '全部文章') {
      result = result.filter(a => a.category === selectedCategory.value)
    }

    if (selectedTag.value) {
      result = result.filter(a => a.tags.includes(selectedTag.value))
    }

    return result
  })

  const recentArticles = computed(() => {
    return [...articleStore.articles.value]
      .sort((a, b) => new Date(b.date) - new Date(a.date))
      .slice(0, 5)
  })

  // 首页精选文章
  const featuredArticles = computed(() => {
    return [...articleStore.articles.value]
      .sort((a, b) => new Date(b.date) - new Date(a.date))
      .slice(0, 6)
  })

  const getArticleById = (id) => {
    return articleStore.articles.value.find(a => a.id === parseInt(id))
  }

  const setCategory = (category) => {
    selectedCategory.value = category
  }

  const setTag = (tag) => {
    selectedTag.value = selectedTag.value === tag ? null : tag
  }

  const stats = computed(() => ({
    totalArticles: articleStore.articles.value.length,
    totalWords: '5万+',
    yearsRunning: '3年'
  }))

  return {
    articles: articleStore.articles,
    categories,
    tags,
    filteredArticles,
    recentArticles,
    featuredArticles,
    selectedCategory,
    selectedTag,
    getArticleById,
    setCategory,
    setTag,
    stats,
    reloadArticles
  }
}
