import{_ as s,c as n,o as a,Q as l}from"./chunks/framework.466b0381.js";const m=JSON.parse('{"title":"npm 相关","description":"","frontmatter":{},"headers":[],"relativePath":"environment/Node/npm.md"}'),p={name:"environment/Node/npm.md"},o=l(`<h1 id="npm-相关" tabindex="-1">npm 相关 <a class="header-anchor" href="#npm-相关" aria-label="Permalink to &quot;npm 相关&quot;">​</a></h1><p>目前所有镜像源地址</p><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># npm </span></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">https://registry.npmjs.org/</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># yarn</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">https://registry.yarnpkg.com/</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># cnpm </span></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">http://r.cnpmjs.org/</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># taobao</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">https://registry.npm.taobao.org/</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># nj</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">https://registry.nodejitsu.com/</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># npmMirror</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">https://skimdb.npmjs.com/registry/</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># edunpm </span></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">http://registry.enpmjs.org/</span></span>
<span class="line"></span></code></pre></div><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>原淘宝npm域名即将停止解析，请切换至新域名 <code>http://npm.taobao.org</code>和 <code>http://registry.npm.taobao.org</code> 将在 2022.06.30 号正式下线和停止 DNS 解析。 新域名为 <code>npmmirror.com</code>, 相关服务域名切换规则请参考：</p><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">https://npm.taobao.org</span><span style="color:#A6ACCD;"> =</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">https://npmmirror.com</span></span>
<span class="line"><span style="color:#FFCB6B;">https://registry.npm.taobao.org</span><span style="color:#A6ACCD;"> =</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">https://registry.npmmirror.com</span></span>
<span class="line"></span></code></pre></div></div><h2 id="镜像" tabindex="-1">镜像 <a class="header-anchor" href="#镜像" aria-label="Permalink to &quot;镜像&quot;">​</a></h2><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># 查看镜像源</span></span>
<span class="line"><span style="color:#FFCB6B;">npm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">get</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">registry</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 切换镜像源</span></span>
<span class="line"><span style="color:#FFCB6B;">npm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">set</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">registry</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#C3E88D;">镜像源地</span><span style="color:#A6ACCD;">址</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#或</span></span>
<span class="line"><span style="color:#FFCB6B;">npm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">config</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">set</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">registry</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#C3E88D;">镜像源地</span><span style="color:#A6ACCD;">址</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><h2 id="辅助命令" tabindex="-1">辅助命令 <a class="header-anchor" href="#辅助命令" aria-label="Permalink to &quot;辅助命令&quot;">​</a></h2><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># 本地联调</span></span>
<span class="line"><span style="color:#FFCB6B;">npm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">link</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 取消本地联调</span></span>
<span class="line"><span style="color:#FFCB6B;">npm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">unlink</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 查看安装了多少包</span></span>
<span class="line"><span style="color:#FFCB6B;">npm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">ls</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 查看node安装路径</span></span>
<span class="line"><span style="color:#FFCB6B;">npm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">get</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">prefix</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 查看全局node包</span></span>
<span class="line"><span style="color:#FFCB6B;">npm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">root</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-g</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 清理缓存</span></span>
<span class="line"><span style="color:#FFCB6B;">npm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">cache</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">clean</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-f</span></span>
<span class="line"></span></code></pre></div><div class="danger custom-block"><p class="custom-block-title">提醒</p><p>发布包的时候要慎重，尽量不要往 npm 上发布没有意义的包！</p></div><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># 当前登录用户：</span></span>
<span class="line"><span style="color:#FFCB6B;">npm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">who</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">am</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">i</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">或</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">npm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">whoami</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 注册：</span></span>
<span class="line"><span style="color:#FFCB6B;">npm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">adduser</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 初始化</span></span>
<span class="line"><span style="color:#FFCB6B;">npm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">init</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 登录</span></span>
<span class="line"><span style="color:#FFCB6B;">npm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">login</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">（初次发包）</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 发包 </span></span>
<span class="line"><span style="color:#FFCB6B;">npm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">publish</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 撤销包</span></span>
<span class="line"><span style="color:#FFCB6B;">npm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">unpublish</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">包名</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--force</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;"># 即可从 npm 删除已发布的包。</span></span>
<span class="line"><span style="color:#FFCB6B;">npm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">unpublish</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">#命令只能删除 72 小时以内发布的包</span></span>
<span class="line"><span style="color:#FFCB6B;">npm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">unpublish</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">删除的包</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">#在 24 小时内不允许重复发布</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 删除包</span></span>
<span class="line"><span style="color:#FFCB6B;">npm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">deprecate</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">包名</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">@版本</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">“描述”</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 版本修改：</span></span>
<span class="line"><span style="color:#FFCB6B;">npm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">version</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">patch：</span><span style="color:#F78C6C;">1.0</span><span style="color:#C3E88D;">.0会变成1.</span><span style="color:#F78C6C;">0.1</span></span>
<span class="line"><span style="color:#FFCB6B;">npm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">version</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">major：</span><span style="color:#F78C6C;">1.0</span><span style="color:#C3E88D;">.0会变成2.</span><span style="color:#F78C6C;">0.0</span></span>
<span class="line"><span style="color:#FFCB6B;">npm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">version</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">minor：</span><span style="color:#F78C6C;">1.0</span><span style="color:#C3E88D;">.0会变成1.</span><span style="color:#F78C6C;">1.0</span></span>
<span class="line"></span></code></pre></div>`,10),e=[o];function t(c,r,y,C,i,D){return a(),n("div",null,e)}const F=s(p,[["render",t]]);export{m as __pageData,F as default};
