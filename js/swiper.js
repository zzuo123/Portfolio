import Swiper from 'https://unpkg.com/swiper/swiper-bundle.esm.browser.min.js'

var swiper = new Swiper('.swiper-container', {
	slidesPerView: 1,
	loop: true,
	simulateTouch: true,
	keyboard: {
		enabled: true,
	},
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
});