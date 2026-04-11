<template>
  <Teleport to="body">
    <transition name="search-modal">
      <div v-if="visible" class="search-overlay" @click.self="close">
        <div class="search-modal">
          <div class="search-header">
            <span class="search-icon">🔍</span>
            <input
              ref="searchInput"
              v-model="query"
              type="text"
              class="search-input"
              placeholder="搜索文章标题、内容、标签..."
              @input="onSearch"
              @keydown.esc="close"
              @keydown.down.prevent="moveDown"
              @keydown.up.prevent="moveUp"
              @keydown.enter.prevent="selectCurrent"
            />
            <button class="search-close" @click="close">ESC</button>
          </div>

          <div v-if="query && results.length > 0" class="search-results">
            <div class="search-results-header">
              找到 {{ results.length }} 篇相关文章
            </div>
            <div
              v-for="(result, index) in results"
              :key="result.id"
              class="search-result-item"
              :class="{ active: index === activeIndex }"
              @click="goToArticle(result)"
              @mouseenter="activeIndex = index"
            >
              <div class="result-cover" :style="{ background: result.cover }"></div>
              <div class="result-body">
                <div class="result-title" v-html="highlight(result.title)"></div>
                <div class="result-excerpt" v-html="highlight(truncate(result.excerpt, 80))"></div>
                <div class="result-tags">
                  <span 
                    v-for="tag in result.tags" 
                    :key="tag" 
                    class="result-tag"
                    v-html="highlight(tag)"
                  ></span>
                </div>
              </div>
              <div class="result-meta">
                <span class="result-date">{{ result.date }}</span>
                <span class="result-time">{{ result.readTime }}</span>
              </div>
            </div>
          </div>

          <div v-else-if="query && results.length === 0" class="search-empty">
            <span class="empty-icon">🔎</span>
            <p>没有找到相关文章</p>
            <p class="empty-hint">试试其他关键词？</p>
          </div>

          <div v-else class="search-hint">
            <div class="hint-keys">
              <kbd>↑</kbd><kbd>↓</kbd> 导航
              <kbd>Enter</kbd> 选择
              <kbd>Esc</kbd> 关闭
            </div>
            <div class="hint-shortcut">按 <kbd>/</kbd> 或 <kbd>Ctrl+K</kbd> 打开搜索</div>
          </div>
        </div>
      </div>
    </transition>
  </Teleport>
</template>

<script setup>
import { ref, watch, nextTick } from 'vue'
import { useRouter } from 'vue-router'
import articlesData from '@/data/articles.json'

const props = defineProps({
  visible: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['close'])

const router = useRouter()
const query = ref('')
const results = ref([])
const activeIndex = ref(-1)
const searchInput = ref(null)

watch(() => props.visible, (val) => {
  if (val) {
    query.value = ''
    results.value = []
    activeIndex.value = -1
    nextTick(() => {
      searchInput.value?.focus()
    })
  }
})

const onSearch = () => {
  activeIndex.value = -1
  if (!query.value.trim()) {
    results.value = []
    return
  }
  const q = query.value.toLowerCase().trim()
  results.value = articlesData.filter(article => {
    return (
      article.title.toLowerCase().includes(q) ||
      article.excerpt.toLowerCase().includes(q) ||
      article.content.toLowerCase().includes(q) ||
      article.tags.some(tag => tag.toLowerCase().includes(q))
    )
  })
}

const highlight = (text) => {
  if (!query.value.trim()) return text
  const q = query.value.trim()
  const regex = new RegExp(`(${escapeRegex(q)})`, 'gi')
  return text.replace(regex, '<mark class="search-highlight">$1</mark>')
}

const escapeRegex = (str) => {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
}

const truncate = (text, max) => {
  if (text.length <= max) return text
  return text.slice(0, max) + '...'
}

const moveDown = () => {
  if (activeIndex.value < results.value.length - 1) {
    activeIndex.value++
  }
}

const moveUp = () => {
  if (activeIndex.value > 0) {
    activeIndex.value--
  }
}

const selectCurrent = () => {
  if (activeIndex.value >= 0 && activeIndex.value < results.value.length) {
    goToArticle(results.value[activeIndex.value])
  }
}

const goToArticle = (article) => {
  close()
  router.push(`/article/${article.id}`)
}

const close = () => {
  emit('close')
}
</script>

<style scoped>
.search-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(4px);
  z-index: 1000;
  display: flex;
  justify-content: center;
  padding-top: 80px;
}

