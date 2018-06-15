---
layout: post
title: 'Service Worker'
date: 2018-6-14 23:00:00 +0800
updated: 2018-6-15 23:00:00 +0800
categories: blog
tags: '新技术'
---

<% for (var link in site.data.menu) { %>
  <a href="<%= site.data.menu[link] %>"> <%= link %> </a>
<% } %>

// PWA 必须
serviceworker 至少每24小时会进行一次更新

{% blockquote David Levithan, Wide Awake %}
Do not just seek happiness for yourself. Seek happiness for all. Through kindness. Through mercy.
{% endblockquote %}

{% codeblock helloWorld lang:javascript www.baidu.com 这是百度的地址 %}
console.log('hello world')
{% endcodeblock %}

![百度图片](/assets/images/timg.jpg)

{% codeblock helloWorld lang:javascript /assets/codelist/helloWorld.js helloWorld %}
console.log('hello world')
{% endcodeblock %}

<pre>
{% include_code helloWorld lang:javascript /assets/codelist/helloWorld.js %}
</pre>
