<template>
  <nav class="nav" :class="{ scrolled: isScrolled }">
    <router-link to="/" class="nav-logo">高辉的博客</router-link>
    <div class="nav-links">
      <router-link 
        v-for="link in navLinks" 
        :key="link.path"
        :to="link.path" 
        class="nav-link"
        :class="{ active: isActive(link.path) }"
      >
        {{ link.name }}
      </router-link>
    </div>
    <div class="nav-right">
      <button class="nav-search-btn" @click="$emit('openSearch')">
        <span class="search-icon-inline">🔍</span>
        <span class="search-text">搜索</span>
        <kbd class="search-kbd">Ctrl+K</kbd>
      </button>
      <div class="avatar">G</div>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useRoute } from 'vue-router'

const emit = defineEmits(['openSearch'])
const route = useRoute()
const isScrolled = ref(false)

const navLinks = [
  { name: '首页', path: '/' },
  { name: '文章', path: '/article' },
  { name: '作品集', path: '/portfolio' },
  { name: '关于', path: '/about' }
]

const isActive = (path) => {
  if (path === '/') {
    return route.path === '/'
  }
  return route.path.startsWith(path)
}

const handleScroll = () => {
  isScrolled.value = window.scrollY > 10
}

const handleKeydown = (e) => {
  // / 键打开搜索（不在输入框中时）
  if (e.key === '/' && !['INPUT', 'TEXTAREA'].includes(e.target.tagName)) {
    e.preventDefault()
    emit('openSearch')
  }
  // Ctrl+K 打开搜索
  if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
    e.preventDefault()
    emit('openSearch')
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  window.addEventListener('keydown', handleKeydown)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  window.removeEventListener('keydown', handleKeydown)
})
</script>

<style scoped>
.nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: var(--nav-h);
  background: var(--bg-card);
  border-bottom: 1px solid var(--border);
  z-index: 100;
  display: flex;
  align-items: center;
  padding: 0 24px;
  gap: 24px;
  transition: box-shadow 0.3s;
}

.nav.scrolled {
  box-shadow: var(--shadow);
}

.nav-logo {
  font-family: var(--font-heading);
  font-size: 20px;
  font-weight: 700;
  color: var(--text);
  text-decoration: none;
}

.nav-links {
  display: flex;
  gap: 8px;
}

.nav-link {
  padding: 8px 16px;
  border-radius: var(--radius);
  color: var(--text-secondary);
  font-size: 14px;
  text-decoration: none;
  transition: all 0.2s;
}

.nav-link:hover,
.nav-link.active {
  background: var(--primary);
  color: #fff;
}

.nav-right {
  margin-left: auto;
  display: flex;
  align-items: center;
  gap: 12px;
}

.nav-search-btn {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 7px 14px;
  border-radius: var(--radius);
  border: 1px solid var(--border);
  background: var(--bg-card);
  color: var(--text-secondary);
  cursor: pointer;
  font-size: 14px;
  transition: all 0.2s;
  font-family: inherit;
}

.nav-search-btn:hover {
  border-color: var(--primary);
  color: var(--primary);
}

.search-icon-inline {
  font-size: 14px;
}

.search-text {
  font-size: 13px;
}

.search-kbd {
  padding: 2px 6px;
  border: 1px solid var(--border);
  border-radius: 4px;
  background: var(--bg);
  font-size: 11px;
  font-family: inherit;
  color: var(--text-secondary);
}

.avatar {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--primary), var(--primary-end));
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-weight: 600;
  font-size: 14px;
}

@media (max-width: 768px) {
  .nav-links {
    display: none;
  }

  .search-text,
  .search-kbd {
    display: none;
  }

  .nav-search-btn {
    padding: 8px 10px;
  }
}
</style>
