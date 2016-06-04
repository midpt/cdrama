---
layout: post
title: "Centralise your post content"
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
### Content horizontal alignment
  
Text will be automatically centralised when writing using markdown.

When HTML tag content is introduced, content may not be horizontally centralised.
To centralise HTML content, you have to precede HTML markups with the following Foundation grid code

```
<div class="small-9 small-centered columns">
   
  Your HTML markups should be embedded within this div block.
  
</div>

```
   
  
<div class="small-9 small-centered columns">
	<center>
		<video width="420" height="315" controls="controls" allowfullscreen="true" poster="">
			<source src="{{ site.url }}/videos/korean_folk_song_in_mandarin.mp4" type="video/mp4">
		</video> 
	</center>
</div>
   