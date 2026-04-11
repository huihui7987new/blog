# 高辉的博客 - Vue 3 前端

基于 Vue 3 + Vite 构建的个人博客前端项目。

## 功能特性

### P1 里程碑 ✅
- [x] Vue 3 + Vite 项目结构
- [x] 首页（HomeView）：Banner + 文章卡片网格 + 统计栏
- [x] 文章列表页（ArticleListView）
- [x] 文章详情页（ArticleDetailView）
- [x] 作品集页（PortfolioView）
- [x] 关于页（AboutView）
- [x] Vue Router 路由系统
- [x] 主题切换系统（4种主题 × 2种模式 = 8种外观）
- [x] 响应式布局（桌面端侧边栏，移动端底部 Tab）
- [x] 静态 JSON 数据模拟

### 主题系统
- **极简主题**：黑白灰 + 大量留白
- **温暖主题**：#faf6f1 米色 + Playfair Display 衬线字体
- **科技主题**：#667eea → #764ba2 渐变主色
- **清新主题**：#10b981 绿色 + Nunito 字体

每种主题支持亮色/暗色模式切换。

## 技术栈

- **框架**：Vue 3（Composition API + script setup）
- **构建工具**：Vite 5
- **路由**：Vue Router 4
- **样式**：CSS 变量 + Scoped CSS
- **数据**：静态 JSON 文件

## 项目结构

```
frontend/
├── src/
│   ├── assets/
│   │   └── main.css          # 全局样式 + 主题变量
│   ├── components/
│   │   ├── ArticleCard.vue   # 文章卡片
│   │   ├── BackToTop.vue     # 返回顶部
│   │   ├── MobileNav.vue     # 移动端导航
│   │   ├── NavBar.vue        # 顶部导航
│   │   ├── SideBar.vue       # 侧边栏
│   │   ├── StatBar.vue       # 统计栏
│   │   └── ThemeToggle.vue   # 主题切换
│   ├── composables/
│   │   ├── useArticles.js    # 文章数据管理
│   │   └── useTheme.js       # 主题状态管理
│   ├── data/
│   │   └── articles.json     # 文章数据
│   ├── router/
│   │   └── index.js          # 路由配置
│   ├── views/
│   │   ├── AboutView.vue     # 关于页
│   │   ├── ArticleDetailView.vue  # 文章详情
│   │   ├── ArticleListView.vue    # 文章列表
│   │   ├── HomeView.vue      # 首页
│   │   └── PortfolioView.vue # 作品集
│   ├── App.vue               # 根组件
│   └── main.js               # 入口文件
├── index.html
├── package.json
└── vite.config.js
```

## 快速开始

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建生产版本
npm run build

# 预览生产版本
npm run preview
```

## 下一步建议

### P2 里程碑（待实现）
- [ ] Markdown 编辑器集成
- [ ] 搜索功能
- [ ] 评论系统（对接后端 API）
- [ ] 文章分类筛选
- [ ] 标签云交互
- [ ] 文章归档页
- [ ] SEO 优化

### P3 里程碑（优化）
- [ ] 骨架屏加载
- [ ] 图片懒加载
- [ ] PWA 支持
- [ ] 国际化（i18n）
- [ ] 无障碍访问（a11y）

## 许可证

MIT
