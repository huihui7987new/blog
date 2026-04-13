<template>
  <div class="article-detail" v-if="article">
    <div class="article-header">
      <router-link to="/article" class="article-back">← 返回文章列表</router-link>
      <div class="article-tags">
        <span v-for="tag in article.tags" :key="tag" class="tag">{{ tag }}</span>
      </div>
      <h1 class="article-h1">{{ article.title }}</h1>
      <div class="article-meta">
        <div class="article-author">
          <span class="author-avatar-sm">G</span>
          <span>{{ article.author || '高辉' }}</span>
        </div>
        <span class="meta-dot">·</span>
        <span>{{ article.date }}</span>
        <span class="meta-dot">·</span>
        <span>{{ formatReadTime(article.readTime) }}</span>
      </div>
    </div>

    <div class="article-cover" :style="{ background: article.cover }"></div>

    <div class="article-content markdown-body" v-html="renderedContent"></div>

    <!-- 项目链接块 -->
    <div v-if="article.links" class="project-links">
      <div class="project-links-title">🔗 项目链接</div>
      <div class="project-links-row">
        <a v-if="article.links.demo" :href="article.links.demo" target="_blank" rel="noopener" class="project-link project-demo">
          🔗 在线体验
        </a>
        <a v-if="article.links.github" :href="article.links.github" target="_blank" rel="noopener" class="project-link project-github">
          📁 源码地址
        </a>
      </div>
    </div>

    <div class="author-card">
      <div class="author-avatar">G</div>
      <div class="author-info">
        <div class="author-name">{{ article.author || '高辉' }}</div>
        <div class="author-bio">全栈开发 · 终身学习者，分享技术与生活感悟</div>
      </div>
    </div>

    <CommentSection :article-id="article.id" />

    <div class="article-nav">
      <router-link v-if="prevArticle" :to="`/article/${prevArticle.id}`" class="nav-link nav-prev">
        <span class="nav-label">← 上一篇</span>
        <span class="nav-title">{{ prevArticle.title }}</span>
      </router-link>
      <span v-else></span>
      <router-link v-if="nextArticle" :to="`/article/${nextArticle.id}`" class="nav-link nav-next">
        <span class="nav-label">下一篇 →</span>
        <span class="nav-title">{{ nextArticle.title }}</span>
      </router-link>
    </div>
  </div>
  <div v-else class="not-found">
    <p>文章不存在</p>
    <router-link to="/article" class="btn">返回文章列表</router-link>
  </div>
</template>

<script setup>
import { computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { marked } from 'marked'
import hljs from 'highlight.js/lib/core'
// 按需引入 highlight.js 语言（避免加载全部语言，减少 bundle size）
import javascript from 'highlight.js/lib/languages/javascript'
import typescript from 'highlight.js/lib/languages/typescript'
import css from 'highlight.js/lib/languages/css'
import xml from 'highlight.js/lib/languages/xml'
import json from 'highlight.js/lib/languages/json'
import bash from 'highlight.js/lib/languages/bash'
import python from 'highlight.js/lib/languages/python'
import java from 'highlight.js/lib/languages/java'
import sql from 'highlight.js/lib/languages/sql'
import markdown from 'highlight.js/lib/languages/markdown'
import yaml from 'highlight.js/lib/languages/yaml'
import go from 'highlight.js/lib/languages/go'
import rust from 'highlight.js/lib/languages/rust'

// 注册语言
hljs.registerLanguage('javascript', javascript)
hljs.registerLanguage('js', javascript)
hljs.registerLanguage('typescript', typescript)
hljs.registerLanguage('ts', typescript)
hljs.registerLanguage('css', css)
hljs.registerLanguage('html', xml)
hljs.registerLanguage('xml', xml)
hljs.registerLanguage('json', json)
hljs.registerLanguage('bash', bash)
hljs.registerLanguage('sh', bash)
hljs.registerLanguage('python', python)
hljs.registerLanguage('py', python)
hljs.registerLanguage('java', java)
hljs.registerLanguage('sql', sql)
hljs.registerLanguage('markdown', markdown)
hljs.registerLanguage('md', markdown)
hljs.registerLanguage('yaml', yaml)
hljs.registerLanguage('yml', yaml)
hljs.registerLanguage('go', go)
hljs.registerLanguage('rust', rust)

import { articleStore } from '@/composables/articlesStore'
import CommentSection from '@/components/CommentSection.vue'

const route = useRoute()

// 直接从 articleStore 读取，响应式
const article = computed(() => {
  return articleStore.articles.value.find(a => a.id === parseInt(route.params.id))
})

// Configure marked with highlight.js
marked.setOptions({
  highlight: function(code, lang) {
    if (lang && hljs.getLanguage(lang)) {
      try {
        return hljs.highlight(code, { language: lang }).value
      } catch (e) {}
    }
    return hljs.highlightAuto(code).value
  },
  breaks: true,
  gfm: true
})

const renderedContent = computed(() => {
  if (!article.value) return ''
  return marked(article.value.content || '')
})

const currentIndex = computed(() => {
  if (!article.value) return -1
  return articleStore.articles.value.findIndex(a => a.id === article.value.id)
})

const prevArticle = computed(() => {
  if (currentIndex.value < articleStore.articles.value.length - 1) {
    return articleStore.articles.value[currentIndex.value + 1]
  }
  return null
})

const nextArticle = computed(() => {
  if (currentIndex.value > 0) {
    return articleStore.articles.value[currentIndex.value - 1]
  }
  return null
})

function formatReadTime(rt) {
  if (!rt) return '未知时长'
  if (typeof rt === 'number') return `${rt} 分钟`
  return rt
}

onMounted(() => {
  // 动态更新页面 title
  if (article.value) {
    document.title = `${article.value.title} - 高辉的博客`
  }
  // Scroll to top when entering article detail
  window.scrollTo({ top: 0, behavior: 'smooth' })
})
</script>

<style scoped>
.article-detail {
  padding-bottom: 60px;
}

.article-header {
  margin-bottom: 24px;
}

.article-back {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 14px;
  color: var(--text-secondary);
  cursor: pointer;
  margin-bottom: 16px;
  text-decoration: none;
  transition: color 0.2s;
}

.article-back:hover {
  color: var(--primary);
}

.article-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 12px;
}

