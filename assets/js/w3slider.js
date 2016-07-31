console.log("w3Slider loaded.")

var slideNumber = 1; // slideNumber is 1-based
showSlides(slideNumber);


$(".prev").click(function(){
    showSlides(slideNumber -= 1);
});

$(".next").click(function(){
    showSlides(slideNumber += 1);
});


$(".dot").click(function(){
//slideNumber = $(this).index()+1;
//setTimeout(function(){showSlides(slideNumber);},2000);
  showSlides(slideNumber = $(this).index()+1);
  console.log("dot no.="+slideNumber )
});


function plusSlides(n) {
  showSlides(slideNumber += n);
}

function currentSlide(n) {
  showSlides(slideNumber = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var imgg=document.getElementsByClassName("imgg");
  var dots = document.getElementsByClassName("dot");
  var cpTxts=document.getElementsByClassName("text");
  var numTxts=document.getElementsByClassName("numbertext");
  if (n > slides.length) {slideNumber = 1} 
  if (n < 1) {slideNumber = slides.length}
 // -----  Hide ALL slides
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  //slides[slideNumber-1].style.display = "block"; 

  
 	  //----DISPLAY current img  slide
	 // slides[slideNumber-1].style.display = "block"; 	 
  
 // console.log("display slide="+slideNumber);
   //----display current DOT
 // dots[slideNumber-1].className += " active";
  
  
  var cscr=imgg[slideNumber-1].getAttribute("src");
  console.log("current src="+cscr)
  
  imgWdHtSetCenter(slides[slideNumber-1], cpTxts[slideNumber-1],imgg ,numTxts);
  
}
 
  

//---adjust image size to the given width & height (including centralising)	
// eg domSlideObj=document.getElementsByTagName("myslides")[0]	
// eg domCapObj=document.getElementsByTagName("text")[0]	
// eg domImggObj=document.getElementsByClassName("imgg");
function imgWdHtSetCenter(domSlideObj, domCapObj,domImggObj, domNumObj)
{
    var maxWidth = 640;//787; // change this to your need width for the image
    var maxHeight =480 ;//480;    // Max height for the image
    var ratio = 0;  // Used for aspect ratio
    var width =0;// $(domSlideObj).width();    // Current image width
    var height =0;// $(domSlideObj).height();  // Current image height
	
	//---To get current physical image width & height, we need to wait the current image is loaded.  
	//  We can create a img load event using a new image tag
    //  Create a new img tag obj.  Load the new img tag with our targetted image and wait for new img tag to load  so as to get its width n height
	$("<img>") // Create a new <img>
	  .attr("src", domImggObj[slideNumber-1].getAttribute("src")) // Copy the src attr from the target img  ie  domSlideObj
		.load(function() {
		  width=this.width;
		  height=this.height;
		  //console.log("Width:  " + this.width);
		  //console.log("Height: " + this.height);

			var totalImg=$(".imgg").length;
			console.log("current image="+slideNumber+"/"+totalImg+"  width="+width+"   height="+height+"   maWidth="+maxWidth+"  maxHt="+maxHeight);
			
			// Check if current height is larger than max
			if(height > maxHeight)
			{
				console.log("img "+slideNumber+"  height>maxHeight"+"  width="+width+"   height="+height);	    
				ratio = maxHeight / height; // get ratio for scaling image
				$(domSlideObj).css("height", maxHeight);   // Set new height
				$(domSlideObj).css("width", width * ratio);    // Scale width based on ratio
				width = width * ratio;    // Reset width to match scaled image
				height = height * ratio;    // Reset height to match scaled image
				console.log("img "+slideNumber+"  adjusted width="+width+"  adjusted height="+height);	    
				
		   }	
		
		/* 	
			// Check if the current width is larger than the max
			if(width > maxWidth)
			{
				console.log("img "+slideNumber+"  width>maxWidth"+"  width="+width+"   height="+height);	    
				ratio = maxWidth / width;   // get ratio for scaling image
				$(domSlideObj).css("width", maxWidth); // Set new width
				$(domSlideObj).css("height", height * ratio);  // Scale height based on ratio
				height = height * ratio;    // Reset height to match scaled image
				width = width * ratio;    // Reset width to match scaled image
				console.log("img "+slideNumber+"  adjusted width="+width+"  adjusted height="+height);	    		
			}
		 */
 
			var newwidth = width;//$(domSlideObj).width();
			var parentwidth=$(domSlideObj).parent().width();
			//var capwidth=$(domCapObj).innerWidth();
			console.log("img "+slideNumber+"  Parent width="+parentwidth+"  img width="+newwidth);
			var widthdiff=(parentwidth-newwidth)/2;
			$(domSlideObj).css("margin-left",widthdiff);
			

		      //---prepare to find out the text caption width
			  //  So as to reposition the caption in a centralised position
		      var curTxt=domCapObj.innerHTML;
			  var curFontFam=$(domCapObj).css("font-family");
			  var curFontSize=$(domCapObj).css("font-size"); // eg  15px   i.e with px
			  var fontstr=curFontSize+" "+curFontFam; // eg  15px arial
			  //-----call jquery func  textWidth() and return the text width
		      var capwd=$(domCapObj).textWidth(curTxt, fontstr);
			  var capwdSet=capwd+32 ;// one char 8px,  32 is 4 additional chars
			  //-----Note!!!  Do not forget the px unit
			  var capwdSetStr=capwdSet+"px"
			  
			  
		      console.log("caption width="+capwd+"    currentText="+curTxt+"   fontsize="+curFontSize);
			  
			  var capWdDiff=((parentwidth-capwd)/2);
			  $(domCapObj).css("width",capwdSetStr);	
			  $(domCapObj).css("left",capWdDiff);	
			  
				  //----DISPLAY current img  slide-------------
			  domSlideObj.style.display = "block"; 	
			   //----display current DOT
			  dots[slideNumber-1].className += " active";
			
  			  //---display slider numbertext
			  domNumObj[slideNumber-1].innerHTML=slideNumber+" / "+domNumObj.length;
		  
	  });// end  create a new <img> tag
	
	
	


};	//-------function imgWdHtSetCenter()----------


 //----This is how to find the text width in px using jquery----
//----------jquery way of finding text width
// To call this jquery func ,     $('.classname').textWidth();
//   font can be '15px arial'
$.fn.textWidth = function(text, font) {
    if (!$.fn.textWidth.fakeEl) $.fn.textWidth.fakeEl = $('<span>').hide().appendTo(document.body);
    $.fn.textWidth.fakeEl.text(text || this.val() || this.text()).css('font', font || this.css('font'));
    return $.fn.textWidth.fakeEl.width();
};
			 
				 