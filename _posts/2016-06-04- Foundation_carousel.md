---
layout: post
title: "Foundation Carousel"
description: 
headline: 
modified: 2016-06-04
category: webdevelopment
tags: [foundation, image, carousel]
imagefeature: 
mathjax: 
chart: 
comments: false
featured: true
---
### Overview

I have not been successfull using Bootstrap Image Carousel, however, Foundation image carousel seems to work very well.

Snippet of the foundation image carousel code



````
  <div class="small-7 small-centered columns">
   <div class="small-7 small-centered columns">
      <ul class="example-orbit" data-orbit >	
		<li>
		  <img src="..." alt="slide 1" />
		   <div class="orbit-caption" >Caption One.</div>
		</li>

		<li class="active">
			 <img src="http://www.w3schools.com/bootstrap/img_chania2.jpg" alt="slide 2" /> 
			 <div class="orbit-caption" >Caption Two.</div>		 
		</li>
		
		 ..   ..
      </ul>
	</div>
  </div>		 

````  
  

<!--   Foundation Image Carousel   1-->		
 	
 <div class="small-9 small-centered columns">
 <h3>Image Carousel</h3>
  <br/>
	<div class="small-9 small-centered columns">
    <ul class="example-orbit" data-orbit >	
		<li>
			<center> <img src="http://www.w3schools.com/bootstrap/img_chania.jpg" alt="slide 1" /></center>
		   <div style="text-align: center">Caption One.</div>
		</li>

		<li class="active">
			<center> <img src="http://www.w3schools.com/bootstrap/img_chania2.jpg" alt="slide 2" /></center> 
		     <div style="text-align: center">Caption Two</div>
			 <!-- <div class="orbit-caption" style="text-align: center">Caption Two.</div>		  -->
		</li>

		<li>
			<center> <img src="http://www.w3schools.com/bootstrap/img_flower.jpg" alt="slide 3" /> </center>
		      <div style="text-align: center">Caption Three</div>
			  <!-- <div class="orbit-caption" style="text-align: center">Caption Three.</div> -->
		</li>

		<li>
			<center>  <img src="http://www.w3schools.com/bootstrap/img_flower2.jpg" alt="slide 4" /></center>
		      <div style="text-align: center">Caption Four</div>
			   <!-- <div class="orbit-caption" style="text-align: center">Caption four.</div> -->
		 </li> 

    </ul>
	</div>
   </div>
 <!--  End  Foundation Image Carousel   1-->	 
  
  <br/>
  
<!--   Foundation Image Carousel   2-->		
 	
 <div class="small-9 small-centered columns">
 <h3>Image Carousel</h3>
  <br/>
  <div class="orbit-container">
	<div class="small-9 small-centered columns">
    <ul data-orbit  class="example-orbit orbit-slides-container"  >	
		<li>
			<center> <img src="http://www.w3schools.com/bootstrap/img_chania.jpg" alt="slide 1" /></center>
		   <div style="text-align: center">Caption One.</div>
		</li>

		<li class="active">
			<center> <img src="http://www.w3schools.com/bootstrap/img_chania2.jpg" alt="slide 2" /></center> 
		     <div style="text-align: center">Caption Two</div>
			 <!-- <div class="orbit-caption" style="text-align: center">Caption Two.</div>		  -->
		</li>

		<li>
			<center> <img src="http://www.w3schools.com/bootstrap/img_flower.jpg" alt="slide 3" /> </center>
		      <div style="text-align: center">Caption Three</div>
			  <!-- <div class="orbit-caption" style="text-align: center">Caption Three.</div> -->
		</li>

		<li>
			<center>  <img src="http://www.w3schools.com/bootstrap/img_flower2.jpg" alt="slide 4" /></center>
		      <div style="text-align: center">Caption Four</div>
			   <!-- <div class="orbit-caption" style="text-align: center">Caption four.</div> -->
		 </li> 

    </ul>
	</div>
   </div>
  </div> <!-- end orbit container -->
 <!--  End  Foundation Image Carousel   2-->	  
  
