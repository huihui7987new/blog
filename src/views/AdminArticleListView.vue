<template>
  <div class="admin-layout">
    <AdminSidebar active="article" />
    <main class="admin-main">
      <div class="admin-page-header">
        <h1 class="admin-page-title">📋 文章列表</h1>
        <p class="admin-page-desc">管理所有博客文章</p>
      </div>

      <!-- 工具栏 -->
      <div class="admin-toolbar">
        <input
          v-model="searchKeyword"
          class="admin-search-input"
          type="text"
          placeholder="搜索文章标题..."
          @input="handleSearch"
        />
        <select v-model="filterCategory" class="admin-select" style="width: auto" @change="handleSearch">
          <option value="">全部分类</option>
          <option v-for="cat in categories" :key="cat" :value="cat">{{ cat }}</option>
        </select>
        <router-link to="/admin/editor" class="admin-btn admin-btn-primary">
          ✏️ 新建文章
        </router-link>
      </div>

      <!-- 文章列表 -->
      <div v-if="filteredArticles.length === 0" class="empty-state">
        <div class="empty-state-icon">📭</div>
        <div class="empty-state-title">暂无文章</div>
        <p style="margin-top: 8px">试试其他关键词或创建新文章</p>
      </div>

      <table v-else class="admin-table">
        <thead>
          <tr>
            <th style="width: 5%">#</th>
            <th style="width: 35%">标题</th>
            <th style="width: 15%">分类</th>
            <th style="width: 20%">标签</th>
            <th style="width: 15%">日期</th>
            <th style="width: 10%">操作</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(article, index) in filteredArticles" :key="article.id">
            <td style="color: var(--text-secondary); font-size: 13px">{{ index + 1 }}</td>
            <td>
              <div style="font-weight: 500; margin-bottom: 4px">{{ article.title }}</div>
              <div style="font-size: 12px; color: var(--text-secondary)">
                {{ article.readTime }}
              </div>
            </td>
            <td>
              <span class="mini-tag">{{ article.category }}</span>
            </td>
            <td>
              <div class="article-tags">
                <span v-for="tag in (article.tags || []).slice(0, 2)" :key="tag" class="mini-tag">
                  {{ tag }}
                </span>
                <span v-if="(article.tags || []).length > 2" class="mini-tag">
                  +{{ article.tags.length - 2 }}
                </span>
              </div>
            </td>
            <td style="color: var(--text-secondary); font-size: 13px">{{ article.date }}</td>
            <td>
              <div class="admin-table-actions">
                <router-link :to="`/admin/editor/${article.id}`" class="admin-btn admin-btn-sm" title="编辑">✏️</router-link>
                <button class="admin-btn admin-btn-sm admin-btn-danger" title="删除" @click="handleDelete(article)">🗑️</button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </main>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useAdminArticles } from '@/composables/useAdminArticles'
import { useAdminAuth } from '@/composables/useAdminAuth'
import AdminSidebar from '@/components/admin/AdminSidebar.vue'

const { articles, initArticles, deleteArticle } = useAdminArticles()
const { initAuth } = useAdminAuth()

onMounted(async () => {
  initAuth()
  await initArticles()
})

const searchKeyword = ref('')
const filterCategory = ref('')

const categories = computed(() => {
  const cats = new Set()
  articles.value.forEach(a => { if (a.category) cats.add(a.category) })
  return [...cats]
})

const filteredArticles = computed(() => {
  return articles.value.filter(a => {
    const matchKeyword = !searchKeyword.value || a.title.toLowerCase().includes(searchKeyword.value.toLowerCase())
    const matchCategory = !filterCategory.value || a.category === filterCategory.value
    return matchKeyword && matchCategory
  })
})

const handleSearch = () => {}

const handleDelete = async (article) => {
  if (!confirm(`确定删除「${article.title}」吗？此操作不可恢复。`)) return
  await deleteArticle(article.id)
}
</script>

<style scoped>
@import '@/styles/admin.css';
</style>
