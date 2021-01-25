// 540 - 80 - 50
// imgWidth - sliderWidth - initialMargin




function moveCarousel(){
    $(".carousel-control-prev").on("click", function(){
        $("#commentsCarousel").carousel('prev');
    });


    $(".carousel-control-next").on("click", function(){
        $("#commentsCarousel").carousel('next');      
    });

    $("#picturesCarousel").on('slide.bs.carousel', function () { 
        $("#commentsCarousel").carousel('next');
    });
}

moveCarousel();
