---
layout: post
title: "w3schools image slider"
description: "Test out w3school-slider picture carousel"
headline: 
modified: 2016-07-05
category: webdevelopment
tags: [picture carousel]
imagefeature: 
mathjax: 
chart: 
comments: false
featured: true
w3Loaded: true
---
<style>

body{

/*background-image: url('{{ site.url }}/images/orient1.png'); 
background-repeat:repeat;  
*/

}

</style>
  
### Picture  carousel -  W3schools Sliders  888

<div class="slideshow-container">
  <div class="mySlides fade">
    <div class="numbertext">1 / 3</div>
    <img src="{{ site.url }}/images/fc1.jpg" style="width:100%">
    <div class="text">Caption Text</div>
  </div>

  <div class="mySlides fade">
    <div class="numbertext">2 / 3</div>
    <img src="i{{ site.url }}/images/kitchen_adventurer_lemon.jpg" style="width:100%">
    <div class="text">Caption Two</div>
  </div>

  <div class="mySlides fade">
    <div class="numbertext">3 / 3</div>
    <img src="{{ site.url }}/images/kitchen_adventurer_donut.jpg" style="width:100%">
    <div class="text">Caption Three</div>
  </div>

  <a class="prev" onclick="plusSlides(-1)">&#10094;</a>
  <a class="next" onclick="plusSlides(1)">&#10095;</a>
</div>
<br>

<div style="text-align:center">
  <span class="dot" onclick="currentSlide(1)"></span> 
  <span class="dot" onclick="currentSlide(2)"></span> 
  <span class="dot" onclick="currentSlide(3)"></span> 
</div>


