jQuery.noConflict();
(function( $ ) {
  $(function() {
      
    
var images = ["img/extrude.jpg", "img/roy.jpg", "img/domes.jpg", "spike copy", "" ] 
    
var length = images.length;

var slideshow = function(){
	if (index == length) {
		index = 0;
	}else{
		$("img").attr("src", images[index]);
		$("img").hide();
		$("img").slideDown(500);
		index++;
	}
}
window.setInterval(slideshow, 5000);

var index = 1;
$(".nextBtn").on("click", function(){
	if (index == length) {
		index = 0;
	}else{
		$("img").attr("src", images[index]);
		$("img").hide();
		$("img").show();
		$("img").animate(function(){
			width: "toggle"
		});
		index++;
	}
});
$(".prevBtn").on("click", function(){
	
	if (index <= -1) {
		index = 3;
	}else{
		$("img").attr("src", images[index]);
		$("img").hide();
		$("img").show();
		index--;
	}
});
      
    
  });
})(jQuery);