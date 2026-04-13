# Sitemap 生成说明

本博客使用 Vite 构建，静态部署后需要手动或自动生成 sitemap.xml。

## 方案一：使用脚本生成（推荐）

在 CI/CD 或部署时运行以下脚本生成 sitemap.xml：

```bash
# 安装 sitemap 生成工具
npm install -g sitemap-generator-cli
# 或
npx sitemap-generator-cli https://gaohui.blog --output-file public/sitemap.xml
```

## 方案二：使用在线工具

访问 https://www.xml-sitemaps.com/ 输入网站 URL 生成 sitemap.xml。

## 方案三：使用 vercel-sitemap (Vercel 部署)

```bash
npm install @vercel/sitemap
```

创建 `vercel-sitemap.js`:

```js
import { getServerSideSitemap } from '@vercel/sitemap'
import articles from './src/data/articles.json'

export async function GET(request) {
  const baseUrl = 'https://gaohui.blog'
  const fields = articles.map(article => ({
    loc: `${baseUrl}/article/${article.id}`,
    lastmod: new Date().toISOString(),
    changefreq: 'weekly',
    priority: article.featured ? '0.8' : '0.6'
  }))
  return getServerSideSitemap(fields)
}
```

## 静态 sitemap.xml 示例

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://gaohui.blog/</loc>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://gaohui.blog/article</loc>
    <changefreq>daily</changefreq>
    <priority>0.9</priority>
  </url>
  <!-- 动态文章页面由脚本生成 -->
</urlset>
```
