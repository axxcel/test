const swiper = document.querySelector('swiper-container')
Object.assign(swiper, {
    slidesPerView: 1.2,
    //pagination: {
    //    clickable: true,
    //},
    breakpoints: {
        636:{
            slidesPerView: 2,
        },
        992: {
            slidesPerView: 3,
        },
        1057: {
            slidesPerView: 4,
        },
    }
});
swiper.initialize();