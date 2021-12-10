$(function(){
	$("nav > ul > li").hover(
		function(){
			$(".menu").addClass("active");
		},
		function(){
			$(".menu").removeClass("active");
		}
	);

	  var swiper = new Swiper(".slider .mySwiper", {
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
		},
	});
});