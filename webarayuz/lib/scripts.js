$('.slider').owlCarousel({
    loop:true,
    margin:20,
    dots: true,
    responsive:{
        0:{
            items:1
        },
    577:{
            items:2
        },
        768:{
            items:3
        },
        1000:{
            items:4
        }
    }
});

$('.menu_button').on('click', function(){
    $('.menu').toggleClass('active');
})