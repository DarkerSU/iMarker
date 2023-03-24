import{_ as s,c as a,o as l,Q as n}from"./chunks/framework.11a869bf.js";const m=JSON.parse('{"title":"Git commit 规范约定","description":"","frontmatter":{},"headers":[],"relativePath":"environment/Git/commit-standard.md"}'),e={name:"environment/Git/commit-standard.md"},o=n(`<h1 id="git-commit-规范约定" tabindex="-1">Git commit 规范约定 <a class="header-anchor" href="#git-commit-规范约定" aria-label="Permalink to &quot;Git commit 规范约定&quot;">​</a></h1><h2 id="git-commit-格式" tabindex="-1">Git commit 格式 <a class="header-anchor" href="#git-commit-格式" aria-label="Permalink to &quot;Git commit 格式&quot;">​</a></h2><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">type</span><span style="color:#89DDFF;">&gt;(&lt;</span><span style="color:#C3E88D;">scope</span><span style="color:#89DDFF;">&gt;)</span><span style="color:#A6ACCD;">: </span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">subject</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;!</span><span style="color:#FFCB6B;">--</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">空行</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">body</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;!</span><span style="color:#FFCB6B;">--</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">空行</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">footer</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><h2 id="标识-type-必填" tabindex="-1">标识 - type（必填） <a class="header-anchor" href="#标识-type-必填" aria-label="Permalink to &quot;标识 - type（必填）&quot;">​</a></h2><ul><li>feat：添加新特性</li><li>fix：产生 diff 并自动修复此问题。适合于一次提交直接修复问题</li><li>to：只产生 diff 不自动修复此问题。适合于多次提交。最终修复问题提交时使用 fix</li><li>docs：仅仅修改了文档</li><li>style：仅仅修改了空格、格式缩进、逗号等等，不改变代码逻辑</li><li>refactor：代码重构，没有加新功能或者修复 bug</li><li>perf：优化相关，比如提升性能、体验</li><li>test：增加测试用例</li><li>chore：改变构建流程、或者增加依赖库、工具等</li><li>build：影响项目构建或依赖项修改</li><li>release：发布新版本</li><li>revert：回滚到上一个版本</li><li>merge：代码合并</li><li>sync：同步主线或分支的Bug</li></ul><h2 id="影响范围-scope-可选" tabindex="-1">影响范围 - scope（可选） <a class="header-anchor" href="#影响范围-scope-可选" aria-label="Permalink to &quot;影响范围 - scope（可选）&quot;">​</a></h2><p>scope 用于说明 commit 影响的范围，比如数据层、控制层、视图层等等，视项目不同而不同。如果修改影响了不止一个 scope，你可以使用 * 代替。</p><h2 id="简短描述-subject-必填" tabindex="-1">简短描述 - subject（必填） <a class="header-anchor" href="#简短描述-subject-必填" aria-label="Permalink to &quot;简短描述 - subject（必填）&quot;">​</a></h2><p>subject 是 commit 目的的简短描述</p><ul><li>不超过50个字符；</li><li>以动词开头，使用第一人称现在时，比如 change，而不是 changed 或 changes；</li><li>第一个字母小写；</li><li>结尾不加句号或其他标点符号</li></ul><h2 id="详细信息-body-可选" tabindex="-1">详细信息 - body（可选） <a class="header-anchor" href="#详细信息-body-可选" aria-label="Permalink to &quot;详细信息 - body（可选）&quot;">​</a></h2><p>描述当前修改的行为详细信息或修改的目的。</p><h2 id="其他信息-footer-可选" tabindex="-1">其他信息 - footer（可选） <a class="header-anchor" href="#其他信息-footer-可选" aria-label="Permalink to &quot;其他信息 - footer（可选）&quot;">​</a></h2><p>一般用于描述 BREAKING CHANGE，在项目开发中一般不需要填写，组件研发的工程需要填写。</p><p>**格式：**以BREAKING CHANGE开头，后面是对变动的描述，以及变动理由和迁移方法。</p><h2 id="例子" tabindex="-1">例子 <a class="header-anchor" href="#例子" aria-label="Permalink to &quot;例子&quot;">​</a></h2><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># 示例1</span></span>
<span class="line"><span style="color:#FFCB6B;">fix(global</span><span style="color:#A6ACCD;">):修复checkbox不能复选的问题</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 示例2 下面圆括号里的 common 为通用管理的名称</span></span>
<span class="line"><span style="color:#FFCB6B;">fix(common</span><span style="color:#A6ACCD;">): 修复字体过小的BUG，将通用管理下所有页面的默认字体大小修改为 14px</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 示例3</span></span>
<span class="line"><span style="color:#FFCB6B;">fix:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">value.length</span><span style="color:#A6ACCD;"> -</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">values.length</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 示例4</span></span>
<span class="line"><span style="color:#FFCB6B;">feat:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">添加网站主页静态页面</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 示例5</span></span>
<span class="line"><span style="color:#FFCB6B;">chore:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">将表格中的查看详情改为详情</span></span>
<span class="line"></span>
<span class="line"></span></code></pre></div>`,17),t=[o];function p(c,i,r,y,h,d){return l(),a("div",null,t)}const D=s(e,[["render",p]]);export{m as __pageData,D as default};
