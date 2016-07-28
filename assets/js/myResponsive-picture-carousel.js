



console.log("Post Slippery loaded");
//alert("Slippry slider LOADED");
			var demo1 = $("#demo1").slippry({
					 transition: 'fade',
					// useCSS: true,
					 speed: 1000,
					// pause: 3000,
					// auto: true,
					// preload: 'visible',
					slippryWrapper: '<div class="sy-box portfolio-slider" />', // wrapper to wrap everything, including pager

					 autoHover: false
				});
/*
				$('.stop').click(function () {
					demo1.stopAuto();
				});

				$('.start').click(function () {
					demo1.startAuto();
				});
				 */

				$('.prev').click(function () {
					demo1.goToPrevSlide();
					return false;
				});
				$('.next').click(function () {
					demo1.goToNextSlide();
					return false;
				});
/*				
				$('.reset').click(function () {
					demo1.destroySlider();
					return false;
				});
				$('.reload').click(function () {
					demo1.reloadSlider();
					return false;
				});
				$('.init').click(function () {
					demo1 = $("#demo1").slippry();
					return false;
				});
				
				 */
				 
$("img").each(function()
{
    var maxWidth = 787; // Max width for the image
    var maxHeight = 480;    // Max height for the image
    var ratio = 0;  // Used for aspect ratio
    var width = $(this).width();    // Current image width
    var height = $(this).height();  // Current image height

    // Check if the current width is larger than the max
    if(width > maxWidth)
    {
        ratio = maxWidth / width;   // get ratio for scaling image
        $(this).css("width", maxWidth); // Set new width
        $(this).css("height", height * ratio);  // Scale height based on ratio
        height = height * ratio;    // Reset height to match scaled image
        width = width * ratio;    // Reset width to match scaled image
    }
    // Check if current height is larger than max
    if(height > maxHeight)
    {
        ratio = maxHeight / height; // get ratio for scaling image
        $(this).css("height", maxHeight);   // Set new height
        $(this).css("width", width * ratio);    // Scale width based on ratio
        width = width * ratio;    // Reset width to match scaled image
        height = height * ratio;    // Reset height to match scaled image
    }
    var newwidth = $(this).width();
    var parentwidth=$(this).parent().width();
    var widthdiff=(parentwidth-newwidth)/2;
    $(this).css("margin-left",widthdiff);
});				 
				 