import{d as p,K as o,a3 as i,u,h as c,l,a4 as d,a5 as f,a6 as m,a7 as h,a8 as A,a9 as g,aa as v,ab as P,ac as w,ad as y,ae as C,af as R,ag as _,H as b}from"./chunks/framework.466b0381.js";import{t as E}from"./chunks/theme.f5bc8a45.js";const D={...E};function r(e){if(e.extends){const a=r(e.extends);return{...a,...e,async enhanceApp(t){a.enhanceApp&&await a.enhanceApp(t),e.enhanceApp&&await e.enhanceApp(t)}}}return e}const n=r(D),T=p({name:"VitePressApp",setup(){const{site:e}=u();return c(()=>{l(()=>{document.documentElement.lang=e.value.lang,document.documentElement.dir=e.value.dir})}),d(),f(),m(),n.setup&&n.setup(),()=>h(n.Layout)}});async function O(){const e=j(),a=S();a.provide(A,e);const t=g(e.route);return a.provide(v,t),a.component("Content",P),a.component("ClientOnly",w),Object.defineProperties(a.config.globalProperties,{$frontmatter:{get(){return t.frontmatter.value}},$params:{get(){return t.page.value.params}}}),n.enhanceApp&&await n.enhanceApp({app:a,router:e,siteData:y}),{app:a,router:e,data:t}}function S(){return C(T)}function j(){let e=o,a;return R(t=>{let s=_(t);return e&&(a=s),(e||a===s)&&(s=s.replace(/\.js$/,".lean.js")),o&&(e=!1),b(()=>import(s),[])},n.NotFound)}o&&O().then(({app:e,router:a,data:t})=>{a.go().then(()=>{i(a.route,t.site),e.mount("#app")})});export{O as createApp};
