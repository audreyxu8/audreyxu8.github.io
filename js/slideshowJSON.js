//define an array to hold the slideshow data 
var slideshow = [];
var datafile = "data/portfolio.json";
var curr, prev, next;

function preload(file) {
    //load json data file
    $.getJSON(file, function(data) { 
        //loop through data to get image paths       
        $.each(data.lemurs, function( i, obj ) {
            //preload images
            var img = new Image();
            img.src = obj.image;
            console.log(obj.image);
        }); 
    });
}

//preload JSON
 preload(datafile);


//ready function
$(function() { 
    curr=0;
    $.getJSON(datafile, function(data) { 
        //store json data in array
        slideshow = data.portfolio;
        //loop through array to get content
        $.each(slideshow, function( i, obj ) {
         $("#slides").append("<li id="+i+"><img  src="+obj.image+"><div class='text'><span class='title'>"+obj.title+"</span><span class='caption'>"+obj.caption+"</span></div></li>");
         $("#slides").find("li:eq("+i+")").css(
             {"z-index":slideshow.length-curr,
             "left":curr*1024+"px"}
         );
         //increment current value each loop
         curr++;
    });
    
    $("nav button").css({"z-index":slideshow.length});
    //reset current to 0
    curr = 0;
   
    //function to move slides back and forth
    function changeSlide(d){
        //slide to next image
        if (d==="n"){
            $("#slides").animate({
                left: "-=1024"},1000); 
            curr++;
        //slide to previous image
        } else if (d==="p") {
            $("#slides").animate({
                left: "+=1024"},1000); 
            curr--;  
        //slide to beginning    
        } else {
            $("#slides").animate({left: "0"},500);
            curr=0;
        }
    }
    
    //automatically advance slides every 3 seconds
    var auto = window.setInterval(function(){ 
        if (curr===slideshow.length-1){
            //reset if at the end
            changeSlide("b");
        } else {
            changeSlide("n");
        }
    }, 10000);

    $("#prev").click(function(){ 
        clearInterval(auto);
        //check the current index
        if (curr>0){   
            //slide in previous image
            changeSlide("p");
        }
    });
    
    $("#next").click(function(){
        clearInterval(auto);
        console.log("current:"+curr);

        if (curr<slideshow.length-1){
            //slide in next image
            changeSlide("n");
        } else {
            //reset to beginning
            changeSlide("b"); 
        } 
    });
});
});