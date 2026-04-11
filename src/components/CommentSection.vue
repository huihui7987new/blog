<template>
  <div class="comment-section">
    <h3 class="comment-title">💬 评论区</h3>
    <div class="comment-input-wrap">
      <input
        v-model="newComment"
        class="comment-input"
        placeholder="写下你的评论..."
        @keyup.enter="submitComment"
      />
      <button class="comment-submit" @click="submitComment">发表</button>
    </div>
    <div class="comment-list">
      <div v-for="comment in comments" :key="comment.id" class="comment">
        <div class="comment-header">
          <span class="comment-avatar" :style="{ background: getAvatarColor(comment.user) }">
            {{ comment.user.charAt(0).toUpperCase() }}
          </span>
          <span class="comment-user">{{ comment.user }}</span>
          <span class="comment-time">{{ comment.time }}</span>
          <button class="comment-delete" @click="deleteComment(comment.id)">删除</button>
        </div>
        <div class="comment-body">{{ comment.body }}</div>
      </div>
      <div v-if="comments.length === 0" class="comment-empty">
        暂无评论，来抢沙发吧 🎉
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'

const props = defineProps({
  articleId: {
    type: String,
    required: true
  }
})

const newComment = ref('')
const comments = ref([])

const storageKey = computed(() => `comments-${props.articleId}`)

const loadComments = () => {
  try {
    const stored = localStorage.getItem(storageKey.value)
    if (stored) {
      comments.value = JSON.parse(stored)
    }
  } catch (e) {
    comments.value = []
  }
}

const saveComments = () => {
  try {
    localStorage.setItem(storageKey.value, JSON.stringify(comments.value))
  } catch (e) {
    console.warn('localStorage save failed')
  }
}

const submitComment = () => {
  const body = newComment.value.trim()
  if (!body) return

  const comment = {
    id: Date.now(),
    user: '访客',
    body,
    time: formatTime(new Date())
  }

  comments.value.unshift(comment)
  saveComments()
  newComment.value = ''
}

const deleteComment = (id) => {
  comments.value = comments.value.filter(c => c.id !== id)
  saveComments()
}

const formatTime = (date) => {
  const now = new Date()
  const diff = Math.floor((now - date) / 1000)

  if (diff < 60) return '刚刚'
  if (diff < 3600) return `${Math.floor(diff / 60)} 分钟前`
  if (diff < 86400) return `${Math.floor(diff / 3600)} 小时前`
  if (diff < 604800) return `${Math.floor(diff / 86400)} 天前`

  return `${date.getMonth() + 1}-${date.getDate()}`
}

const getAvatarColor = (name) => {
  const colors = [
    '#6366f1', '#8b5cf6', '#ec4899', '#f43f5e',
    '#f97316', '#eab308', '#22c55e', '#14b8a6',
    '#06b6d4', '#3b82f6', '#a855f7', '#64748b'
  ]
  let hash = 0
  for (let i = 0; i < name.length; i++) {
    hash = name.charCodeAt(i) + ((hash << 5) - hash)
  }
  return colors[Math.abs(hash) % colors.length]
}

onMounted(() => {
  loadComments()
})
</script>

<style scoped>
.comment-section {
  margin-top: 16px;
}

.comment-title {
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 16px;
}

.comment-input-wrap {
  display: flex;
  gap: 12px;
  margin-bottom: 20px;
}

.comment-input {
  flex: 1;
  padding: 12px;
  border: 1px solid var(--border);
  border-radius: var(--radius);
  background: var(--bg);
  color: var(--text);
  font-size: 14px;
  outline: none;
  transition: border-color 0.2s;
}

.comment-input:focus {
  border-color: var(--primary);
}

.comment-input::placeholder {
  color: var(--text-secondary);
}

.comment-submit {
  padding: 12px 24px;
  background: var(--primary);
  color: #fff;
  border: none;
  border-radius: var(--radius);
  cursor: pointer;
  font-size: 14px;
  transition: opacity 0.2s;
  white-space: nowrap;
}

.comment-submit:hover {
  opacity: 0.9;
}

.comment-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.comment {
  padding: 16px;
  border: 1px solid var(--border);
  border-radius: var(--radius);
  background: var(--bg-card);
  transition: border-color 0.2s;
}

.comment:hover {
  border-color: var(--primary);
}

.comment-header {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 8px;
}

.comment-avatar {
  width: 28px;
  height: 28px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-weight: 600;
  font-size: 12px;
  flex-shrink: 0;
}

.comment-user {
  font-weight: 600;
  font-size: 14px;
}

.comment-time {
  font-size: 12px;
  color: var(--text-secondary);
  margin-left: auto;
}

.comment-delete {
  background: none;
  border: none;
  color: var(--text-secondary);
  font-size: 12px;
  cursor: pointer;
  padding: 2px 6px;
  border-radius: 4px;
  transition: all 0.2s;
  display: none;
}

.comment:hover .comment-delete {
  display: block;
}

.comment-delete:hover {
  color: #ef4444;
  background: rgba(239, 68, 68, 0.1);
}

.comment-body {
  font-size: 14px;
  color: var(--text-secondary);
  line-height: 1.6;
  word-break: break-word;
}

.comment-empty {
  text-align: center;
  padding: 32px;
  color: var(--text-secondary);
  font-size: 14px;
}

@media (max-width: 768px) {
  .comment-input-wrap {
    flex-direction: column;
  }

  .comment-submit {
    width: 100%;
  }
}
</style>
