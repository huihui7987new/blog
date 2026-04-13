import { createRouter, createWebHistory } from 'vue-router'
import { isLoggedIn } from '@/composables/useAdminAuth'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/HomeView.vue'),
      meta: { title: '首页 - 高辉的博客' }
    },
    {
      path: '/article',
      name: 'article',
      component: () => import('@/views/ArticleListView.vue'),
      meta: { title: '文章列表 - 高辉的博客' }
    },
    {
      path: '/article/:id',
      name: 'article-detail',
      component: () => import('@/views/ArticleDetailView.vue'),
      meta: { title: '文章详情 - 高辉的博客' }
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('@/views/AboutView.vue'),
      meta: { title: '关于我 - 高辉的博客' }
    },
    {
      path: '/admin/login',
      name: 'admin-login',
      component: () => import('@/views/AdminLoginView.vue'),
      meta: { title: '管理登录 - 高辉的博客', public: true }
    },
    {
      path: '/admin',
      name: 'admin',
      component: () => import('@/views/AdminDashboardView.vue'),
      meta: { title: '管理后台 - 高辉的博客', requiresAuth: true }
    },
    {
      path: '/admin/article',
      name: 'admin-article',
      component: () => import('@/views/AdminArticleListView.vue'),
      meta: { title: '文章管理 - 高辉的博客', requiresAuth: true }
    },
    {
      path: '/admin/editor',
      name: 'admin-editor-new',
      component: () => import('@/views/AdminEditorView.vue'),
      meta: { title: '写文章 - 高辉的博客', requiresAuth: true }
    },
    {
      path: '/admin/editor/:id',
      name: 'admin-editor-edit',
      component: () => import('@/views/AdminEditorView.vue'),
      meta: { title: '编辑文章 - 高辉的博客', requiresAuth: true }
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: () => import('@/views/NotFoundView.vue'),
      meta: { title: '页面不存在 - 高辉的博客' }
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0, behavior: 'smooth' }
    }
  }
})

router.beforeEach((to, from) => {
  if (to.meta.requiresAuth && !isLoggedIn()) {
    return { name: 'admin-login' }
  }
  if (to.name === 'admin-login' && isLoggedIn()) {
    return { name: 'admin' }
  }
})

router.afterEach((to) => {
  if (to.meta.title) {
    document.title = to.meta.title
  }
})

export default router
