<template>
  <div class="admin-layout">
    <AdminSidebar active="editor" />
    <main class="admin-main">
      <div class="admin-page-header" style="display: flex; align-items: center; justify-content: space-between">
        <div>
          <h1 class="admin-page-title">{{ isEditing ? '✏️ 编辑文章' : '✏️ 写文章' }}</h1>
          <p class="admin-page-desc">{{ isEditing ? '修改文章内容' : '创建新的博客文章' }}</p>
        </div>
        <div style="display: flex; gap: 10px">
          <button class="admin-btn" @click="saveDraft" :disabled="saving">💾 保存草稿</button>
          <button class="admin-btn admin-btn-primary" @click="publishArticle" :disabled="saving">🚀 发布文章</button>
        </div>
      </div>

      <!-- 发布成功后提示 -->
      <div v-if="showDownloadTip" class="download-tip">
        ✅ 文章已保存！<strong>articles.json</strong> 已开始下载。
        下载后请将它提交到 GitHub 仓库，否则其他访客看不到这篇文章。
      </div>

      <!-- 基本信息 -->
      <div class="card" style="padding: 20px; margin-bottom: 20px">
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px">
          <div class="admin-form-group" style="grid-column: 1 / -1">
            <label class="admin-label">文章标题 *</label>
            <input v-model="form.title" class="admin-input" type="text" placeholder="输入文章标题" />
          </div>
          <div class="admin-form-group">
            <label class="admin-label">摘要</label>
            <textarea v-model="form.excerpt" class="admin-textarea" style="min-height: 70px" placeholder="输入文章摘要（可选，自动截取正文前100字）" />
          </div>
          <div class="admin-form-group">
            <label class="admin-label">分类 *</label>
            <input v-model="form.category" class="admin-input" type="text" placeholder="如：技术笔记" list="category-list" />
            <datalist id="category-list">
              <option v-for="cat in existingCategories" :key="cat" :value="cat" />
            </datalist>
          </div>
          <div class="admin-form-group">
            <label class="admin-label">标签</label>
            <input v-model="tagsInput" class="admin-input" type="text" placeholder="多个标签用英文逗号分隔" />
            <div class="admin-input-hint">已有标签：{{ existingTags.slice(0, 5).join(', ') }}</div>
          </div>
          <div class="admin-form-group">
            <label class="admin-label">封面颜色</label>
            <div style="display: flex; gap: 8px; flex-wrap: wrap">
              <div
                v-for="color in colorOptions"
                :key="color.value"
                :style="{ background: color.value, width: '32px', height: '32px', borderRadius: '6px', cursor: 'pointer', border: form.cover === color.value ? '3px solid var(--primary)' : '2px solid var(--border)' }"
                @click="form.cover = color.value"
                :title="color.name"
              />
            </div>
          </div>
        </div>
      </div>

      <!-- Markdown 编辑器 -->
      <div class="card" style="padding: 16px">
        <div class="editor-container">
          <!-- 左侧：编辑器 -->
          <div class="editor-pane">
            <div class="editor-pane-label">📝 Markdown 编辑</div>
            <textarea
              v-model="form.content"
              class="editor-textarea"
              placeholder="在这里用 Markdown 写文章内容...

示例：
# 标题

正文内容...

## 二级标题

- 列表项 1
- 列表项 2

```javascript
// 代码块
const hello = 'world'
```

> 引用块"
              @input="updatePreview"
              ref="textareaRef"
            />
          </div>
          <!-- 右侧：预览 -->
          <div class="editor-pane">
            <div class="editor-pane-label">👁️ 实时预览</div>
            <div class="editor-preview">
              <div v-if="previewHtml" class="markdown-body" v-html="previewHtml" />
              <div v-else style="color: var(--text-secondary); font-size: 14px; text-align: center; margin-top: 60px">
                开始编写左侧内容，实时预览将显示在这里
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, watch, nextTick } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { marked } from 'marked'
import hljs from 'highlight.js'
import { useAdminArticles } from '@/composables/useAdminArticles'
import { useAdminAuth } from '@/composables/useAdminAuth'
import AdminSidebar from '@/components/admin/AdminSidebar.vue'

const route = useRoute()
const router = useRouter()
const { articles, initArticles, createArticle, updateArticle, getArticle } = useAdminArticles()
const { initAuth } = useAdminAuth()

