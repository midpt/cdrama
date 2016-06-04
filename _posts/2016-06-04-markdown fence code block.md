---
layout: post
title: "Markdown fenced code block"
description: 
headline: 
modified: 2016-06-02
category: webdevelopment
tags: [center, centralise]
imagefeature: 
mathjax: 
chart: 
comments: false
featured: true
---
### Markdown fence code block
  
When writing markdown in Github Jekyll page, do not use back-tick fenced code, instead use {% raw %} {% highlight html%}.... {% endhighlight%} {% endraw%} block as shown below.


{% raw %}{% highlight html %} {% endraw%} 
{% highlight html %}
 <div>
     <p> Paragraph 1   </p>
     <p> Paragraph 2   </p>
 </div>
{% endhighlight %}
{% raw %}{% endhighlight %}{% endraw%} 
   

     