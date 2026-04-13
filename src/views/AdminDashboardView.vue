<template>
  <div class="admin-layout">
    <AdminSidebar active="dashboard" />
    <main class="admin-main">
      <div class="admin-page-header">
        <h1 class="admin-page-title">📊 仪表盘</h1>
        <p class="admin-page-desc">博客数据总览</p>
      </div>

      <!-- 统计卡片 -->
      <div class="stats-grid">
        <div class="stat-card">
          <div class="stat-card-icon" style="background: rgba(99,102,241,0.1)">📝</div>
          <div class="stat-card-value">{{ stats.total }}</div>
          <div class="stat-card-label">文章总数</div>
        </div>
        <div class="stat-card">
          <div class="stat-card-icon" style="background: rgba(16,185,129,0.1)">📂</div>
          <div class="stat-card-value">{{ stats.categories }}</div>
          <div class="stat-card-label">分类数量</div>
        </div>
        <div class="stat-card">
          <div class="stat-card-icon" style="background: rgba(245,158,11,0.1)">🏷️</div>
          <div class="stat-card-value">{{ stats.tags }}</div>
          <div class="stat-card-label">标签数量</div>
        </div>
        <div class="stat-card">
          <div class="stat-card-icon" style="background: rgba(236,72,153,0.1)">📅</div>
          <div class="stat-card-value">{{ stats.recent }}</div>
          <div class="stat-card-label">本月新增</div>
        </div>
      </div>

      <!-- 快捷操作 -->
      <div class="quick-actions">
        <router-link to="/admin/editor" class="admin-btn admin-btn-primary">
          ✏️ 写文章
        </router-link>
        <router-link to="/admin/article" class="admin-btn">
          📋 文章列表
        </router-link>
        <button class="admin-btn" @click="handleSync">
          🔄 同步数据
        </button>
      </div>

      <!-- 最新文章列表 -->
      <div class="card" style="padding: 0">
        <div style="padding: 16px 20px; border-bottom: 1px solid var(--border); display: flex; align-items: center; justify-content: space-between">
          <span style="font-weight: 600; font-size: 15px">最近文章</span>
          <router-link to="/admin/article" class="admin-btn admin-btn-sm">查看全部</router-link>
        </div>
        <div v-if="recentArticles.length === 0" class="empty-state">
          <div class="empty-state-icon">📭</div>
          <div class="empty-state-title">暂无文章</div>
        </div>
        <table v-else class="admin-table">
          <thead>
            <tr>
              <th style="width: 50%">标题</th>
              <th>分类</th>
              <th>日期</th>
              <th>操作</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="article in recentArticles" :key="article.id">
              <td>
                <div style="font-weight: 500">{{ article.title }}</div>
                <div style="font-size: 12px; color: var(--text-secondary); margin-top: 2px">{{ article.readTime }}</div>
              </td>
              <td>
                <span class="mini-tag">{{ article.category }}</span>
              </td>
              <td style="color: var(--text-secondary); font-size: 13px">{{ article.date }}</td>
              <td>
                <div class="admin-table-actions">
                  <router-link :to="`/article/${article.id}`" class="admin-btn admin-btn-sm">👁️</router-link>
                  <router-link :to="`/admin/editor/${article.id}`" class="admin-btn admin-btn-sm">✏️</router-link>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </main>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useAdminArticles } from '@/composables/useAdminArticles'
import { useAdminAuth } from '@/composables/useAdminAuth'
import AdminSidebar from '@/components/admin/AdminSidebar.vue'

const { articles, initArticles } = useAdminArticles()
const { initAuth } = useAdminAuth()

onMounted(async () => {
  initAuth()
  await initArticles()
})

const stats = computed(() => {
  const allTags = new Set()
  const allCategories = new Set()
  articles.value.forEach(a => {
    if (a.tags) a.tags.forEach(t => allTags.add(t))
    if (a.category) allCategories.add(a.category)
  })

  const now = new Date()
  const thisMonth = now.getFullYear() + '-' + String(now.getMonth() + 1).padStart(2, '0')
  const recent = articles.value.filter(a => a.date && a.date.startsWith(thisMonth)).length

  return {
    total: articles.value.length,
    categories: allCategories.size,
    tags: allTags.size,
    recent
  }
})

const recentArticles = computed(() => articles.value.slice(0, 5))

const handleSync = () => {
  alert('数据已同步到 localStorage，可通过 Git 提交更新 articles.json')
}
</script>

<style scoped>
@import '@/styles/admin.css';
</style>
