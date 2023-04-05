import{_ as s,c as n,o as a,Q as e}from"./chunks/framework.7addaa9c.js";const g=JSON.parse('{"title":"Git ignore 忽略文件/文件夹常用规则","description":"","frontmatter":{},"headers":[],"relativePath":"environment/Git/ignore.md"}'),o={name:"environment/Git/ignore.md"},l=e(`<h1 id="git-ignore-忽略文件-文件夹常用规则" tabindex="-1">Git ignore 忽略文件/文件夹常用规则 <a class="header-anchor" href="#git-ignore-忽略文件-文件夹常用规则" aria-label="Permalink to &quot;Git ignore 忽略文件/文件夹常用规则&quot;">​</a></h1><p>项目根目录创建 <code>.gitignore</code>，以下是一些常用规则方法：</p><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">//</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">表示过滤这个文件夹</span></span>
<span class="line"><span style="color:#FFCB6B;">node_modules/</span><span style="color:#A6ACCD;">   </span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">//</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">过滤zip后缀文件</span></span>
<span class="line"><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;">.zip           </span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">//</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">过滤该文件</span></span>
<span class="line"><span style="color:#FFCB6B;">demo.html</span><span style="color:#A6ACCD;">   </span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">//</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">不过滤js文件</span></span>
<span class="line"><span style="color:#89DDFF;">!*</span><span style="color:#A6ACCD;">.js</span></span></code></pre></div><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>更多细节请参考<a href="https://git-scm.com/docs/gitignore" target="_blank" rel="noreferrer">Git文档</a></p></div>`,4),p=[l];function t(c,r,i,C,_,d){return a(),n("div",null,p)}const m=s(o,[["render",t]]);export{g as __pageData,m as default};
