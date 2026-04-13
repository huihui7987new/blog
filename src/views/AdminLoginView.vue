<template>
  <div class="login-container">
    <div class="login-card">
      <div class="login-title">🔐 管理后台</div>
      <div class="login-subtitle">请输入密码登录</div>

      <div v-if="errorMsg" class="login-error">{{ errorMsg }}</div>

      <form @submit.prevent="handleLogin">
        <div class="admin-form-group">
          <label class="admin-label">账号</label>
          <input
            v-model="username"
            class="admin-input"
            type="text"
            placeholder="任意账号"
            autocomplete="username"
          />
        </div>

        <div class="admin-form-group">
          <label class="admin-label">密码</label>
          <input
            v-model="password"
            class="admin-input"
            type="password"
            placeholder="请输入密码"
            autocomplete="current-password"
          />
        </div>

        <button
          type="submit"
          class="admin-btn admin-btn-primary"
          style="width: 100%; justify-content: center; padding: 12px"
          :disabled="loading"
        >
          {{ loading ? '登录中...' : '登录' }}
        </button>
      </form>

      <div style="margin-top: 20px; text-align: center; font-size: 13px; color: var(--text-secondary)">
        演示密码：admin123
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useAdminAuth } from '@/composables/useAdminAuth'

const router = useRouter()
const { login } = useAdminAuth()

const username = ref('')
const password = ref('')
const errorMsg = ref('')
const loading = ref(false)

const handleLogin = () => {
  if (!password.value) {
    errorMsg.value = '请输入密码'
    return
  }
  loading.value = true
  errorMsg.value = ''

  setTimeout(() => {
    const result = login(password.value)
    loading.value = false
    if (result.success) {
      router.push('/admin')
    } else {
      errorMsg.value = result.message
    }
  }, 300)
}
</script>

<style scoped>
@import '@/styles/admin.css';
</style>
