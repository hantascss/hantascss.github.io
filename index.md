---
layout: home
---

{%- include header.html -%}
    
    <div class="docs-section" id="intro">
      <h6 class="docs-header">Hantas 能做什么？</h6>
      <p>如果您做的是一个小型项目，使用 CSS 大型框架有点儿“牛刀杀鸡”——大材小用的感觉，您就可以选择 Hantas 了。Hantas 只定义了一些基本的 HTML 元素和格栅系统，也就是说，如果您使用本框架，还需要做大量的后期定制。实际上，<u>基于 Hantas 构建的本站点就有大约 200 行的定制 CSS 代码</u> （其中一半的代码都用于写可以悬停的导航条了）。</p>
      <p>要查看更多内容，参阅<a href="/docs">文档</a></p>
    </div>

<div class="docs-section" id="news">
  <h6 class="docs-header">新闻</h6>
  <div class="row news">
    <ul>
      {% for post in site.posts %}
        <li>
          <a href="{{ post.url }}">{{ post.title }}</a>
        </li>
      {% endfor %}
    </ul>
  </div>
</div>
