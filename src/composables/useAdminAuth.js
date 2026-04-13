// 管理后台认证逻辑
import { ref } from 'vue'

const ADMIN_PASSWORD = 'admin123'
const AUTH_KEY = 'blog_admin_authenticated'

const isAuthenticated = ref(false)

// 初始化：从 localStorage 恢复登录状态
const initAuth = () => {
  isAuthenticated.value = localStorage.getItem(AUTH_KEY) === 'true'
}

// 登录
const login = (password) => {
  if (password === ADMIN_PASSWORD) {
    localStorage.setItem(AUTH_KEY, 'true')
    isAuthenticated.value = true
    return { success: true }
  }
  return { success: false, message: '密码错误' }
}

// 登出
const logout = () => {
  localStorage.removeItem(AUTH_KEY)
  isAuthenticated.value = false
}

// 同步检查（供 router.beforeEach 使用）
const isLoggedIn = () => {
  return localStorage.getItem(AUTH_KEY) === 'true'
}

export const useAdminAuth = () => {
  return {
    isAuthenticated,
    initAuth,
    login,
    logout,
    isLoggedIn
  }
}

export { isLoggedIn }
