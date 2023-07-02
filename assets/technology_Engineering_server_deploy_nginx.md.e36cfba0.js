import{_ as s,c as n,o as a,Q as l}from"./chunks/framework.7addaa9c.js";const E=JSON.parse('{"title":"Nginx 配置","description":"","frontmatter":{},"headers":[],"relativePath":"technology/Engineering/server/deploy/nginx.md"}'),p={name:"technology/Engineering/server/deploy/nginx.md"},o=l(`<h1 id="nginx-配置" tabindex="-1">Nginx 配置 <a class="header-anchor" href="#nginx-配置" aria-label="Permalink to &quot;Nginx 配置&quot;">​</a></h1><p>以下是一个简单的 nginx 配置示例，包含基本的 server 配置块和 location 配置块：</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">http</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;"># 设定 MIME 类型</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">include</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">mime.types</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">default_type</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">application/octet-stream</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;"># 服务器日志格式设定</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">log_format</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">main</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">$remote_addr - $remote_user [$time_local] &quot;$request&quot; </span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#FFCB6B;">&#39;</span><span style="color:#A6ACCD;">$status $body_bytes_sent </span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">$http_referer</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#C3E88D;">        </span><span style="color:#89DDFF;">&#39;&quot;</span><span style="color:#A6ACCD;">$http_user_agent</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">$http_x_forwarded_for</span><span style="color:#89DDFF;">&quot;&#39;</span><span style="color:#C3E88D;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C3E88D;">    # 设定文件缓存时间</span></span>
<span class="line"><span style="color:#C3E88D;">    expires 1d;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C3E88D;">    # 虚拟主机设定</span></span>
<span class="line"><span style="color:#C3E88D;">    server {</span></span>
<span class="line"><span style="color:#C3E88D;">        # 监听 80 端口</span></span>
<span class="line"><span style="color:#C3E88D;">        listen 80;</span></span>
<span class="line"><span style="color:#C3E88D;">        </span></span>
<span class="line"><span style="color:#C3E88D;">        # 关闭对 favicon.ico 请求的日志记录</span></span>
<span class="line"><span style="color:#C3E88D;">        location = /favicon.ico {</span></span>
<span class="line"><span style="color:#C3E88D;">            log_not_found off;</span></span>
<span class="line"><span style="color:#C3E88D;">            access_log off;</span></span>
<span class="line"><span style="color:#C3E88D;">        }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C3E88D;">        # 设定网站根目录</span></span>
<span class="line"><span style="color:#C3E88D;">        root /usr/share/nginx/html;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C3E88D;">        # 设定默认文档</span></span>
<span class="line"><span style="color:#C3E88D;">        index index.html index.htm;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C3E88D;">        # 处理静态文件请求</span></span>
<span class="line"><span style="color:#C3E88D;">        location /static/ {</span></span>
<span class="line"><span style="color:#C3E88D;">            alias /var/www/static/;</span></span>
<span class="line"><span style="color:#C3E88D;">            autoindex on;</span></span>
<span class="line"><span style="color:#C3E88D;">            expires 7d;</span></span>
<span class="line"><span style="color:#C3E88D;">        }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C3E88D;">        # 处理动态请求</span></span>
<span class="line"><span style="color:#C3E88D;">        location / {</span></span>
<span class="line"><span style="color:#C3E88D;">            proxy_pass http://127.0.0.1:8000/;</span></span>
<span class="line"><span style="color:#C3E88D;">            proxy_set_header Host $host;</span></span>
<span class="line"><span style="color:#C3E88D;">            proxy_set_header X-Real-IP $remote_addr;</span></span>
<span class="line"><span style="color:#C3E88D;">            proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;</span></span>
<span class="line"><span style="color:#C3E88D;">        }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C3E88D;">        # 错误页面设定</span></span>
<span class="line"><span style="color:#C3E88D;">        error_page 404 /404.html;</span></span>
<span class="line"><span style="color:#C3E88D;">        error_page 500 502 503 504 /50x.html;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C3E88D;">        # 错误页面文件位置</span></span>
<span class="line"><span style="color:#C3E88D;">        location = /50x.html {</span></span>
<span class="line"><span style="color:#C3E88D;">            root /usr/share/nginx/html;</span></span>
<span class="line"><span style="color:#C3E88D;">        }</span></span>
<span class="line"><span style="color:#C3E88D;">    }</span></span>
<span class="line"><span style="color:#C3E88D;">}</span></span></code></pre></div><p>上述示例中的 http 块是根块，它包含了一些全局配置指令，如 MIME 类型、日志格式、文件缓存时间等。在 http 块内定义的 server 块则是虚拟主机，每个 server 块代表一个主机名，它们可以包含多个 location 块，每个 location 块可以针对不同的 URI 或文件类型进行不同的处理。</p><p>例如，在示例中的 server 块中，有两个 location 块，一个是处理静态文件请求的 /static/ location 块，该块使用了 alias 指令将请求映射到 /var/www/static/ 目录下，并设置了缓存时间和自动生成索引等选项；另一个是处理动态请求的 / location 块，该块使用了 proxy_pass 指令将请求转发到本地的 8000 端口上，同时还设置了一些代理头信息。</p><p>除了 server、http 块外，还可以在 nginx 配置文件中定义 events、mail、stream 等块。在 events 块中，可以设定 worker 进程数和连接数等事件相关参数。在 mail 块中，可以配置邮件服务器相关内容。在 stream 块中，可以进行 TCP/UDP 流代理等操作。总体上来讲，nginx 的配置非常灵活，可以根据实际需求进行不同的配置和组合。</p>`,6),e=[o];function t(c,r,i,y,C,D){return a(),n("div",null,e)}const d=s(p,[["render",t]]);export{E as __pageData,d as default};