.article-h1 {
  font-family: var(--font-heading);
  font-size: 36px;
  font-weight: 700;
  line-height: 1.3;
  margin-bottom: 16px;
}

.article-meta {
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 14px;
  color: var(--text-secondary);
}

.article-author {
  display: flex;
  align-items: center;
  gap: 8px;
}

.author-avatar-sm {
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--primary), var(--primary-end));
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-weight: 600;
  font-size: 11px;
}

.meta-dot {
  color: var(--border);
}

.article-cover {
  height: 200px;
  border-radius: var(--radius);
  margin-bottom: 32px;
  background: linear-gradient(135deg, var(--primary), var(--primary-end));
}

/* 项目链接块 */
.project-links {
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 20px 24px;
  margin: 28px 0;
}

.project-links-title {
  font-size: 15px;
  font-weight: 600;
  color: var(--text);
  margin-bottom: 14px;
}

.project-links-row {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}

.project-link {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 10px 20px;
  border-radius: var(--radius);
  font-size: 14px;
  font-weight: 500;
  text-decoration: none;
  transition: all 0.25s ease;
}

.project-demo {
  background: var(--primary);
  color: #fff;
}

.project-demo:hover {
  opacity: 0.88;
  transform: translateY(-1px);
}

.project-github {
  background: var(--bg);
  border: 1px solid var(--border);
  color: var(--text);
}

.project-github:hover {
  border-color: var(--primary);
  color: var(--primary);
  transform: translateY(-1px);
}

.author-card {
  display: flex;
  gap: 16px;
  padding: 20px;
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  margin: 32px 0;
}

.author-avatar {
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--primary), var(--primary-end));
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-weight: 700;
  font-size: 20px;
  flex-shrink: 0;
}

.author-info {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.author-name {
  font-weight: 600;
  font-size: 16px;
  margin-bottom: 4px;
}

.author-bio {
  font-size: 14px;
  color: var(--text-secondary);
}

.article-nav {
  display: flex;
  justify-content: space-between;
  gap: 20px;
  padding: 24px 0;
  border-top: 1px solid var(--border);
  margin-top: 32px;
}

.nav-link {
  display: flex;
  flex-direction: column;
  gap: 4px;
  text-decoration: none;
  max-width: 45%;
}

.nav-link:hover {
  color: var(--primary);
}

.nav-label {
  font-size: 12px;
  color: var(--text-secondary);
}

.nav-title {
  font-size: 14px;
  font-weight: 500;
  color: var(--text);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.nav-next {
  text-align: right;
  align-items: flex-end;
}

.not-found {
  text-align: center;
  padding: 80px 20px;
}

.not-found p {
  font-size: 20px;
  margin-bottom: 20px;
  color: var(--text-secondary);
}

.btn {
  display: inline-block;
  padding: 10px 24px;
  background: var(--primary);
  color: #fff;
  border-radius: var(--radius);
  text-decoration: none;
  font-size: 14px;
}

@media (max-width: 768px) {
  .article-h1 {
    font-size: 26px;
  }

  .article-cover {
    height: 160px;
  }

  .article-nav {
    flex-direction: column;
    gap: 16px;
  }

  .nav-link {
    max-width: 100%;
  }

  .nav-next {
    text-align: left;
    align-items: flex-start;
  }

  .author-card {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
}
</style>
