---
layout: post
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
### Modal component
Has problem using Bootstrap Modal. When the modal window appears, it is dimmed and its dialog buttons are inactive.
The alternative is to use Foundation Modal.

### Modal Using Foundation 

  <!-- Modal Foundation -->
<a href="#" data-reveal-id="myModal">Click Me For A Modal</a>

<div id="myModal" class="reveal-modal" data-reveal aria-labelledby="modalTitle" aria-hidden="true" role="dialog">
  <h2 id="modalTitle">Awesome. I have it.</h2>
  <p class="lead">Your couch.  It is mine.</p>
  <p>I'm a cool paragraph that lives inside of an even cooler modal. Wins!</p>
  <a class="close-reveal-modal" aria-label="Close">&#215;</a>
</div>
 
### Bootstrap buttons

 <div class="small-7 small-centered columns"> 
  <button type="button" class="btn btn-default">Default</button>
  <button type="button" class="btn btn-primary">Primary</button>
  <button type="button" class="btn btn-success">Success</button>
  <button type="button" class="btn btn-info">Info</button>
  <button type="button" class="btn btn-warning">Warning</button>
  <button type="button" class="btn btn-danger">Danger</button>
  <button type="button" class="btn btn-link">Link</button> 
  <br/> 
	  
 </div>
  
  
### Jumbotron

 <div class="small-7 small-centered columns"> 
   <div class="jumbotron">
    <h4>Bootstrap Tutorial</h4>      
    <p>Bootstrap is the most popular HTML, CSS, and JS framework for developing responsive, mobile-first projects on the web.</p>
  </div>

 </div> 
 
 
 
### Bootstrap Dropdowns 

The .dropdown class is used to indicate a dropdown menu.
Use the .dropdown-menu class to actually build the dropdown menu.
To open the dropdown menu, use a button or a link with a class of .dropdown-toggle and data-toggle="dropdown".
  
 <div class="small-7 small-centered columns"> 
	  <div class="dropdown">
		<button class="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">Dropdown Example
		<span class="caret"></span></button>
		<ul class="dropdown-menu">
		  <li><a href="#">HTML</a></li>
		  <li><a href="#">CSS</a></li>
		  <li><a href="#">JavaScript</a></li>
		</ul>
	  </div> 
 </div>
	  

  
     
  
  

  
  
  
 
 <!--  End Image carousel                        -->