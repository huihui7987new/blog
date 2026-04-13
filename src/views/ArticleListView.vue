<template>
  <div class="article-list">
    <h2 class="section-title">📝 文章列表</h2>

    <!-- 分类标签栏 -->
    <div class="category-tabs">
      <button
        v-for="cat in categories"
        :key="cat"
        class="category-tab"
        :class="{ active: selectedCategory === cat }"
        @click="selectedCategory = cat"
      >
        {{ cat }}
      </button>
    </div>

    <div class="article-list-container">
      <div v-if="filteredArticles.length === 0" class="empty-hint">
        <p>该分类暂无文章</p>
      </div>
      <div v-else class="article-items">
        <router-link
          v-for="article in filteredArticles"
          :key="article.id"
          :to="`/article/${article.id}`"
          class="article-list-item"
        >
          <div class="article-list-cover" :style="{ background: article.cover }"></div>
          <div class="article-list-content">
            <div class="article-list-title">{{ article.title }}</div>
            <div class="article-list-excerpt">{{ article.excerpt }}</div>
            <div class="article-list-meta">
              <span class="article-list-category">{{ article.category }}</span>
              <span>{{ article.date }}</span>
              <span>阅读 {{ article.readTime }}</span>
            </div>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { articleStore } from '@/composables/articlesStore'

// 确保文章数据已加载
onMounted(() => {
  articleStore.load()
})

// 分类选项
const categories = computed(() => {
  const cats = new Set(articleStore.articles.value.map(a => a.category))
  return ['全部', ...cats]
})

const selectedCategory = ref('全部')

// 筛选后的文章列表
const filteredArticles = computed(() => {
  const all = articleStore.articles.value
  if (!all || all.length === 0) return []
  const sorted = [...all].sort((a, b) => new Date(b.date) - new Date(a.date))
  if (selectedCategory.value === '全部') return sorted
  return sorted.filter(a => a.category === selectedCategory.value)
})
</script>

<style scoped>
.article-list {
  padding-bottom: 60px;
}

.section-title {
  font-family: var(--font-heading);
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 20px;
  color: var(--text);
}

/* 分类标签栏 */
.category-tabs {
  display: flex;
  gap: 8px;
  margin-bottom: 28px;
  flex-wrap: wrap;
}

.category-tab {
  padding: 7px 18px;
  border-radius: 24px;
  border: 1px solid var(--border);
  background: var(--bg-card);
  color: var(--text-secondary);
  font-size: 14px;
  cursor: pointer;
  transition: all 0.25s ease;
  font-family: inherit;
}

.category-tab:hover {
  border-color: var(--primary);
  color: var(--primary);
}

.category-tab.active {
  background: var(--primary);
  color: #fff;
  border-color: var(--primary);
  box-shadow: 0 2px 8px rgba(99, 102, 241, 0.3);
}

.empty-hint {
  text-align: center;
  color: var(--text-secondary);
  padding: 40px 0;
}

.article-list-container {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.article-items {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.article-list-item {
  display: flex;
  gap: 20px;
  padding: 16px;
  background: var(--bg-card);
  border-radius: var(--radius);
  border: 1px solid var(--border);
  text-decoration: none;
  transition: all 0.3s;
}

.article-list-item:hover {
  transform: translateX(4px);
  box-shadow: var(--shadow);
}

.article-list-cover {
  width: 120px;
  height: 80px;
  border-radius: calc(var(--radius) - 2px);
  flex-shrink: 0;
  background: linear-gradient(135deg, var(--primary), var(--primary-end));
}

.article-list-content {
  flex: 1;
  min-width: 0;
}

.article-list-title {
  font-size: 16px;
  font-weight: 600;
  color: var(--text);
  margin-bottom: 8px;
}

.article-list-excerpt {
  font-size: 13px;
  color: var(--text-secondary);
  margin-bottom: 8px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.article-list-meta {
  display: flex;
  gap: 12px;
  font-size: 12px;
  color: var(--text-secondary);
}

.article-list-category {
  color: var(--primary);
  font-weight: 500;
}

@media (max-width: 768px) {
  .article-list-item {
    flex-direction: column;
  }

  .article-list-cover {
    width: 100%;
    height: 120px;
  }
}
</style>
