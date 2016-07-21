    (function() {

      // store the slider in a local variable
      var $window = $(window),
          flexslider = { vars:{} };

      // tiny helper function to add breakpoints
      function getGridSize() {
        return (window.innerWidth < 600) ? 2 :
               (window.innerWidth < 900) ? 3 : 4;
      }

      $(function() {
        SyntaxHighlighter.all();
      });

      $window.load(function() {
        $('.flexslider').flexslider({
          animation: "slide",
          animationSpeed: 400,
          animationLoop: false,
          itemWidth: 210,
          itemMargin: 5,
          minItems: getGridSize(), // use function to pull in initial value
          maxItems: getGridSize(), // use function to pull in initial value
          start: function(slider){
            $('body').removeClass('loading');
            flexslider = slider;
          }
        });
      });

      // check grid size on resize event
      $window.resize(function() {
        var gridSize = getGridSize();

        flexslider.vars.minItems = gridSize;
        flexslider.vars.maxItems = gridSize;
      });
    }());



console.log("Post flexi-page loaded");
alert("flexi picture carousel script loaded");
  $('.flexslider').flexslider({
	animation: "slide",
	controlNav: "thumbnails"
  });