<template>
  <aside class="admin-sidebar">
    <div class="admin-sidebar-header">
      <div class="admin-sidebar-title">
        <span>📝</span>
        <span>博客管理</span>
      </div>
    </div>
    <nav class="admin-nav">
      <router-link
        v-for="item in navItems"
        :key="item.path"
        :to="item.path"
        class="admin-nav-item"
        :class="{ active: isActive(item.path) }"
      >
        <span>{{ item.icon }}</span>
        <span>{{ item.name }}</span>
      </router-link>
    </nav>
    <div class="admin-sidebar-footer">
      <router-link to="/" class="admin-btn admin-btn-sm" style="margin-bottom: 8px; display: flex">
        ← 返回前台
      </router-link>
      <button class="admin-btn admin-btn-sm admin-btn-danger" style="width: 100%; display: flex; justify-content: center" @click="handleLogout">
        🚪 退出登录
      </button>
    </div>
  </aside>
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router'
import { useAdminAuth } from '@/composables/useAdminAuth'

const props = defineProps({
  active: {
    type: String,
    default: 'dashboard'
  }
})

const route = useRoute()
const router = useRouter()
const { logout } = useAdminAuth()

const navItems = [
  { name: '仪表盘', path: '/admin', icon: '📊' },
  { name: '文章列表', path: '/admin/article', icon: '📋' },
  { name: '写文章', path: '/admin/editor', icon: '✏️' }
]

const isActive = (path) => {
  if (path === '/admin') return route.path === '/admin'
  return route.path.startsWith(path)
}

const handleLogout = () => {
  logout()
  router.push('/admin/login')
}
</script>

<style scoped>
@import '@/styles/admin.css';
</style>
