// First we get the viewport height and we multiple it by 1% to get a value for a vh unit
let vh = window.innerHeight * 0.01;
// Then we set the value in the --vh custom property to the root of the document
document.documentElement.style.setProperty('--vh', `${vh}px`);

// We listen to the resize event
window.addEventListener('resize', () => {
    // We execute the same script as before
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
});

const sandwichToggle = function() {
    // Выбираем элементы, которые нам нужны. В примере мы ищем элементы с классом "sandwich"
    let sandwichElements = document.querySelectorAll('.header__toggle');
    // Проходим циклом по всем эдементам и на каждый элемент вешаем слушателя, который по клику будет переключать класс
    sandwichElements.forEach((item) => {
        item.addEventListener('click', showSandwichTarget);
    });

    function showSandwichTarget() {
        let navMenu = document.querySelector('.nav');
        let targetId = this.getAttribute('data-target-id'),
            targetClassToggle = this.getAttribute('data-target-class-toggle');
        this.classList.toggle('is-active');
        navMenu.classList.toggle('opened');

        if (targetId && targetClassToggle) {
            document.getElementById(targetId).classList.toggle(targetClassToggle);
        }
    }
};
sandwichToggle();

var cityChoose = document.querySelector('.map__city');
var cityPopup = document.querySelector('.popup-city');
var cityCloser = document.querySelector('.popup-city__closer');
var body = document.querySelector('.body');

if (cityChoose) {
    cityChoose.addEventListener('click', function() {
        cityPopup.classList.add('active');
        body.classList.add('no-scroll');
    });
};

if (cityCloser) {
    cityCloser.addEventListener('click', function() {
        cityPopup.classList.remove('active');
        body.classList.remove('no-scroll');
    });
};

var upperItem = document.getElementsByClassName('map__content-slide');
var elNodes = document.querySelectorAll('.map__content-slide');
var popupBody = document.querySelector('.popup-video');
var popupVideo = document.querySelector('.popup-video__player');
var popupCloser = document.querySelector('.popup-video__closer');
var videoContent = document.querySelector('.map-content__player');

for (var i = 0; i < upperItem.length; i++) {
    var elem = upperItem[i];

    elem.addEventListener("click", function() {
        var video = this.querySelector('.map__content-player');
        var videoSrc = video.innerHTML;

        popupBody.classList.add('active');
        popupVideo.innerHTML = videoSrc;
    });
};

var videoBtn = document.querySelector('.popup-video__play');
var videoCloser = document.querySelector('.popup-video__closer');
var videoWrap = document.querySelector('.popup-video__content');

if (videoBtn) {
    videoBtn.addEventListener('click', function() {
        videoBtn.classList.add('playState');
        body.classList.add('no-scroll');
        //videoPoster.classList.add('hidden');
        popupVideo.play();
        popupVideo.setAttribute("controls", "controls");
    });
};

if (videoCloser) {
    videoCloser.addEventListener('click', function() {
        popupBody.classList.remove('active');
        popupVideo.pause();
        popupVideo.load();
        popupVideo.currentTime = 0;
        body.classList.remove('no-scroll');
        popupVideo.removeAttribute("controls");
        videoBtn.classList.remove('playState');
        popupVideo.innerHTML = ' ';
    });
};

popupBody.addEventListener("click", function(event) {
    // If user clicks inside the element, do nothing
    if (event.target.closest(".popup-video__wrapper")) return;

    // If user clicks outside the element, hide it!
    popupBody.classList.remove('active');
    popupVideo.pause();
    popupVideo.load();
    popupVideo.currentTime = 0;
    body.classList.remove('no-scroll');
    popupVideo.removeAttribute("controls");
    videoBtn.classList.remove('playState');
    popupVideo.innerHTML = ' ';
});
