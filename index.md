---
layout: home
---
<div class="container">

    {%- include header.html -%}

    <div class="docs-section" id="intro">
      <h6 class="docs-header">Hantas 能做什么？</h6>
      <p>如果您做的是一个小型项目，或者感觉对于大型框架的所有功能用不到，您就可以选择 Hantas。Hantas 只定义了一些基本的 HTML 元素和格栅系统，也就是说，如果您使用本框架，还需要做大量的后期定制。实际上，<u>基于 Hantas 构建的本站点就有大约 200 行的定制 CSS 代码</u> （一代码都用于写可以悬停的导航条了）。</p>
      <p>要查看更多内容，参阅<a href="/docs">文档</a></p>
    </div>

    <div class="docs-section" id="news">
      <h6 class="docs-header">新闻</h6>
      <div class="row news">
      {% if site.paginate %}
        {% assign posts = paginator.posts %}
      {% else %}
        {% assign posts = site.posts %}
      {% endif %}


      {%- if posts.size > 0 -%}
        {%- if page.list_title -%}
          <h2 class="post-list-heading">{{ page.list_title }}</h2>
        {%- endif -%}
        <ul class="post-list">
          {%- assign date_format = site.minima.date_format | default: "%b %-d, %Y" -%}
          {%- for post in posts -%}
          <li>
            <span class="post-meta">{{ post.date | date: date_format }}</span>
            <h3>
              <a class="post-link" href="{{ post.url | relative_url }}">
                {{ post.title | escape }}
              </a>
            </h3>
            {%- if site.show_excerpts -%}
              {{ post.excerpt }}
            {%- endif -%}
          </li>
          {%- endfor -%}
        </ul>

        {% if site.paginate %}
          <div class="pager">
            <ul class="pagination">
            {%- if paginator.previous_page %}
              <li><a href="{{ paginator.previous_page_path | relative_url }}" class="previous-page">{{ paginator.previous_page }}</a></li>
            {%- else %}
              <li><div class="pager-edge">•</div></li>
            {%- endif %}
              <li><div class="current-page">{{ paginator.page }}</div></li>
            {%- if paginator.next_page %}
              <li><a href="{{ paginator.next_page_path | relative_url }}" class="next-page">{{ paginator.next_page }}</a></li>
            {%- else %}
              <li><div class="pager-edge">•</div></li>
            {%- endif %}
            </ul>
          </div>
        {%- endif %}

      {%- endif -%}

      </div>
    </div>

  </div>

