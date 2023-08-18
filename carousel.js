
// $('.brand').owlCarousel({
    // loop:true,
    // margin:10,
    // nav:true,
    // responsive:{
        // 0:{
            // items:1
        // },
        // 600:{
            // items:3
        // },
        // 1000:{
            // items:1.5
        // }
    // }
// })


// $('.brand').owlCarousel({
    // center: true,
    // items:2,
    // loop:true,
    // margin:10,
    // responsive:{
        // 1000:{
            // items:2
        // }
    // }
// });
// $('.brand').owlCarousel({
    // center: true,
    // items:2,
    // loop:false,
    // margin:10,
    // responsive:{
        // 1000:{
            // items:2
        // }
    // }
// });


    // $('.owl-carousel').owlCarousel({
        // items:4,
        // loop:false,
        // center:true,
        // margin:10,
        // URLhashListener:true,
        // autoplayHoverPause:true,
        // startPosition: 'URLHash'
    // });



// $('.owl-carousel').owlCarousel({
    // stagePadding: 150,
    // loop:true,
    // margin:10,
    // nav:true,
    // responsive:{
        // 0:{
            // items:1
        // },
        // 600:{
            // items:3
        // },
        // 1000:{
            // items:1
        // }
    // }
// })



// $('.owl-carousel').owlCarousel({
    // items:2,
    // loop:true,
    // margin:10,
    // merge:true,
    // responsive:{
        // 678:{
            // mergeFit:true
        // },
        // 1000:{
            // mergeFit:false
        // }
    // }
// });


// $('.brand').owlCarousel({
    // animateOut: 'slideOutDown',
    // animateIn: 'flipInX',
    // items:1,
    // margin:30,
    // stagePadding:30,
    // smartSpeed:450
// });

var owl = $('.owl-carousel');
owl.owlCarousel({
    items:4.5,
    loop:true,
    margin:10,
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true
});
$('.play').on('click',function(){
    owl.trigger('play.owl.autoplay',[3000])
})
$('.stop').on('click',function(){
    owl.trigger('stop.owl.autoplay')
})
