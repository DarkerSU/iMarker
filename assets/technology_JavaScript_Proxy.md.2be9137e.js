import{_ as a,c as e,o as r,Q as o}from"./chunks/framework.466b0381.js";const y=JSON.parse('{"title":"Proxy","description":"","frontmatter":{},"headers":[],"relativePath":"technology/JavaScript/Proxy.md"}'),t={name:"technology/JavaScript/Proxy.md"},n=o('<h1 id="proxy" tabindex="-1">Proxy <a class="header-anchor" href="#proxy" aria-label="Permalink to &quot;Proxy&quot;">​</a></h1><h2 id="一、proxy-概述" tabindex="-1">一、Proxy 概述 <a class="header-anchor" href="#一、proxy-概述" aria-label="Permalink to &quot;一、Proxy 概述&quot;">​</a></h2><h3 id="是什么" tabindex="-1">是什么 <a class="header-anchor" href="#是什么" aria-label="Permalink to &quot;是什么&quot;">​</a></h3><p>Proxy 是一个内置对象，可以用于拦截JavaScript对象的操作。 它提供了一个钩子函数的集合，这些钩子函数可以拦截对象的许多操作，例如读取和写入属性，调用方法等等。通过使用 Proxy，可以在属性访问，对象枚举，函数调用等操作之前执行自定义逻辑，从而实现更高级的操作和控制。</p><h3 id="作用" tabindex="-1">作用 <a class="header-anchor" href="#作用" aria-label="Permalink to &quot;作用&quot;">​</a></h3><p>因为es5中提供的Object.defineProperty方法无法对数组的变化进行监测，通过数组索引修改值及改变length以及一些数组方法使用时不能很好的监测并修改，因此es6提供了proxy方法以监测数组的改变。</p>',6),c=[n];function i(s,h,l,_,d,p){return r(),e("div",null,c)}const P=a(t,[["render",i]]);export{y as __pageData,P as default};
