console.log("w3Slider loaded.")

var slideIndex = 1; // slideIndex is 1-based
showSlides(slideIndex);


$(".prev").click(function(){
    showSlides(slideIndex -= 1);
});

$(".next").click(function(){
    showSlides(slideIndex += 1);
});


$(".dot").click(function(){
//slideIndex = $(this).index()+1;
//setTimeout(function(){showSlides(slideIndex);},2000);
  showSlides(slideIndex = $(this).index()+1);
  console.log("dot no.="+slideIndex )
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
  var imgg=document.getElementsByClassName("imgg");
  var dots = document.getElementsByClassName("dot");
  var cpTxts=document.getElementsByClassName("captext");
  if (n > slides.length) {slideIndex = 1} 
  if (n < 1) {slideIndex = slides.length}
 //  Hide all slides");
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  //slides[slideIndex-1].style.display = "block"; 

  
 	  //----DISPLAY current img  slide
	 // slides[slideIndex-1].style.display = "block"; 	 
  
 // console.log("display slide="+slideIndex);
   //----display current DOT
  dots[slideIndex-1].className += " active";
  
  
  var cscr=imgg[slideIndex-1].getAttribute("src");
  console.log("current src="+cscr)
  
  imgWdHtSetCenter(slides[slideIndex-1], cpTxts[slideIndex-1],imgg);
  
}
 
  

//---adjust image size to the given width & height (including centralising)		
function imgWdHtSetCenter(domSlideObj, domCapObj,domImggObj)
{
    var maxWidth = 480;//787; // Max width for the image
    var maxHeight =360 ;//480;    // Max height for the image
    var ratio = 0;  // Used for aspect ratio
    var width =0;// $(domSlideObj).width();    // Current image width
    var height =0;// $(domSlideObj).height();  // Current image height
	
	//---To get current physical image width & height, we need to wait the current image is loaded.  
	//  We can create a img load event using a new image tag
    //  Create a new img tag obj.  Load the new img tag with our targetted image and wait for new img tag to load  so as to get its width n height
	$("<img>") // Create a new <img>
	  .attr("src", domImggObj[slideIndex-1].getAttribute("src")) // Copy the src attr from the target img  ie  domSlideObj
		.load(function() {
		  width=this.width;
		  height=this.height;
		  //console.log("Width:  " + this.width);
		  //console.log("Height: " + this.height);
		  
		   // var sldInx=slideIndex; // slideIndex is global and is 1-based
			var totalImg=$(".imgg").length;
			console.log("current image="+slideIndex+"/"+totalImg+"  width="+width+"   height="+height+"   maWidth="+maxWidth+"  maxHt="+maxHeight);
			
			// Check if current height is larger than max
			// If Width is the priority, make sure 'if(width > maxWidth)' precedes 'if(height > maxHeight)'
			// If Height is the priority, make sure  'if(height > maxHeight)'  precedes 'if(width > maxWidth)'
			if(height > maxHeight)
			{
				console.log("img "+slideIndex+"  height>maxHeight"+"  width="+width+"   height="+height);	    
				ratio = maxHeight / height; // get ratio for scaling image
				$(domSlideObj).css("height", maxHeight);   // Set new height
				$(domSlideObj).css("width", width * ratio);    // Scale width based on ratio
				width = width * ratio;    // Reset width to match scaled image
				height = height * ratio;    // Reset height to match scaled image
				console.log("img "+slideIndex+"  adjusted width="+width+"  adjusted height="+height);	    
				
		   }	
	
	
		/* 	
			// Check if the current width is larger than the max
			if(width > maxWidth)
			{
				console.log("img "+slideIndex+"  width>maxWidth"+"  width="+width+"   height="+height);	    
				ratio = maxWidth / width;   // get ratio for scaling image
				$(domSlideObj).css("width", maxWidth); // Set new width
				$(domSlideObj).css("height", height * ratio);  // Scale height based on ratio
				height = height * ratio;    // Reset height to match scaled image
				width = width * ratio;    // Reset width to match scaled image
				console.log("img "+slideIndex+"  adjusted width="+width+"  adjusted height="+height);	    		
			}
		 */
 
			var newwidth = width;//$(domSlideObj).width();
			var parentwidth=$(domSlideObj).parent().width();
			//var capwidth=$(domCapObj).innerWidth();
			console.log("img "+slideIndex+"  Parent width="+parentwidth+"  img width="+newwidth);
			var widthdiff=(parentwidth-newwidth)/2;
			$(domSlideObj).css("margin-left",widthdiff);
			
			  //----DISPLAY current img  slide-------------
			  domSlideObj.style.display = "block"; 	
			
			  //----get caption text width
		//	  var html_org = $(domCapObj).html();
		//	  var html_calc = '<span>' + html_org + '</span>';
		//	  $(domCapObj).html(html_calc);
		//	  var capwidth= $(domCapObj).find('span:first').width();
			
		//	console.log("img "+slideIndex+"  Parent width="+parentwidth+"  capwidth="+capwidth);
			
		//	  var capWdDiff=(parentwidth-capwidth)/2;
			  
			//  $(domCapObj).css("margin-left",capWdDiff);		  
		  
		  
		      var capwd=$(domCapObj).textWidth();
			  
		      console.log("caption width="+capwd);
			  var capWdDiff=((parentwidth-capwd)/2)-300;
			  $(domCapObj).css("margin-left",capWdDiff);	
			  
		  
		  
	  });// end  create a new <img> tag
	
	
	


};	//-------function imgWdHtSetCenter()----------

//----------jquery way of finding text width
// To this jquery func    eg     $('.classname').textWidth();

$.fn.textWidth = function(text, font) {
    if (!$.fn.textWidth.fakeEl) $.fn.textWidth.fakeEl = $('<span>').hide().appendTo(document.body);
    $.fn.textWidth.fakeEl.text(text || this.val() || this.text()).css('font', font || this.css('font'));
    return $.fn.textWidth.fakeEl.width();
};
			 
				 