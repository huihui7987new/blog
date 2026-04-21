const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/HomeView-joupGIdC.js","assets/vue-vendor-Dgpnvufp.js","assets/HomeView-B_iewizW.css","assets/ArticleListView-CSavo7lY.js","assets/ArticleListView-Cyta_J5S.css","assets/ArticleDetailView-DJU9L7P-.js","assets/marked-Bf3RmHRd.js","assets/highlight-tq6dwNPf.js","assets/ArticleDetailView-D5SUUckG.css","assets/PortfolioView-CZOtNJpF.js","assets/PortfolioView-xK0BqlyN.css","assets/AboutView-Dxlo3kUL.js","assets/AboutView-C9_Qk8c4.css","assets/AdminLoginView-BoGxGPCm.js","assets/useAdminAuth-D_vvnSE9.js","assets/AdminLoginView-Cr8oM_VO.css","assets/AdminDashboardView-pGWE2912.js","assets/AdminSidebar-ftEOnQZv.js","assets/AdminSidebar-Dhlj0-k_.css","assets/AdminDashboardView-BWuSIChx.css","assets/AdminArticleListView-2bY6euDx.js","assets/AdminArticleListView-C6XoY04m.css","assets/AdminEditorView-FR7jS4Iq.js","assets/AdminEditorView-CxPCaT3F.css","assets/NotFoundView--2PWl_TZ.js","assets/NotFoundView-_owz1pLK.css"])))=>i.map(i=>d[i]);
import{o as U,a as z,c as v,b as y,w as I,d as e,F as A,r as C,n as k,e as G,f as w,u as Y,g as m,h as S,t as E,i as x,j as b,k as q,l as se,m as ae,p as re,v as le,q as V,s as B,x as ie,T as X,y as ce,z as de,A as ue,B as me,C as ve,D as pe,E as _e,G as he}from"./vue-vendor-Dgpnvufp.js";(function(){const d=document.createElement("link").relList;if(d&&d.supports&&d.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))u(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const s of n.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&u(s)}).observe(document,{childList:!0,subtree:!0});function r(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerPolicy&&(n.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?n.credentials="include":o.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function u(o){if(o.ep)return;o.ep=!0;const n=r(o);fetch(o.href,n)}})();const D=(l,d)=>{const r=l.__vccOpts||l;for(const[u,o]of d)r[u]=o;return r},ge={class:"nav-links"},fe={class:"nav-right"},ye={__name:"NavBar",emits:["openSearch"],setup(l,{emit:d}){const r=d,u=Y(),o=w(!1),n=[{name:"首页",path:"/"},{name:"文章",path:"/article"},{name:"作品集",path:"/portfolio"},{name:"关于",path:"/about"},{name:"后台",path:"/admin"}],s=t=>t==="/"?u.path==="/":u.path.startsWith(t),i=()=>{o.value=window.scrollY>10},_=t=>{t.key==="/"&&!["INPUT","TEXTAREA"].includes(t.target.tagName)&&(t.preventDefault(),r("openSearch")),(t.ctrlKey||t.metaKey)&&t.key==="k"&&(t.preventDefault(),r("openSearch"))};return U(()=>{window.addEventListener("scroll",i),window.addEventListener("keydown",_)}),z(()=>{window.removeEventListener("scroll",i),window.removeEventListener("keydown",_)}),(t,a)=>{const c=G("router-link");return m(),v("nav",{class:k(["nav",{scrolled:o.value}])},[y(c,{to:"/",class:"nav-logo"},{default:I(()=>[...a[1]||(a[1]=[S("高辉的博客",-1)])]),_:1}),e("div",ge,[(m(),v(A,null,C(n,f=>y(c,{key:f.path,to:f.path,class:k(["nav-link",{active:s(f.path)}])},{default:I(()=>[S(E(f.name),1)]),_:2},1032,["to","class"])),64))]),e("div",fe,[e("button",{class:"nav-search-btn",onClick:a[0]||(a[0]=f=>t.$emit("openSearch"))},[...a[2]||(a[2]=[e("span",{class:"search-icon-inline"},"🔍",-1),e("span",{class:"search-text"},"搜索",-1),e("kbd",{class:"search-kbd"},"Ctrl+K",-1)])]),a[3]||(a[3]=e("div",{class:"avatar"},"G",-1))])],2)}}},be=D(ye,[["__scopeId","data-v-03805ddc"]]),H=[{id:1,title:"Vue3 响应式原理深度剖析",excerpt:"深入理解 Vue3 的响应式系统，包括 Proxy、Reflect、依赖收集与触发更新...",content:`Vue3 的响应式系统是其核心特性之一，相比 Vue2 的 Object.defineProperty，Vue3 使用了更强大的 Proxy 来实现数据响应式。本文将深入剖析 Vue3 响应式的实现原理。

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

好的代码是最好的注释，注释是失败的标志。`,category:"读书笔记",tags:["读书","代码质量"],date:"2026-03-10",readTime:"6 分钟",cover:"linear-gradient(135deg, #14b8a6, #2dd4bf)"}],K="blog_admin_articles",L=w([]),Q={articles:L,load(){if(window.__blogAdminArticles&&window.__blogAdminArticles.length>0){L.value=window.__blogAdminArticles;return}const l=localStorage.getItem(K);if(l)try{L.value=JSON.parse(l);return}catch{}L.value=H,localStorage.setItem(K,JSON.stringify(H))},save(l){L.value=l,localStorage.setItem(K,JSON.stringify(l)),window.__blogAdminArticles=l},init(l){l&&l.length>0&&(L.value=l,window.__blogAdminArticles=l,localStorage.setItem(K,JSON.stringify(l)))}};Q.load();const M=w("all"),P=w(null),$=Q.articles;function ke(){const l=x(()=>["全部文章",...new Set($.value.map(a=>a.category))]),d=x(()=>{const t=$.value.flatMap(a=>a.tags);return[...new Set(t)]}),r=x(()=>{let t=$.value;return M.value&&M.value!=="全部文章"&&(t=t.filter(a=>a.category===M.value)),P.value&&(t=t.filter(a=>a.tags.includes(P.value))),t}),u=x(()=>[...$.value].sort((t,a)=>new Date(a.date)-new Date(t.date)).slice(0,5)),o=x(()=>[...$.value].sort((t,a)=>new Date(a.date)-new Date(t.date)).slice(0,6)),n=t=>$.value.find(a=>a.id===parseInt(t)),s=t=>{M.value=t},i=t=>{P.value=P.value===t?null:t},_=x(()=>({totalArticles:$.value.length,totalWords:"5万+",yearsRunning:"3年"}));return{articles:$,categories:l,tags:d,filteredArticles:r,recentArticles:u,featuredArticles:o,selectedCategory:M,selectedTag:P,getArticleById:n,setCategory:s,setTag:i,stats:_}}const we={class:"sidebar"},Te={class:"sidebar-section"},Ee=["onClick"],Se={class:"sidebar-section"},$e={class:"tag-cloud"},Ae=["onClick"],Ce={class:"sidebar-section"},Ie={__name:"SideBar",setup(l){const{categories:d,tags:r,recentArticles:u,selectedCategory:o,selectedTag:n,setCategory:s,setTag:i}=ke();return(_,t)=>{const a=G("router-link");return m(),v("aside",we,[e("div",Te,[t[0]||(t[0]=e("div",{class:"sidebar-title"},"分类",-1)),(m(!0),v(A,null,C(b(d),c=>(m(),v("div",{key:c,class:k(["sidebar-item",{active:b(o)===c}]),onClick:f=>b(s)(c)},E(c),11,Ee))),128))]),e("div",Se,[t[1]||(t[1]=e("div",{class:"sidebar-title"},"标签云",-1)),e("div",$e,[(m(!0),v(A,null,C(b(r),c=>(m(),v("span",{key:c,class:k(["tag",{active:b(n)===c}]),onClick:f=>b(i)(c)},E(c),11,Ae))),128))])]),e("div",Ce,[t[2]||(t[2]=e("div",{class:"sidebar-title"},"近期文章",-1)),(m(!0),v(A,null,C(b(u).slice(0,3),c=>(m(),q(a,{key:c.id,to:`/article/${c.id}`,class:"sidebar-item"},{default:I(()=>[S(E(c.title),1)]),_:2},1032,["to"]))),128))])])}}},De=D(Ie,[["__scopeId","data-v-15b692aa"]]),xe={class:"mobile-nav"},Le={class:"mobile-nav-items"},Me={class:"mobile-nav-icon"},Pe={__name:"MobileNav",setup(l){const d=Y(),r=[{name:"首页",path:"/",icon:"🏠"},{name:"作品",path:"/portfolio",icon:"💼"},{name:"分类",path:"/article",icon:"📁"},{name:"我的",path:"/about",icon:"👤"}],u=o=>o==="/"?d.path==="/":d.path.startsWith(o);return(o,n)=>{const s=G("router-link");return m(),v("nav",xe,[e("div",Le,[(m(),v(A,null,C(r,i=>y(s,{key:i.path,to:i.path,class:k(["mobile-nav-item",{active:u(i.path)}])},{default:I(()=>[e("div",Me,E(i.icon),1),e("div",null,E(i.name),1)]),_:2},1032,["to","class"])),64))])])}}},Re=D(Pe,[["__scopeId","data-v-53ca3408"]]),R=se({theme:"tech",mode:"light"});function Z(){const l=u=>{R.theme=u,localStorage.setItem("blog-theme",u)},d=u=>{R.mode=u,localStorage.setItem("blog-mode",u)},r=()=>{const u=R.mode==="light"?"dark":"light";d(u)};return{currentTheme:R.theme,currentMode:R.mode,setTheme:l,setMode:d,toggleMode:r}}const Oe={class:"theme-options"},Ne=["onClick"],Ve={class:"mode-toggle"},Be={__name:"ThemeToggle",setup(l){const d=w(!1),r=Z(),u=[{name:"极简",value:"mono",class:"theme-opt-mono"},{name:"温暖",value:"warm",class:"theme-opt-warm"},{name:"科技",value:"tech",class:"theme-opt-tech"},{name:"清新",value:"fresh",class:"theme-opt-fresh"}],o=r.currentTheme,n=r.currentMode,s=()=>{d.value=!d.value},i=t=>{r.setTheme(t)},_=t=>{r.setMode(t)};return(t,a)=>(m(),v("div",null,[e("button",{class:"theme-toggle",onClick:s},"🎨"),e("div",{class:k(["theme-panel",{show:d.value}])},[a[2]||(a[2]=e("div",{class:"theme-panel-title"},"选择主题",-1)),e("div",Oe,[(m(),v(A,null,C(u,c=>e("div",{key:c.value,class:k(["theme-opt",[c.class,{active:b(o)===c.value}]]),onClick:f=>i(c.value)},E(c.name),11,Ne)),64))]),a[3]||(a[3]=e("div",{class:"theme-panel-title",style:{"margin-top":"8px"}},"亮/暗模式",-1)),e("div",Ve,[e("div",{class:k(["mode-btn",{active:b(n)==="light"}]),onClick:a[0]||(a[0]=c=>_("light"))}," ☀️ 亮色 ",2),e("div",{class:k(["mode-btn",{active:b(n)==="dark"}]),onClick:a[1]||(a[1]=c=>_("dark"))}," 🌙 暗色 ",2)])],2)]))}},Ke=D(Be,[["__scopeId","data-v-f91314ef"]]),Ge={__name:"BackToTop",setup(l){const d=w(!1),r=()=>{d.value=window.scrollY>500},u=()=>{window.scrollTo({top:0,behavior:"smooth"})};return U(()=>{window.addEventListener("scroll",r)}),z(()=>{window.removeEventListener("scroll",r)}),(o,n)=>(m(),v("button",{class:k(["back-to-top",{show:d.value}]),onClick:u}," ↑ ",2))}},je=D(Ge,[["__scopeId","data-v-b3a72770"]]),He={class:"search-modal"},Ue={class:"search-header"},qe=["onKeydown"],Fe={key:0,class:"search-results"},We={class:"search-results-header"},Je=["onClick","onMouseenter"],ze={class:"result-body"},Ye=["innerHTML"],Xe=["innerHTML"],Qe={class:"result-tags"},Ze=["innerHTML"],et={class:"result-meta"},tt={class:"result-date"},nt={class:"result-time"},ot={key:1,class:"search-empty"},st={key:2,class:"search-hint"},at={__name:"SearchModal",props:{visible:{type:Boolean,default:!1}},emits:["close"],setup(l,{emit:d}){const r=l,u=d,o=de(),n=w(""),s=w([]),i=w(-1),_=w(null);ae(()=>r.visible,h=>{h&&(n.value="",s.value=[],i.value=-1,ue(()=>{var p;(p=_.value)==null||p.focus()}))});const t=()=>{if(i.value=-1,!n.value.trim()){s.value=[];return}const h=n.value.toLowerCase().trim();s.value=H.filter(p=>p.title.toLowerCase().includes(h)||p.excerpt.toLowerCase().includes(h)||p.content.toLowerCase().includes(h)||p.tags.some(g=>g.toLowerCase().includes(h)))},a=h=>{if(!n.value.trim())return h;const p=n.value.trim(),g=new RegExp(`(${c(p)})`,"gi");return h.replace(g,'<mark class="search-highlight">$1</mark>')},c=h=>h.replace(/[.*+?^${}()|[\]\\]/g,"\\$&"),f=(h,p)=>h.length<=p?h:h.slice(0,p)+"...",j=()=>{i.value<s.value.length-1&&i.value++},ne=()=>{i.value>0&&i.value--},oe=()=>{i.value>=0&&i.value<s.value.length&&F(s.value[i.value])},F=h=>{O(),o.push(`/article/${h.id}`)},O=()=>{u("close")};return(h,p)=>(m(),q(ce,{to:"body"},[y(X,{name:"search-modal"},{default:I(()=>[l.visible?(m(),v("div",{key:0,class:"search-overlay",onClick:B(O,["self"])},[e("div",He,[e("div",Ue,[p[1]||(p[1]=e("span",{class:"search-icon"},"🔍",-1)),re(e("input",{ref_key:"searchInput",ref:_,"onUpdate:modelValue":p[0]||(p[0]=g=>n.value=g),type:"text",class:"search-input",placeholder:"搜索文章标题、内容、标签...",onInput:t,onKeydown:[V(O,["esc"]),V(B(j,["prevent"]),["down"]),V(B(ne,["prevent"]),["up"]),V(B(oe,["prevent"]),["enter"])]},null,40,qe),[[le,n.value]]),e("button",{class:"search-close",onClick:O},"ESC")]),n.value&&s.value.length>0?(m(),v("div",Fe,[e("div",We," 找到 "+E(s.value.length)+" 篇相关文章 ",1),(m(!0),v(A,null,C(s.value,(g,W)=>(m(),v("div",{key:g.id,class:k(["search-result-item",{active:W===i.value}]),onClick:N=>F(g),onMouseenter:N=>i.value=W},[e("div",{class:"result-cover",style:me({background:g.cover})},null,4),e("div",ze,[e("div",{class:"result-title",innerHTML:a(g.title)},null,8,Ye),e("div",{class:"result-excerpt",innerHTML:a(f(g.excerpt,80))},null,8,Xe),e("div",Qe,[(m(!0),v(A,null,C(g.tags,N=>(m(),v("span",{key:N,class:"result-tag",innerHTML:a(N)},null,8,Ze))),128))])]),e("div",et,[e("span",tt,E(g.date),1),e("span",nt,E(g.readTime),1)])],42,Je))),128))])):n.value&&s.value.length===0?(m(),v("div",ot,[...p[2]||(p[2]=[e("span",{class:"empty-icon"},"🔎",-1),e("p",null,"没有找到相关文章",-1),e("p",{class:"empty-hint"},"试试其他关键词？",-1)])])):(m(),v("div",st,[...p[3]||(p[3]=[e("div",{class:"hint-keys"},[e("kbd",null,"↑"),e("kbd",null,"↓"),S(" 导航 "),e("kbd",null,"Enter"),S(" 选择 "),e("kbd",null,"Esc"),S(" 关闭 ")],-1),e("div",{class:"hint-shortcut"},[S("按 "),e("kbd",null,"/"),S(" 或 "),e("kbd",null,"Ctrl+K"),S(" 打开搜索")],-1)])]))])])):ie("",!0)]),_:1})]))}},rt=D(at,[["__scopeId","data-v-fcf61a89"]]),lt=["data-theme","data-mode"],it={class:"layout"},ct={class:"main"},dt={__name:"App",setup(l){const d=Z(),r=w(!1);return U(()=>{const u=localStorage.getItem("blog-theme"),o=localStorage.getItem("blog-mode");u&&d.setTheme(u),o&&d.setMode(o),window.addEventListener("keydown",n=>{n.key==="/"&&!["INPUT","TEXTAREA"].includes(n.target.tagName)&&(n.preventDefault(),r.value=!0),(n.ctrlKey||n.metaKey)&&n.key==="k"&&(n.preventDefault(),r.value=!0)})}),(u,o)=>{const n=G("router-view");return m(),v("div",{class:"app","data-theme":b(d).currentTheme,"data-mode":b(d).currentMode},[y(be,{onOpenSearch:o[0]||(o[0]=s=>r.value=!0)}),e("div",it,[y(De),e("main",ct,[y(n,null,{default:I(({Component:s})=>[y(X,{name:"fade",mode:"out-in"},{default:I(()=>[(m(),q(ve(s)))]),_:2},1024)]),_:1})])]),y(Re),y(Ke),y(je),y(rt,{visible:r.value,onClose:o[1]||(o[1]=s=>r.value=!1)},null,8,["visible"])],8,lt)}}},ut=D(dt,[["__scopeId","data-v-819501d4"]]),mt="modulepreload",vt=function(l){return"/blog/"+l},J={},T=function(d,r,u){let o=Promise.resolve();if(r&&r.length>0){document.getElementsByTagName("link");const s=document.querySelector("meta[property=csp-nonce]"),i=(s==null?void 0:s.nonce)||(s==null?void 0:s.getAttribute("nonce"));o=Promise.allSettled(r.map(_=>{if(_=vt(_),_ in J)return;J[_]=!0;const t=_.endsWith(".css"),a=t?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${_}"]${a}`))return;const c=document.createElement("link");if(c.rel=t?"stylesheet":mt,t||(c.as="script"),c.crossOrigin="",c.href=_,i&&c.setAttribute("nonce",i),document.head.appendChild(c),t)return new Promise((f,j)=>{c.addEventListener("load",f),c.addEventListener("error",()=>j(new Error(`Unable to preload CSS for ${_}`)))})}))}function n(s){const i=new Event("vite:preloadError",{cancelable:!0});if(i.payload=s,window.dispatchEvent(i),!i.defaultPrevented)throw s}return o.then(s=>{for(const i of s||[])i.status==="rejected"&&n(i.reason);return d().catch(n)})},ee=pe({history:_e("/blog/"),routes:[{path:"/",name:"home",component:()=>T(()=>import("./HomeView-joupGIdC.js"),__vite__mapDeps([0,1,2])),meta:{title:"首页 - 高辉的博客"}},{path:"/article",name:"article",component:()=>T(()=>import("./ArticleListView-CSavo7lY.js"),__vite__mapDeps([3,1,4])),meta:{title:"文章列表 - 高辉的博客"}},{path:"/article/:id",name:"article-detail",component:()=>T(()=>import("./ArticleDetailView-DJU9L7P-.js"),__vite__mapDeps([5,1,6,7,8])),meta:{title:"文章详情 - 高辉的博客"}},{path:"/portfolio",name:"portfolio",component:()=>T(()=>import("./PortfolioView-CZOtNJpF.js"),__vite__mapDeps([9,1,10])),meta:{title:"作品集 - 高辉的博客"}},{path:"/about",name:"about",component:()=>T(()=>import("./AboutView-Dxlo3kUL.js"),__vite__mapDeps([11,1,12])),meta:{title:"关于我 - 高辉的博客"}},{path:"/admin",name:"admin",component:()=>T(()=>import("./AdminLoginView-BoGxGPCm.js"),__vite__mapDeps([13,1,14,15])),meta:{title:"管理员登录"}},{path:"/admin/dashboard",name:"admin-dashboard",component:()=>T(()=>import("./AdminDashboardView-pGWE2912.js"),__vite__mapDeps([16,17,1,14,18,19])),meta:{title:"管理后台"}},{path:"/admin/articles",name:"admin-articles",component:()=>T(()=>import("./AdminArticleListView-2bY6euDx.js"),__vite__mapDeps([20,1,17,14,18,21])),meta:{title:"文章管理"}},{path:"/admin/editor/:id?",name:"admin-editor",component:()=>T(()=>import("./AdminEditorView-FR7jS4Iq.js"),__vite__mapDeps([22,1,6,7,17,14,18,23])),meta:{title:"编辑文章"}},{path:"/:pathMatch(.*)*",name:"not-found",component:()=>T(()=>import("./NotFoundView--2PWl_TZ.js"),__vite__mapDeps([24,1,25])),meta:{title:"页面不存在 - 高辉的博客"}}],scrollBehavior(l,d,r){return r||{top:0,behavior:"smooth"}}});ee.afterEach(l=>{l.meta.title&&(document.title=l.meta.title)});const te=he(ut);te.use(ee);te.mount("#app");export{D as _,Q as a,ke as u};
