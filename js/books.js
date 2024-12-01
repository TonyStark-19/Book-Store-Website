// swiper logic
var swiper = new Swiper(".mySwiper", {
    spaceBetween: 0,
    centeredSlides: true,
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
    },
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

var swiperContainer = document.querySelector(".mySwiper");

// on mouse enter this function stops the slider
swiperContainer.addEventListener("mouseenter", function () {
    swiper.autoplay.stop();
});

//on mouse leave this function starts the slider
swiperContainer.addEventListener("mouseleave", function () {
    swiper.autoplay.start();
});