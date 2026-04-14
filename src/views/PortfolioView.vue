<template>
  <div class="portfolio">
    <div class="portfolio-header">
      <h2 class="section-title">💼 作品集</h2>
      <p class="section-desc">精心打造的项目作品，记录技术成长的每一步</p>
    </div>
    
    <div class="portfolio-filters">
      <button 
        v-for="filter in filters" 
        :key="filter.value"
        class="filter-btn"
        :class="{ active: activeFilter === filter.value }"
        @click="activeFilter = filter.value"
      >
        <span class="filter-icon">{{ filter.icon }}</span>
        {{ filter.label }}
      </button>
    </div>

    <transition-group 
      name="portfolio-list" 
      tag="div" 
      class="portfolio-grid"
    >
      <div 
        v-for="project in filteredProjects" 
        :key="project.id"
        class="portfolio-card"
      >
        <div class="portfolio-cover" :style="{ background: project.cover }">
          <div class="portfolio-cover-overlay">
            <a 
              v-if="project.demo" 
              :href="project.demo" 
              target="_blank" 
              rel="noopener"
              class="cover-link"
              @click.stop
            >
              🔗 预览
            </a>
            <a 
              v-if="project.github" 
              :href="project.github" 
              target="_blank" 
              rel="noopener"
              class="cover-link"
              @click.stop
            >
              📁 源码
            </a>
          </div>
        </div>
        <div class="portfolio-body">
          <div class="portfolio-title">{{ project.title }}</div>
          <div class="portfolio-desc">{{ project.description }}</div>
          <div class="portfolio-tags">
            <span v-for="tag in project.tags" :key="tag" class="portfolio-tag">{{ tag }}</span>
          </div>
          <div class="portfolio-links">
            <a 
              v-if="project.demo" 
              :href="project.demo" 
              target="_blank" 
              rel="noopener"
              class="portfolio-link"
            >
              🔗 在线预览
            </a>
            <a 
              v-if="project.github" 
              :href="project.github" 
              target="_blank" 
              rel="noopener"
              class="portfolio-link"
            >
              📁 GitHub
            </a>
          </div>
        </div>
      </div>
    </transition-group>

    <div v-if="filteredProjects.length === 0" class="portfolio-empty">
      <span class="empty-icon">🏗️</span>
      <p>该分类暂无作品，持续更新中...</p>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import portfolioData from '@/data/portfolio.json'

const filters = [
  { label: '全部', value: 'all', icon: '🎯' },
  { label: '前端', value: 'frontend', icon: '🎨' },
  { label: '后端', value: 'backend', icon: '⚙️' },
  { label: '设计', value: 'design', icon: '✏️' },
  { label: '其他', value: 'other', icon: '🚀' }
]

const activeFilter = ref('all')
const projects = ref(portfolioData)

const filteredProjects = computed(() => {
  if (activeFilter.value === 'all') {
    return projects.value
  }
  return projects.value.filter(p => p.category === activeFilter.value)
})
</script>

<style scoped>
.portfolio {
  padding-bottom: 60px;
}

.portfolio-header {
  margin-bottom: 28px;
}

.section-title {
  font-family: var(--font-heading);
  font-size: 26px;
  font-weight: 700;
  margin-bottom: 8px;
  color: var(--text);
}

.section-desc {
  font-size: 15px;
  color: var(--text-secondary);
}

.portfolio-filters {
  display: flex;
  gap: 8px;
  margin-bottom: 28px;
  flex-wrap: wrap;
}

.filter-btn {
  padding: 8px 18px;
  border-radius: 24px;
  border: 1px solid var(--border);
  background: var(--bg-card);
  color: var(--text-secondary);
  font-size: 14px;
  cursor: pointer;
  transition: all 0.25s ease;
  display: flex;
  align-items: center;
  gap: 6px;
}

.filter-btn:hover {
  border-color: var(--primary);
  color: var(--primary);
}

.filter-btn.active {
  background: var(--primary);
  color: #fff;
  border-color: var(--primary);
  box-shadow: 0 2px 8px rgba(99, 102, 241, 0.3);
}

.filter-icon {
  font-size: 14px;
}

.portfolio-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
}

.portfolio-card {
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  overflow: hidden;
  transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);
}

.portfolio-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.12);
  border-color: var(--primary);
}

.portfolio-cover {
  height: 180px;
  position: relative;
  overflow: hidden;
}

.portfolio-cover-overlay {
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.portfolio-card:hover .portfolio-cover-overlay {
  opacity: 1;
}

.cover-link {
  padding: 8px 16px;
  border-radius: var(--radius);
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(8px);
  color: #fff;
  font-size: 14px;
  text-decoration: none;
  transition: all 0.2s;
  border: 1px solid rgba(255, 255, 255, 0.3);
}

.cover-link:hover {
  background: rgba(255, 255, 255, 0.35);
}

.portfolio-body {
  padding: 20px;
}

.portfolio-title {
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 8px;
  color: var(--text);
}

.portfolio-desc {
  font-size: 14px;
  color: var(--text-secondary);
  margin-bottom: 14px;
  line-height: 1.6;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.portfolio-tags {
  display: flex;
  gap: 8px;
  margin-bottom: 16px;
  flex-wrap: wrap;
}

.portfolio-tag {
  padding: 4px 10px;
  background: var(--bg);
  border-radius: 4px;
  font-size: 12px;
  color: var(--text-secondary);
  border: 1px solid var(--border);
}

.portfolio-links {
  display: flex;
  gap: 16px;
  padding-top: 12px;
  border-top: 1px solid var(--border);
}

.portfolio-link {
  font-size: 13px;
  color: var(--primary);
  font-weight: 500;
  text-decoration: none;
  transition: opacity 0.2s;
}

.portfolio-link:hover {
  opacity: 0.8;
}

.portfolio-empty {
  text-align: center;
  padding: 60px 0;
  color: var(--text-secondary);
}

.empty-icon {
  font-size: 48px;
  display: block;
  margin-bottom: 12px;
}

/* 列表过渡动画 */
.portfolio-list-enter-active,
.portfolio-list-leave-active {
  transition: all 0.35s ease;
}

.portfolio-list-enter-from {
  opacity: 0;
  transform: translateY(20px);
}

.portfolio-list-leave-to {
  opacity: 0;
  transform: scale(0.95);
}

.portfolio-list-move {
  transition: transform 0.35s ease;
}

@media (max-width: 768px) {
  .portfolio-grid {
    grid-template-columns: 1fr;
  }
  
  .portfolio-cover {
    height: 160px;
  }
}
</style>
