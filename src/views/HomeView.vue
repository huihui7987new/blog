<template>
  <div class="home">
    <div class="banner">
      <div class="banner-content">
        <div>Welcome to My Blog</div>
        <div class="banner-sub">技术 · 生活 · 成长</div>
      </div>
    </div>
    
    <h2 class="section-title">🔥 最新文章</h2>
    
    <div class="article-grid">
      <ArticleCard 
        v-for="article in featuredArticles" 
        :key="article.id"
        :article="article"
      />
    </div>
    
    <StatBar :stats="stats" />
  </div>
</template>

<script setup>
import { useArticles } from '@/composables/useArticles'
import ArticleCard from '@/components/ArticleCard.vue'
import StatBar from '@/components/StatBar.vue'

const { featuredArticles, stats } = useArticles()
</script>

<style scoped>
.home {
  padding-bottom: 60px;
}

.banner {
  height: 280px;
  border-radius: var(--radius);
  background: linear-gradient(135deg, var(--primary), var(--primary-end));
  margin-bottom: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-family: var(--font-heading);
  font-size: 32px;
  font-weight: 700;
  position: relative;
  overflow: hidden;
}

.banner::before {
  content: "";
  position: absolute;
  inset: 0;
  background: url("data:image/svg+xml,%3Csvg width=60 height=60 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23ffffff%22 fill-opacity=%220.1%22%3E%3Cpath d=%22M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
}

.banner-content {
  position: relative;
  text-align: center;
}

.banner-sub {
  font-size: 14px;
  font-weight: 400;
  opacity: 0.9;
  margin-top: 8px;
}

.section-title {
  font-family: var(--font-heading);
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 20px;
  color: var(--text);
}

.article-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

@media (max-width: 768px) {
  .article-grid {
    grid-template-columns: 1fr;
  }
  
  .banner {
    height: 200px;
    font-size: 24px;
  }
}
</style>
