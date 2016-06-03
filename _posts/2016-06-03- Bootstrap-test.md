---
layout: home
title: "Bootstrap test"
description: 
headline: 
modified: 2016-06-03
category: webdevelopment
tags: [bootstrap, modal]
imagefeature: 
mathjax: 
chart: 
comments: false
featured: true
---

  <h3>Modal Using Foundation</h3>

  <!-- Modal Foundation -->
<a href="#" data-reveal-id="myModal">Click Me For A Modal</a>

<div id="myModal" class="reveal-modal" data-reveal aria-labelledby="modalTitle" aria-hidden="true" role="dialog">
  <h2 id="modalTitle">Awesome. I have it.</h2>
  <p class="lead">Your couch.  It is mine.</p>
  <p>I'm a cool paragraph that lives inside of an even cooler modal. Wins!</p>
  <a class="close-reveal-modal" aria-label="Close">&#215;</a>
</div>
 
  <h3>Dropdowns</h3>
  <p>The .dropdown class is used to indicate a dropdown menu.</p>
  <p>Use the .dropdown-menu class to actually build the dropdown menu.</p>
  <p>To open the dropdown menu, use a button or a link with a class of .dropdown-toggle and data-toggle="dropdown".</p>                                          
  <div class="dropdown">
    <button class="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">Dropdown Example
    <span class="caret"></span></button>
    <ul class="dropdown-menu">
      <li><a href="#">HTML</a></li>
      <li><a href="#">CSS</a></li>
      <li><a href="#">JavaScript</a></li>
    </ul>
  </div> 

   <h3>Jumbotron</h3>
   <div class="jumbotron">
    <h4>Bootstrap Tutorial</h4>      
    <p>Bootstrap is the most popular HTML, CSS, and JS framework for developing responsive, mobile-first projects on the web.</p>
  </div>

 <!--  Foundation Image carousel                        -->
 <h3>Image Carousel</h3>
  <br/>
  

    <ul data-orbit class="example-orbit" data-options="timer: false">
    <li>
      <img src="http://www.w3schools.com/bootstrap/img_chania.jpg" alt="slide 1" />
      <div class="orbit-caption">
        Caption One.
      </div>
    </li>
    <li class="active">
      <img src="http://www.w3schools.com/bootstrap/img_chania2.jpg" alt="slide 2" />
      <div class="orbit-caption">
        Caption Two.
      </div>
    </li>
    <li>
      <img src="http://www.w3schools.com/bootstrap/img_flower.jpg" alt="slide 3" />
      <div class="orbit-caption">
        Caption Three.
      </div>
    </li>
    <li>
      <img src="http://www.w3schools.com/bootstrap/img_flower2.jpg" alt="slide 4" />
      <div class="orbit-caption">
        Caption four.
      </div>
    </li>  
	</ul>
  
  
  
  
  
  
  

<!-- <div class="orbit-container">  -->
<!--   <ul data-orbit class="example-orbit">
    <li>
      <img src="http://www.w3schools.com/bootstrap/img_chania.jpg" alt="slide 1" />
      <div class="orbit-caption">
        Caption One.
      </div>
    </li>
    <li class="active">
      <img src="http://www.w3schools.com/bootstrap/img_chania2.jpg" alt="slide 2" />
      <div class="orbit-caption">
        Caption Two.
      </div>
    </li>
    <li>
      <img src="http://www.w3schools.com/bootstrap/img_flower.jpg" alt="slide 3" />
      <div class="orbit-caption">
        Caption Three.
      </div>
    </li>
    <li>
      <img src="http://www.w3schools.com/bootstrap/img_flower2.jpg" alt="slide 4" />
      <div class="orbit-caption">
        Caption four.
      </div>
    </li>  
	</ul> -->

  <!-- Navigation Arrows -->
<!--   <a href="#" class="orbit-prev">Prev <span></span></a>
  <a href="#" class="orbit-next">Next <span></span></a> -->

  <!-- Slide Numbers -->
<!--   <div class="orbit-slide-number">
    <span>1</span> of <span>4</span>
  </div> -->

  <!-- Timer and Play/Pause Button -->
<!--   <div class="orbit-timer">
    <span></span>
    <div class="orbit-progress"></div>
  </div> -->
 
  
<!--  </div >  --> 

<!-- Bullets -->
<!-- <ol class="orbit-bullets">
  <li data-orbit-slide-number="1"></li>
  <li data-orbit-slide-number="2" class="active"></li>
  <li data-orbit-slide-number="3"></li>
  <li data-orbit-slide-number="4"></li>
</ol>   -->
  
  
  
 
 <!--  End Image carousel                        -->