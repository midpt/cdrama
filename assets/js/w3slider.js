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
 //  Hide all slides");
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



//---adjust image size to the given width & height (including centralising)		
$("img").each(function()
{
    var maxWidth = 320;//787; // Max width for the image
    var maxHeight =240 ;//480;    // Max height for the image
    var ratio = 0;  // Used for aspect ratio
    var width = $(this).width();    // Current image width
    var height = $(this).height();  // Current image height
    var sldInx=$(this).index();
	var imgNo=sldInx+1;
	var totalImg=$(img).length;
	console.log("current image="+imgNo+"/"+totalImg+"  width="+width+"   height="+height+"   maWidth="+maxWidth+"  maxHt="+maxHeight);
    // Check if the current width is larger than the max
    if(width > maxWidth)
    {
		console.log("img "+imgNo+"  width>maxWidth"+"  width="+width+"   height="+height);	    
        ratio = maxWidth / width;   // get ratio for scaling image
        $(this).css("width", maxWidth); // Set new width
        $(this).css("height", height * ratio);  // Scale height based on ratio
        height = height * ratio;    // Reset height to match scaled image
        width = width * ratio;    // Reset width to match scaled image
		console.log("img "+imgNo+"  adjusted width="+width+"  adjusted height="+height);	    
		
    }
    // Check if current height is larger than max
    if(height > maxHeight)
    {
		console.log("img "+imgNo+"  height>maxHeight"+"  width="+width+"   height="+height);	    
        ratio = maxHeight / height; // get ratio for scaling image
        $(this).css("height", maxHeight);   // Set new height
        $(this).css("width", width * ratio);    // Scale width based on ratio
        width = width * ratio;    // Reset width to match scaled image
        height = height * ratio;    // Reset height to match scaled image
 		console.log("img "+imgNo+"  adjusted width="+width+"  adjusted height="+height);	    
		
   }
    var newwidth = $(this).width();
    var parentwidth=$(this).parent().width();
	console.log("img "+imgNo+"  Parent width="+parentwidth+"  img width="+newwidth);
    var widthdiff=(parentwidth-newwidth)/2;
    $(this).css("margin-left",widthdiff);
});				 
				 