$(document).ready(function(){
    $('.slider').slick({
        arrows:true,
        dots:true,
        slidesToShow:3,
        slidesToScroll:3,
        autoplay:true,
        speed:1000,
        autoplaySpeed:800,
        infinite:true,                   
        responsive: [
            {
              breakpoint: 1200,
              settings: {
                  dots:false,
                  slidesToShow:1,
					        slidesToScroll:1                           
              }
            },
            
        ],
    });   
});

