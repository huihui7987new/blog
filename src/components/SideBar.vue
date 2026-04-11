<template>
  <aside class="sidebar">
    <div class="sidebar-section">
      <div class="sidebar-title">分类</div>
      <div 
        v-for="category in categories" 
        :key="category"
        class="sidebar-item"
        :class="{ active: selectedCategory === category }"
        @click="setCategory(category)"
      >
        {{ category }}
      </div>
    </div>
    <div class="sidebar-section">
      <div class="sidebar-title">标签云</div>
      <div class="tag-cloud">
        <span 
          v-for="tag in tags" 
          :key="tag"
          class="tag"
          :class="{ active: selectedTag === tag }"
          @click="setTag(tag)"
        >
          {{ tag }}
        </span>
      </div>
    </div>
    <div class="sidebar-section">
      <div class="sidebar-title">近期文章</div>
      <router-link 
        v-for="article in recentArticles.slice(0, 3)" 
        :key="article.id"
        :to="`/article/${article.id}`"
        class="sidebar-item"
      >
        {{ article.title }}
      </router-link>
    </div>
  </aside>
</template>

<script setup>
import { useArticles } from '@/composables/useArticles'

const { 
  categories, 
  tags, 
  recentArticles, 
  selectedCategory, 
  selectedTag,
  setCategory, 
  setTag 
} = useArticles()
</script>

<style scoped>
.sidebar {
  width: var(--sidebar-w);
  padding: 24px;
  border-right: 1px solid var(--border);
  position: sticky;
  top: var(--nav-h);
  height: calc(100vh - var(--nav-h));
  overflow-y: auto;
  background: var(--bg-card);
}

.sidebar-section {
  margin-bottom: 24px;
}

.sidebar-title {
  font-size: 12px;
  font-weight: 600;
  color: var(--text-secondary);
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-bottom: 12px;
}

.sidebar-item {
  display: block;
  padding: 8px 12px;
  border-radius: var(--radius);
  color: var(--text);
  font-size: 14px;
  cursor: pointer;
  transition: all 0.2s;
  margin-bottom: 4px;
  text-decoration: none;
}

.sidebar-item:hover,
.sidebar-item.active {
  background: var(--primary);
  color: #fff;
}

.tag-cloud {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}

@media (max-width: 768px) {
  .sidebar {
    display: none;
  }
}
</style>
