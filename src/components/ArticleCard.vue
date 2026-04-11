<template>
  <router-link :to="`/article/${article.id}`" class="article-card">
    <div class="article-cover" :style="{ background: article.cover }"></div>
    <div class="article-body">
      <div class="article-title">{{ article.title }}</div>
      <div class="article-excerpt">{{ article.excerpt }}</div>
      <div class="article-meta">
        <span>{{ article.date }}</span>
        <span>阅读 {{ article.readTime }}</span>
      </div>
    </div>
  </router-link>
</template>

<script setup>
defineProps({
  article: {
    type: Object,
    required: true
  }
})
</script>

<style scoped>
.article-card {
  background: var(--bg-card);
  border-radius: var(--radius);
  overflow: hidden;
  border: 1px solid var(--border);
  cursor: pointer;
  transition: all 0.3s;
  text-decoration: none;
  display: block;
}

.article-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow);
}

.article-cover {
  height: 140px;
  background: linear-gradient(135deg, var(--primary), var(--primary-end));
}

.article-body {
  padding: 16px;
}

.article-title {
  font-size: 15px;
  font-weight: 600;
  margin-bottom: 8px;
  color: var(--text);
  line-height: 1.4;
}

.article-excerpt {
  font-size: 13px;
  color: var(--text-secondary);
  margin-bottom: 12px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.article-meta {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 12px;
  color: var(--text-secondary);
}
</style>
