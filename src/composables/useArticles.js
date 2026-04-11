import { ref, computed } from 'vue'
import articlesData from '@/data/articles.json'

const articles = ref(articlesData)
const selectedCategory = ref('all')
const selectedTag = ref(null)

export function useArticles() {
  const categories = computed(() => {
    const cats = new Set(articles.value.map(a => a.category))
    return ['全部文章', ...cats]
  })

  const tags = computed(() => {
    const allTags = articles.value.flatMap(a => a.tags)
    return [...new Set(allTags)]
  })

  const filteredArticles = computed(() => {
    let result = articles.value
    
    if (selectedCategory.value && selectedCategory.value !== '全部文章') {
      result = result.filter(a => a.category === selectedCategory.value)
    }
    
    if (selectedTag.value) {
      result = result.filter(a => a.tags.includes(selectedTag.value))
    }
    
    return result
  })

  const recentArticles = computed(() => {
    return [...articles.value]
      .sort((a, b) => new Date(b.date) - new Date(a.date))
      .slice(0, 5)
  })

  const featuredArticles = computed(() => {
    return [...articles.value]
      .sort((a, b) => new Date(b.date) - new Date(a.date))
      .slice(0, 6)
  })

  const getArticleById = (id) => {
    return articles.value.find(a => a.id === parseInt(id))
  }

  const setCategory = (category) => {
    selectedCategory.value = category
  }

  const setTag = (tag) => {
    selectedTag.value = selectedTag.value === tag ? null : tag
  }

  const stats = computed(() => ({
    totalArticles: articles.value.length,
    totalWords: '5万+',
    yearsRunning: '3年'
  }))

  return {
    articles,
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
    stats
  }
}
