<template>
  <div class="article-list">
    <h2 class="section-title">📝 文章列表</h2>
    
    <div class="article-list-container">
      <div class="article-items">
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
import { useArticles } from '@/composables/useArticles'

const { filteredArticles } = useArticles()
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

.article-list-container {
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
