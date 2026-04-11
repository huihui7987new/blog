<template>
  <div class="app" :data-theme="themeStore.currentTheme" :data-mode="themeStore.currentMode">
    <NavBar @openSearch="showSearch = true" />
    <div class="layout">
      <SideBar />
      <main class="main">
        <router-view v-slot="{ Component }">
          <transition name="fade" mode="out-in">
            <component :is="Component" />
          </transition>
        </router-view>
      </main>
    </div>
    <MobileNav />
    <ThemeToggle />
    <BackToTop />
    <SearchModal :visible="showSearch" @close="showSearch = false" />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import NavBar from '@/components/NavBar.vue'
import SideBar from '@/components/SideBar.vue'
import MobileNav from '@/components/MobileNav.vue'
import ThemeToggle from '@/components/ThemeToggle.vue'
import BackToTop from '@/components/BackToTop.vue'
import SearchModal from '@/components/SearchModal.vue'
import { useThemeStore } from '@/composables/useTheme'

const themeStore = useThemeStore()
const showSearch = ref(false)

onMounted(() => {
  // 恢复主题设置
  const savedTheme = localStorage.getItem('blog-theme')
  const savedMode = localStorage.getItem('blog-mode')
  if (savedTheme) themeStore.setTheme(savedTheme)
  if (savedMode) themeStore.setMode(savedMode)

  // 全局键盘快捷键
  window.addEventListener('keydown', (e) => {
    // / 键打开搜索（不在输入框中时）
    if (e.key === '/' && !['INPUT', 'TEXTAREA'].includes(e.target.tagName)) {
      e.preventDefault()
      showSearch.value = true
    }
    // Ctrl+K 打开搜索
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
      e.preventDefault()
      showSearch.value = true
    }
  })
})
</script>

<style scoped>
.layout {
  display: flex;
  margin-top: var(--nav-h);
  min-height: calc(100vh - var(--nav-h));
}

.main {
  flex: 1;
  padding: 24px 32px;
  max-width: 900px;
}

@media (max-width: 768px) {
  .main {
    padding: 16px;
    max-width: 100%;
  }
}
</style>

<style>
/* 全局路由过渡动画 */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.25s ease, transform 0.25s ease;
}

.fade-enter-from {
  opacity: 0;
  transform: translateY(8px);
}

.fade-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}
</style>