.search-modal {
  width: 640px;
  max-height: 70vh;
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: 16px;
  box-shadow: 0 24px 80px rgba(0, 0, 0, 0.25);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-self: flex-start;
}

.search-header {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 16px 20px;
  border-bottom: 1px solid var(--border);
}

.search-icon {
  font-size: 20px;
  flex-shrink: 0;
}

.search-input {
  flex: 1;
  border: none;
  outline: none;
  background: transparent;
  font-size: 16px;
  color: var(--text);
  font-family: inherit;
}

.search-input::placeholder {
  color: var(--text-secondary);
  opacity: 0.6;
}

.search-close {
  padding: 4px 10px;
  border-radius: 6px;
  border: 1px solid var(--border);
  background: var(--bg);
  color: var(--text-secondary);
  font-size: 12px;
  cursor: pointer;
  flex-shrink: 0;
  font-family: inherit;
}

.search-close:hover {
  border-color: var(--primary);
  color: var(--primary);
}

.search-results {
  overflow-y: auto;
  flex: 1;
}

.search-results-header {
  padding: 10px 20px;
  font-size: 13px;
  color: var(--text-secondary);
  background: var(--bg);
  border-bottom: 1px solid var(--border);
}

.search-result-item {
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 14px 20px;
  cursor: pointer;
  transition: background 0.15s;
  border-bottom: 1px solid var(--border);
}

.search-result-item:last-child {
  border-bottom: none;
}

.search-result-item:hover,
.search-result-item.active {
  background: var(--bg);
}

.result-cover {
  width: 44px;
  height: 44px;
  border-radius: 8px;
  flex-shrink: 0;
}

.result-body {
  flex: 1;
  min-width: 0;
}

.result-title {
  font-size: 15px;
  font-weight: 600;
  color: var(--text);
  margin-bottom: 4px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.result-excerpt {
  font-size: 13px;
  color: var(--text-secondary);
  margin-bottom: 6px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.result-tags {
  display: flex;
  gap: 6px;
}

.result-tag {
  padding: 2px 8px;
  border-radius: 4px;
  background: var(--bg);
  font-size: 11px;
  color: var(--text-secondary);
  border: 1px solid var(--border);
}

.result-meta {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 4px;
  flex-shrink: 0;
}

.result-date,
.result-time {
  font-size: 12px;
  color: var(--text-secondary);
}

.search-empty {
  padding: 48px 20px;
  text-align: center;
}

.empty-icon {
  font-size: 40px;
  display: block;
  margin-bottom: 12px;
}

.search-empty p {
  font-size: 15px;
  color: var(--text-secondary);
}

.empty-hint {
  font-size: 13px !important;
  margin-top: 8px;
  opacity: 0.6;
}

.search-hint {
  padding: 32px 20px;
  text-align: center;
  color: var(--text-secondary);
  font-size: 13px;
}

.hint-keys {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  margin-bottom: 8px;
  flex-wrap: wrap;
}

.hint-shortcut {
  opacity: 0.6;
}

kbd {
  display: inline-block;
  padding: 2px 8px;
  border: 1px solid var(--border);
  border-radius: 4px;
  background: var(--bg);
  font-family: inherit;
  font-size: 12px;
  margin: 0 2px;
}

/* 高亮样式 */
:deep(.search-highlight) {
  background: rgba(99, 102, 241, 0.2);
  color: var(--primary);
  padding: 0 2px;
  border-radius: 2px;
  font-weight: 600;
}

/* 弹窗动画 */
.search-modal-enter-active {
  transition: all 0.25s ease-out;
}

.search-modal-leave-active {
  transition: all 0.2s ease-in;
}

.search-modal-enter-from {
  opacity: 0;
}

.search-modal-enter-from .search-modal {
  transform: scale(0.96) translateY(-10px);
  opacity: 0;
}

.search-modal-leave-to {
  opacity: 0;
}

@media (max-width: 768px) {
  .search-overlay {
    padding-top: 0;
    align-items: flex-start;
  }

  .search-modal {
    width: 100%;
    max-height: 100vh;
    border-radius: 0;
  }
}
</style>
