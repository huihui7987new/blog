const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/HomeView-rn6q7A0c.js","assets/vue-vendor-Dgpnvufp.js","assets/HomeView-B_iewizW.css","assets/ArticleListView-CVOAxtSR.js","assets/ArticleListView-Cyta_J5S.css","assets/ArticleDetailView-BxxN2_jH.js","assets/marked-Bf3RmHRd.js","assets/highlight-tq6dwNPf.js","assets/ArticleDetailView-D5SUUckG.css","assets/PortfolioView-B7PKpMAa.js","assets/PortfolioView-xK0BqlyN.css","assets/AboutView-D-Dd7zJB.js","assets/AboutView-C9_Qk8c4.css","assets/AdminLoginView-Olqk8YwD.js","assets/useAdminAuth-D_vvnSE9.js","assets/AdminLoginView-Cr8oM_VO.css","assets/AdminDashboardView-bOXbKejv.js","assets/AdminSidebar-Cu_sUSi7.js","assets/AdminSidebar-Dhlj0-k_.css","assets/AdminDashboardView-BWuSIChx.css","assets/AdminArticleListView-IomQwtvv.js","assets/AdminArticleListView-C6XoY04m.css","assets/AdminEditorView-BYBZfQbP.js","assets/AdminEditorView-CxPCaT3F.css","assets/NotFoundView-CobWhIsi.js","assets/NotFoundView-_owz1pLK.css"])))=>i.map(i=>d[i]);
import{o as j,a as F,c as v,b as y,w as D,d as e,F as S,r as L,n as b,e as B,f as T,u as W,g as u,h as $,t as E,i as x,j as k,k as G,l as te,m as ne,p as se,v as oe,q as O,s as N,x as ae,T as z,y as re,z as le,A as ie,B as ce,C as de,D as ue,E as me,G as ve}from"./vue-vendor-Dgpnvufp.js";(function(){const c=document.createElement("link").relList;if(c&&c.supports&&c.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))d(s);new MutationObserver(s=>{for(const n of s)if(n.type==="childList")for(const o of n.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&d(o)}).observe(document,{childList:!0,subtree:!0});function r(s){const n={};return s.integrity&&(n.integrity=s.integrity),s.referrerPolicy&&(n.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?n.credentials="include":s.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function d(s){if(s.ep)return;s.ep=!0;const n=r(s);fetch(s.href,n)}})();const I=(m,c)=>{const r=m.__vccOpts||m;for(const[d,s]of c)r[d]=s;return r},pe={class:"nav-links"},_e={class:"nav-right"},he={__name:"NavBar",emits:["openSearch"],setup(m,{emit:c}){const r=c,d=W(),s=T(!1),n=[{name:"首页",path:"/"},{name:"文章",path:"/article"},{name:"作品集",path:"/portfolio"},{name:"关于",path:"/about"},{name:"后台",path:"/admin"}],o=t=>t==="/"?d.path==="/":d.path.startsWith(t),l=()=>{s.value=window.scrollY>10},_=t=>{t.key==="/"&&!["INPUT","TEXTAREA"].includes(t.target.tagName)&&(t.preventDefault(),r("openSearch")),(t.ctrlKey||t.metaKey)&&t.key==="k"&&(t.preventDefault(),r("openSearch"))};return j(()=>{window.addEventListener("scroll",l),window.addEventListener("keydown",_)}),F(()=>{window.removeEventListener("scroll",l),window.removeEventListener("keydown",_)}),(t,a)=>{const i=B("router-link");return u(),v("nav",{class:b(["nav",{scrolled:s.value}])},[y(i,{to:"/",class:"nav-logo"},{default:D(()=>[...a[1]||(a[1]=[$("高辉的博客",-1)])]),_:1}),e("div",pe,[(u(),v(S,null,L(n,g=>y(i,{key:g.path,to:g.path,class:b(["nav-link",{active:o(g.path)}])},{default:D(()=>[$(E(g.name),1)]),_:2},1032,["to","class"])),64))]),e("div",_e,[e("button",{class:"nav-search-btn",onClick:a[0]||(a[0]=g=>t.$emit("openSearch"))},[...a[2]||(a[2]=[e("span",{class:"search-icon-inline"},"🔍",-1),e("span",{class:"search-text"},"搜索",-1),e("kbd",{class:"search-kbd"},"Ctrl+K",-1)])]),a[3]||(a[3]=e("div",{class:"avatar"},"G",-1))])],2)}}},fe=I(he,[["__scopeId","data-v-03805ddc"]]),X=[{id:1,title:"Vue3 响应式原理深度剖析",excerpt:"深入理解 Vue3 的响应式系统，包括 Proxy、Reflect、依赖收集与触发更新...",content:`Vue3 的响应式系统是其核心特性之一，相比 Vue2 的 Object.defineProperty，Vue3 使用了更强大的 Proxy 来实现数据响应式。本文将深入剖析 Vue3 响应式的实现原理。

## 什么是响应式？

响应式是指当数据发生变化时，视图能够自动更新。在 Vue 中，我们只需要修改数据，无需手动操作 DOM，框架会自动帮我们完成更新。

## Proxy 的基本用法

Proxy 是 ES6 新增的特性，它可以拦截对象的基本操作，如读取、设置、删除属性等。

\`\`\`javascript
const proxy = new Proxy(target, {
  get(target, key) { return target[key] },
  set(target, key, value) {
    target[key] = value
    return true
  }
})
\`\`\`

## 依赖收集

Vue3 使用 WeakMap 来存储依赖关系，当组件渲染时，会触发 getter，从而收集依赖。`,category:"技术笔记",tags:["Vue","前端","JavaScript"],date:"2026-04-10",readTime:"8 分钟",cover:"linear-gradient(135deg, #667eea, #764ba2)"},{id:2,title:"Node.js 性能优化实战技巧",excerpt:"从架构设计到代码实现，分享 Node.js 应用性能优化的实战经验和最佳实践...",content:`Node.js 作为后端开发语言，性能优化是非常重要的一环。本文将从多个角度分享 Node.js 性能优化的实战技巧。

## 1. 使用集群模式

Node.js 是单线程的，可以通过 cluster 模块充分利用多核 CPU。

## 2. 内存管理

注意内存泄漏，使用 --inspect 进行调试。

## 3. 异步优化

避免阻塞事件循环，使用 setImmediate 分解密集计算。`,category:"技术笔记",tags:["Node","后端","性能"],date:"2026-04-08",readTime:"12 分钟",cover:"linear-gradient(135deg, #10b981, #34d399)"},{id:3,title:"Docker 从入门到精通",excerpt:"Docker 核心概念、镜像构建、私有仓库搭建，以及在生产环境中的最佳实践...",content:`Docker 是现代开发运维的必备技能。本文将带你从入门到精通掌握 Docker。

## 核心概念

- 镜像（Image）
- 容器（Container）
- 仓库（Registry）

## Dockerfile 最佳实践

使用多阶段构建减小镜像体积。`,category:"技术笔记",tags:["Docker","DevOps","容器"],date:"2026-04-05",readTime:"15 分钟",cover:"linear-gradient(135deg, #f59e0b, #fbbf24)"},{id:4,title:"TypeScript 类型体操进阶",excerpt:"通过实际案例讲解 TypeScript 高级类型技巧，提升代码的类型安全性和可维护性...",content:`TypeScript 的类型系统非常强大，掌握高级类型技巧可以极大提升代码质量。

## 条件类型

使用 extends 实现条件判断。

## 映射类型

使用 in 遍历联合类型。

## 模板字面量类型

字符串模板类型的妙用。`,category:"技术笔记",tags:["TypeScript","前端"],date:"2026-04-02",readTime:"10 分钟",cover:"linear-gradient(135deg, #ef4444, #f87171)"},{id:5,title:"Git 工作流完全指南",excerpt:"对比 Git Flow、GitHub Flow、Trunk-Based Development 等常见工作流的选择...",content:`选择合适的 Git 工作流对团队协作至关重要。

## Git Flow

适合有明确发布周期的项目。

## GitHub Flow

简单直接，适合持续部署。

## Trunk-Based Development

主干开发，适合 CI/CD 成熟的团队。`,category:"技术笔记",tags:["Git","团队协作"],date:"2026-03-28",readTime:"7 分钟",cover:"linear-gradient(135deg, #8b5cf6, #a78bfa)"},{id:6,title:"我的 2025 年终总结",excerpt:"回顾这一年的成长与收获，技术提升、生活变化、以及对新一年的展望和规划...",content:`2025 年是充实的一年，技术上有很大提升，生活也有很多变化。

## 技术成长

从纯前端转向全栈，系统学习了后端技术。

## 生活感悟

坚持运动，保持学习，生活更加规律。

## 新年计划

继续深耕全栈，开启副业探索。`,category:"生活感悟",tags:["年终总结","生活"],date:"2026-03-20",readTime:"5 分钟",cover:"linear-gradient(135deg, #06b6d4, #22d3ee)"},{id:7,title:"Redis 实战：缓存策略详解",excerpt:"深入理解 Redis 缓存策略，包括缓存穿透、缓存击穿、缓存雪崩的解决方案...",content:`Redis 作为缓存中间件，正确使用缓存策略至关重要。

## 缓存穿透

使用布隆过滤器或空值缓存。

## 缓存击穿

使用互斥锁或逻辑过期。

## 缓存雪崩

设置随机过期时间，使用高可用架构。`,category:"技术笔记",tags:["Redis","数据库","缓存"],date:"2026-03-15",readTime:"9 分钟",cover:"linear-gradient(135deg, #ec4899, #f472b6)"},{id:8,title:"《代码整洁之道》读书笔记",excerpt:"总结《代码整洁之道》的核心观点，如何写出可读性更强、更易维护的代码...",content:`Robert C. Martin 的经典之作，值得每个程序员反复阅读。

## 有意义的命名

变量、函数、类名要能表达其意图。

## 函数

函数应该短小，只做一件事。

## 注释

好的代码是最好的注释，注释是失败的标志。`,category:"读书笔记",tags:["读书","代码质量"],date:"2026-03-10",readTime:"6 分钟",cover:"linear-gradient(135deg, #14b8a6, #2dd4bf)"}],C=T(X),A=T("all"),P=T(null);function ge(){const m=x(()=>["全部文章",...new Set(C.value.map(a=>a.category))]),c=x(()=>{const t=C.value.flatMap(a=>a.tags);return[...new Set(t)]}),r=x(()=>{let t=C.value;return A.value&&A.value!=="全部文章"&&(t=t.filter(a=>a.category===A.value)),P.value&&(t=t.filter(a=>a.tags.includes(P.value))),t}),d=x(()=>[...C.value].sort((t,a)=>new Date(a.date)-new Date(t.date)).slice(0,5)),s=x(()=>[...C.value].sort((t,a)=>new Date(a.date)-new Date(t.date)).slice(0,6)),n=t=>C.value.find(a=>a.id===parseInt(t)),o=t=>{A.value=t},l=t=>{P.value=P.value===t?null:t},_=x(()=>({totalArticles:C.value.length,totalWords:"5万+",yearsRunning:"3年"}));return{articles:C,categories:m,tags:c,filteredArticles:r,recentArticles:d,featuredArticles:s,selectedCategory:A,selectedTag:P,getArticleById:n,setCategory:o,setTag:l,stats:_}}const ye={class:"sidebar"},ke={class:"sidebar-section"},be=["onClick"],Te={class:"sidebar-section"},we={class:"tag-cloud"},Ee=["onClick"],$e={class:"sidebar-section"},Ce={__name:"SideBar",setup(m){const{categories:c,tags:r,recentArticles:d,selectedCategory:s,selectedTag:n,setCategory:o,setTag:l}=ge();return(_,t)=>{const a=B("router-link");return u(),v("aside",ye,[e("div",ke,[t[0]||(t[0]=e("div",{class:"sidebar-title"},"分类",-1)),(u(!0),v(S,null,L(k(c),i=>(u(),v("div",{key:i,class:b(["sidebar-item",{active:k(s)===i}]),onClick:g=>k(o)(i)},E(i),11,be))),128))]),e("div",Te,[t[1]||(t[1]=e("div",{class:"sidebar-title"},"标签云",-1)),e("div",we,[(u(!0),v(S,null,L(k(r),i=>(u(),v("span",{key:i,class:b(["tag",{active:k(n)===i}]),onClick:g=>k(l)(i)},E(i),11,Ee))),128))])]),e("div",$e,[t[2]||(t[2]=e("div",{class:"sidebar-title"},"近期文章",-1)),(u(!0),v(S,null,L(k(d).slice(0,3),i=>(u(),G(a,{key:i.id,to:`/article/${i.id}`,class:"sidebar-item"},{default:D(()=>[$(E(i.title),1)]),_:2},1032,["to"]))),128))])])}}},Se=I(Ce,[["__scopeId","data-v-15b692aa"]]),Le={class:"mobile-nav"},De={class:"mobile-nav-items"},Ie={class:"mobile-nav-icon"},xe={__name:"MobileNav",setup(m){const c=W(),r=[{name:"首页",path:"/",icon:"🏠"},{name:"作品",path:"/portfolio",icon:"💼"},{name:"分类",path:"/article",icon:"📁"},{name:"我的",path:"/about",icon:"👤"}],d=s=>s==="/"?c.path==="/":c.path.startsWith(s);return(s,n)=>{const o=B("router-link");return u(),v("nav",Le,[e("div",De,[(u(),v(S,null,L(r,l=>y(o,{key:l.path,to:l.path,class:b(["mobile-nav-item",{active:d(l.path)}])},{default:D(()=>[e("div",Ie,E(l.icon),1),e("div",null,E(l.name),1)]),_:2},1032,["to","class"])),64))])])}}},Ae=I(xe,[["__scopeId","data-v-53ca3408"]]),M=te({theme:"tech",mode:"light"});function Y(){const m=d=>{M.theme=d,localStorage.setItem("blog-theme",d)},c=d=>{M.mode=d,localStorage.setItem("blog-mode",d)},r=()=>{const d=M.mode==="light"?"dark":"light";c(d)};return{currentTheme:M.theme,currentMode:M.mode,setTheme:m,setMode:c,toggleMode:r}}const Pe={class:"theme-options"},Me=["onClick"],Re={class:"mode-toggle"},Ve={__name:"ThemeToggle",setup(m){const c=T(!1),r=Y(),d=[{name:"极简",value:"mono",class:"theme-opt-mono"},{name:"温暖",value:"warm",class:"theme-opt-warm"},{name:"科技",value:"tech",class:"theme-opt-tech"},{name:"清新",value:"fresh",class:"theme-opt-fresh"}],s=r.currentTheme,n=r.currentMode,o=()=>{c.value=!c.value},l=t=>{r.setTheme(t)},_=t=>{r.setMode(t)};return(t,a)=>(u(),v("div",null,[e("button",{class:"theme-toggle",onClick:o},"🎨"),e("div",{class:b(["theme-panel",{show:c.value}])},[a[2]||(a[2]=e("div",{class:"theme-panel-title"},"选择主题",-1)),e("div",Pe,[(u(),v(S,null,L(d,i=>e("div",{key:i.value,class:b(["theme-opt",[i.class,{active:k(s)===i.value}]]),onClick:g=>l(i.value)},E(i.name),11,Me)),64))]),a[3]||(a[3]=e("div",{class:"theme-panel-title",style:{"margin-top":"8px"}},"亮/暗模式",-1)),e("div",Re,[e("div",{class:b(["mode-btn",{active:k(n)==="light"}]),onClick:a[0]||(a[0]=i=>_("light"))}," ☀️ 亮色 ",2),e("div",{class:b(["mode-btn",{active:k(n)==="dark"}]),onClick:a[1]||(a[1]=i=>_("dark"))}," 🌙 暗色 ",2)])],2)]))}},Oe=I(Ve,[["__scopeId","data-v-f91314ef"]]),Ne={__name:"BackToTop",setup(m){const c=T(!1),r=()=>{c.value=window.scrollY>500},d=()=>{window.scrollTo({top:0,behavior:"smooth"})};return j(()=>{window.addEventListener("scroll",r)}),F(()=>{window.removeEventListener("scroll",r)}),(s,n)=>(u(),v("button",{class:b(["back-to-top",{show:c.value}]),onClick:d}," ↑ ",2))}},Be=I(Ne,[["__scopeId","data-v-b3a72770"]]),Ke={class:"search-modal"},je={class:"search-header"},Ge=["onKeydown"],He={key:0,class:"search-results"},Ue={class:"search-results-header"},qe=["onClick","onMouseenter"],Fe={class:"result-body"},We=["innerHTML"],ze=["innerHTML"],Xe={class:"result-tags"},Ye=["innerHTML"],Je={class:"result-meta"},Qe={class:"result-date"},Ze={class:"result-time"},et={key:1,class:"search-empty"},tt={key:2,class:"search-hint"},nt={__name:"SearchModal",props:{visible:{type:Boolean,default:!1}},emits:["close"],setup(m,{emit:c}){const r=m,d=c,s=le(),n=T(""),o=T([]),l=T(-1),_=T(null);ne(()=>r.visible,h=>{h&&(n.value="",o.value=[],l.value=-1,ie(()=>{var p;(p=_.value)==null||p.focus()}))});const t=()=>{if(l.value=-1,!n.value.trim()){o.value=[];return}const h=n.value.toLowerCase().trim();o.value=X.filter(p=>p.title.toLowerCase().includes(h)||p.excerpt.toLowerCase().includes(h)||p.content.toLowerCase().includes(h)||p.tags.some(f=>f.toLowerCase().includes(h)))},a=h=>{if(!n.value.trim())return h;const p=n.value.trim(),f=new RegExp(`(${i(p)})`,"gi");return h.replace(f,'<mark class="search-highlight">$1</mark>')},i=h=>h.replace(/[.*+?^${}()|[\]\\]/g,"\\$&"),g=(h,p)=>h.length<=p?h:h.slice(0,p)+"...",K=()=>{l.value<o.value.length-1&&l.value++},Z=()=>{l.value>0&&l.value--},ee=()=>{l.value>=0&&l.value<o.value.length&&H(o.value[l.value])},H=h=>{R(),s.push(`/article/${h.id}`)},R=()=>{d("close")};return(h,p)=>(u(),G(re,{to:"body"},[y(z,{name:"search-modal"},{default:D(()=>[m.visible?(u(),v("div",{key:0,class:"search-overlay",onClick:N(R,["self"])},[e("div",Ke,[e("div",je,[p[1]||(p[1]=e("span",{class:"search-icon"},"🔍",-1)),se(e("input",{ref_key:"searchInput",ref:_,"onUpdate:modelValue":p[0]||(p[0]=f=>n.value=f),type:"text",class:"search-input",placeholder:"搜索文章标题、内容、标签...",onInput:t,onKeydown:[O(R,["esc"]),O(N(K,["prevent"]),["down"]),O(N(Z,["prevent"]),["up"]),O(N(ee,["prevent"]),["enter"])]},null,40,Ge),[[oe,n.value]]),e("button",{class:"search-close",onClick:R},"ESC")]),n.value&&o.value.length>0?(u(),v("div",He,[e("div",Ue," 找到 "+E(o.value.length)+" 篇相关文章 ",1),(u(!0),v(S,null,L(o.value,(f,U)=>(u(),v("div",{key:f.id,class:b(["search-result-item",{active:U===l.value}]),onClick:V=>H(f),onMouseenter:V=>l.value=U},[e("div",{class:"result-cover",style:ce({background:f.cover})},null,4),e("div",Fe,[e("div",{class:"result-title",innerHTML:a(f.title)},null,8,We),e("div",{class:"result-excerpt",innerHTML:a(g(f.excerpt,80))},null,8,ze),e("div",Xe,[(u(!0),v(S,null,L(f.tags,V=>(u(),v("span",{key:V,class:"result-tag",innerHTML:a(V)},null,8,Ye))),128))])]),e("div",Je,[e("span",Qe,E(f.date),1),e("span",Ze,E(f.readTime),1)])],42,qe))),128))])):n.value&&o.value.length===0?(u(),v("div",et,[...p[2]||(p[2]=[e("span",{class:"empty-icon"},"🔎",-1),e("p",null,"没有找到相关文章",-1),e("p",{class:"empty-hint"},"试试其他关键词？",-1)])])):(u(),v("div",tt,[...p[3]||(p[3]=[e("div",{class:"hint-keys"},[e("kbd",null,"↑"),e("kbd",null,"↓"),$(" 导航 "),e("kbd",null,"Enter"),$(" 选择 "),e("kbd",null,"Esc"),$(" 关闭 ")],-1),e("div",{class:"hint-shortcut"},[$("按 "),e("kbd",null,"/"),$(" 或 "),e("kbd",null,"Ctrl+K"),$(" 打开搜索")],-1)])]))])])):ae("",!0)]),_:1})]))}},st=I(nt,[["__scopeId","data-v-fcf61a89"]]),ot=["data-theme","data-mode"],at={class:"layout"},rt={class:"main"},lt={__name:"App",setup(m){const c=Y(),r=T(!1);return j(()=>{const d=localStorage.getItem("blog-theme"),s=localStorage.getItem("blog-mode");d&&c.setTheme(d),s&&c.setMode(s),window.addEventListener("keydown",n=>{n.key==="/"&&!["INPUT","TEXTAREA"].includes(n.target.tagName)&&(n.preventDefault(),r.value=!0),(n.ctrlKey||n.metaKey)&&n.key==="k"&&(n.preventDefault(),r.value=!0)})}),(d,s)=>{const n=B("router-view");return u(),v("div",{class:"app","data-theme":k(c).currentTheme,"data-mode":k(c).currentMode},[y(fe,{onOpenSearch:s[0]||(s[0]=o=>r.value=!0)}),e("div",at,[y(Se),e("main",rt,[y(n,null,{default:D(({Component:o})=>[y(z,{name:"fade",mode:"out-in"},{default:D(()=>[(u(),G(de(o)))]),_:2},1024)]),_:1})])]),y(Ae),y(Oe),y(Be),y(st,{visible:r.value,onClose:s[1]||(s[1]=o=>r.value=!1)},null,8,["visible"])],8,ot)}}},it=I(lt,[["__scopeId","data-v-819501d4"]]),ct="modulepreload",dt=function(m){return"/"+m},q={},w=function(c,r,d){let s=Promise.resolve();if(r&&r.length>0){document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),l=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));s=Promise.allSettled(r.map(_=>{if(_=dt(_),_ in q)return;q[_]=!0;const t=_.endsWith(".css"),a=t?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${_}"]${a}`))return;const i=document.createElement("link");if(i.rel=t?"stylesheet":ct,t||(i.as="script"),i.crossOrigin="",i.href=_,l&&i.setAttribute("nonce",l),document.head.appendChild(i),t)return new Promise((g,K)=>{i.addEventListener("load",g),i.addEventListener("error",()=>K(new Error(`Unable to preload CSS for ${_}`)))})}))}function n(o){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=o,window.dispatchEvent(l),!l.defaultPrevented)throw o}return s.then(o=>{for(const l of o||[])l.status==="rejected"&&n(l.reason);return c().catch(n)})},J=ue({history:me("/"),routes:[{path:"/",name:"home",component:()=>w(()=>import("./HomeView-rn6q7A0c.js"),__vite__mapDeps([0,1,2])),meta:{title:"首页 - 高辉的博客"}},{path:"/article",name:"article",component:()=>w(()=>import("./ArticleListView-CVOAxtSR.js"),__vite__mapDeps([3,1,4])),meta:{title:"文章列表 - 高辉的博客"}},{path:"/article/:id",name:"article-detail",component:()=>w(()=>import("./ArticleDetailView-BxxN2_jH.js"),__vite__mapDeps([5,1,6,7,8])),meta:{title:"文章详情 - 高辉的博客"}},{path:"/portfolio",name:"portfolio",component:()=>w(()=>import("./PortfolioView-B7PKpMAa.js"),__vite__mapDeps([9,1,10])),meta:{title:"作品集 - 高辉的博客"}},{path:"/about",name:"about",component:()=>w(()=>import("./AboutView-D-Dd7zJB.js"),__vite__mapDeps([11,1,12])),meta:{title:"关于我 - 高辉的博客"}},{path:"/admin",name:"admin",component:()=>w(()=>import("./AdminLoginView-Olqk8YwD.js"),__vite__mapDeps([13,1,14,15])),meta:{title:"管理员登录"}},{path:"/admin/dashboard",name:"admin-dashboard",component:()=>w(()=>import("./AdminDashboardView-bOXbKejv.js"),__vite__mapDeps([16,17,1,14,18,19])),meta:{title:"管理后台"}},{path:"/admin/articles",name:"admin-articles",component:()=>w(()=>import("./AdminArticleListView-IomQwtvv.js"),__vite__mapDeps([20,1,17,14,18,21])),meta:{title:"文章管理"}},{path:"/admin/editor/:id?",name:"admin-editor",component:()=>w(()=>import("./AdminEditorView-BYBZfQbP.js"),__vite__mapDeps([22,1,6,7,17,14,18,23])),meta:{title:"编辑文章"}},{path:"/:pathMatch(.*)*",name:"not-found",component:()=>w(()=>import("./NotFoundView-CobWhIsi.js"),__vite__mapDeps([24,1,25])),meta:{title:"页面不存在 - 高辉的博客"}}],scrollBehavior(m,c,r){return r||{top:0,behavior:"smooth"}}});J.afterEach(m=>{m.meta.title&&(document.title=m.meta.title)});const Q=ve(it);Q.use(J);Q.mount("#app");export{I as _,X as a,ge as u};