// 配置 marked
marked.setOptions({
  highlight: (code, lang) => {
    if (lang && hljs.getLanguage(lang)) {
      return hljs.highlight(code, { language: lang }).value
    }
    return hljs.highlightAuto(code).value
  },
  breaks: true,
  gfm: true
})

const form = ref({
  title: '',
  excerpt: '',
  content: '',
  category: '',
  cover: 'linear-gradient(135deg, #6366f1, #8b5cf6)'
})

const tagsInput = ref('')
const previewHtml = ref('')
const saving = ref(false)
const textareaRef = ref(null)
const showDownloadTip = ref(false)

const isEditing = computed(() => !!route.params.id)

const colorOptions = [
  { name: '靛蓝渐变', value: 'linear-gradient(135deg, #667eea, #764ba2)' },
  { name: '绿色渐变', value: 'linear-gradient(135deg, #10b981, #34d399)' },
  { name: '金色渐变', value: 'linear-gradient(135deg, #f59e0b, #fbbf24)' },
  { name: '红色渐变', value: 'linear-gradient(135deg, #ef4444, #f87171)' },
  { name: '紫色渐变', value: 'linear-gradient(135deg, #8b5cf6, #a78bfa)' },
  { name: '青色渐变', value: 'linear-gradient(135deg, #06b6d4, #22d3ee)' },
  { name: '粉色渐变', value: 'linear-gradient(135deg, #ec4899, #f472b6)' },
  { name: '青绿渐变', value: 'linear-gradient(135deg, #14b8a6, #2dd4bf)' }
]

const existingCategories = computed(() => {
  const cats = new Set()
  articles.value.forEach(a => { if (a.category) cats.add(a.category) })
  return [...cats]
})

const existingTags = computed(() => {
  const tags = new Set()
  articles.value.forEach(a => { if (a.tags) a.tags.forEach(t => tags.add(t)) })
  return [...tags]
})

const updatePreview = () => {
  if (form.value.content) {
    previewHtml.value = marked(form.value.content)
  } else {
    previewHtml.value = ''
  }
}

const parseTags = (input) => {
  return input.split(',').map(t => t.trim()).filter(t => t)
}

// 触发浏览器下载 articles.json
const triggerDownload = () => {
  const jsonContent = JSON.stringify(articles.value, null, 2)
  const blob = new Blob([jsonContent], { type: 'application/json' })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = 'articles.json'
  document.body.appendChild(a)
  a.click()
  document.body.removeChild(a)
  URL.revokeObjectURL(url)
}

const saveDraft = async () => {
  if (!form.value.title) {
    alert('请输入文章标题')
    return
  }
  saving.value = true
  showDownloadTip.value = false
  try {
    const data = {
      title: form.value.title,
      excerpt: form.value.excerpt || form.value.content.slice(0, 100) + '...',
      content: form.value.content,
      category: form.value.category || '未分类',
      tags: parseTags(tagsInput.value),
      cover: form.value.cover
    }

    if (isEditing.value) {
      await updateArticle(parseInt(route.params.id), data)
    } else {
      await createArticle(data)
    }

    // 发布成功后触发下载
    triggerDownload()
    showDownloadTip.value = true

    await router.push('/admin/article')
  } finally {
    saving.value = false
  }
}

const publishArticle = async () => {
  await saveDraft()
}

onMounted(async () => {
  initAuth()
  await initArticles()

  if (isEditing.value) {
    const article = getArticle(route.params.id)
    if (article) {
      form.value.title = article.title
      form.value.excerpt = article.excerpt || ''
      form.value.content = article.content || ''
      form.value.category = article.category || ''
      form.value.cover = article.cover || colorOptions[0].value
      tagsInput.value = (article.tags || []).join(', ')
      updatePreview()
    } else {
      router.push('/admin/article')
    }
  }
})
</script>

<style scoped>
@import '@/styles/admin.css';

.download-tip {
  background: #f0fdf4;
  border: 1px solid #86efac;
  border-radius: var(--radius);
  padding: 12px 16px;
  margin-bottom: 16px;
  font-size: 14px;
  color: #15803d;
}

.download-tip strong {
  color: #166534;
}
</style>
