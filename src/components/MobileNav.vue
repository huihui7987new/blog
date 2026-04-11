<template>
  <nav class="mobile-nav">
    <div class="mobile-nav-items">
      <router-link 
        v-for="item in navItems" 
        :key="item.path"
        :to="item.path"
        class="mobile-nav-item"
        :class="{ active: isActive(item.path) }"
      >
        <div class="mobile-nav-icon">{{ item.icon }}</div>
        <div>{{ item.name }}</div>
      </router-link>
    </div>
  </nav>
</template>

<script setup>
import { useRoute } from 'vue-router'

const route = useRoute()

const navItems = [
  { name: '首页', path: '/', icon: '🏠' },
  { name: '作品', path: '/portfolio', icon: '💼' },
  { name: '分类', path: '/article', icon: '📁' },
  { name: '我的', path: '/about', icon: '👤' }
]

const isActive = (path) => {
  if (path === '/') {
    return route.path === '/'
  }
  return route.path.startsWith(path)
}
</script>

<style scoped>
.mobile-nav {
  display: none;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 60px;
  background: var(--bg-card);
  border-top: 1px solid var(--border);
  z-index: 100;
}

.mobile-nav-items {
  display: flex;
  height: 100%;
}

.mobile-nav-item {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4px;
  color: var(--text-secondary);
  font-size: 11px;
  cursor: pointer;
  text-decoration: none;
}

.mobile-nav-item.active {
  color: var(--primary);
}

.mobile-nav-icon {
  font-size: 20px;
}

@media (max-width: 768px) {
  .mobile-nav {
    display: block;
  }
}
</style>
