console.log("w3Slider loaded.")

var slideIndex = 1;
showSlides(slideIndex);


$(".prev").click(function(){
    showSlides(slideIndex -= 1);
});

$(".next").click(function(){
    showSlides(slideIndex += 1);
});


$(".dot").click(function(){
  showSlides(slideIndex = $(this).index()+1);
});


function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1} 
  if (n < 1) {slideIndex = slides.length}
 // console.log("slideIndex="+slideIndex+ "   Blank all slides");
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block"; 
  var nn=slideIndex-1
 // console.log("display slide="+nn);
  dots[slideIndex-1].className += " active";
}