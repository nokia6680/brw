const swiper = new Swiper('.swiper-contnainer-calendar', {
    // If we need pagination
    slidesPerView: 'auto',
    spaceBetween: 20,
    speed: 500,
    pagination: false,
    navigation: false,
    grabCursor: true,
});

const swiper2 = new Swiper('.map-popup__slider', {
    // If we need pagination
    slidesPerView: 1,
    spaceBetween: 0,
    speed: 500,
    pagination: {
        el:'.swiper-pagination'
    },
    navigation: false,
    grabCursor: true,
});

var thisSwiper = [];
$('.map__content-slider').each(function(i) {
    var this_ID = $(this).attr('id');

    thisSwiper[i] = new Swiper('#' + this_ID, {
        slidesPerView: 1,
        spaceBetween: 0,
        speed: 500,
        pagination: {
            el:'.swiper-pagination'
        },
        navigation: false,
        grabCursor: true,
        draggable: true,
    });

    // thisSwiper[i].on('slideChange', function() {
    //     console.log('slide ' + i + ' changed');
    // });
});
