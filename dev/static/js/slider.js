const swiper = new Swiper('.swiper-contnainer-calendar', {
    slidesPerView: 'auto',
    spaceBetween: 20,
    speed: 500,
    pagination: false,
    navigation: false,
    grabCursor: true,
});

const swiper2 = new Swiper('.map-popup__slider', {
    slidesPerView: 1,
    spaceBetween: 0,
    speed: 500,
    pagination: {
        el: '.swiper-pagination'
    },
    navigation: false,
    grabCursor: true,
});

const swiper3 = new Swiper('.map__nav', {
    slidesPerView: 'auto',
    spaceBetween: 32,
    speed: 500,
    grabCursor: true,
    slidesOffsetAfter: 20,
    slidesOffsetBefore: 20,
    
});

var slides = document.querySelectorAll('.map__nav .swiper-slide');
for (var i = 0; i < slides.length; i++) {
    slides[i].addEventListener('click', function() {
        // Remove is-active class from all slides
        for (var j = 0; j < slides.length; j++) {
          slides[j].classList.remove('is-active');
        }
        
        // Add is-active class to clicked slide
        this.classList.add('is-active');
        
        // Get index of clicked slide
        var clickedIndex = Array.prototype.indexOf.call(slides, this);
        
        // Slide to clicked slide
        swiper3.slideTo(clickedIndex);
      });
}

var thisSwiper = [];
$('.map__content-slider').each(function (i) {
    var this_ID = $(this).attr('id');

    thisSwiper[i] = new Swiper('#' + this_ID, {
        slidesPerView: 1,
        spaceBetween: 0,
        speed: 500,
        pagination: {
            el: '.swiper-pagination'
        },
        navigation: false,
        grabCursor: true,
        draggable: true,
    });

    // thisSwiper[i].on('slideChange', function() {
    //     console.log('slide ' + i + ' changed');
    // });
});
