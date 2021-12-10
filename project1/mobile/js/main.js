/*메인 슬라이더 */
$(function(){
    var mainSwiper=new Swiper(".mainSwiper", {
       speed: 1200,
       effect: "fade",
       fadeEffect: {
          crossFade: true,
       },
       autoplay: {
          delay: 5000,
       },
       pagination: {
          el: ".swiper-pagination",
       },
       on: { 
          init: function(){
             $(".main_slider .account .current").text(this.activeIndex+1);
             $(".main_slider .account .total").text(this.slides.length);
          },
          slideChange: function(){
             $(".main_slider .account .current").text(this.activeIndex+1);
             $(".main_slider .account .total").text(this.slides.length);
          },
       },
    });
 
 
    $(".prev").click(function(e){
       e.preventDefault();
       mainSwiper.slidePrev();
    });
    $(".next").click(function(e){
       e.preventDefault();
       mainSwiper.slideNext();
    });
    $(".play").click(function(e){
       e.preventDefault();
       mainSwiper.autoplay.start();
    });
    $("#pause_play").click(function(e){
       e.preventDefault();
       if($(this).hasClass("play")){
          $(this).removeAttr("class");
          $(this).addClass("pause");
          $(this).text("pause");
          mainSwiper.autoplay.start();
       }
       else{
          $(this).removeAttr("class");
          $(this).addClass("play");
          $(this).text("play");
          mainSwiper.autoplay.stop();
       }
    });

	var w;

	$("#header .top .utils li:nth-child(3)").click(function(e){
		e.preventDefault();
		$("body").addClass("fixed");
		$(".floating_menu").addClass("active");
		$(".dim").addClass("active");
	});
	$(".dim").click(function(e){
		e.preventDefault();
		$("body").removeClass("fixed");
		$(".floating_menu").removeClass("active");
		$(".dim").removeClass("active");
	});
	$(window).resize(function(){
		w=window.innerWidth;
		

		if(w> 600){
			if($("body").hasClass("fixed")){
			$("body").removeClass("fixed");
			$("#mobile").removeClass("active");
			$(".dim").removeClass("active");
			}	
		}
	});

/*floating_Menu */
	$(".floating_menu .gnb > ul > li").click(function(e){
		e.preventDefault();

		if($(this).hasClass("active") == false){
			$(".floating_menu .gnb > ul > li").removeClass("active");
			$(this).addClass("active");
			$(".floating_menu .gnb ul ul").slideUp(300);
			$(this).find("ul").slideDown(300);
		}
		else{
			$(this).removeClass("active");
			$(this).find("ul").slideUp(300);
		}
	})

/*new_in sub slider */

   	var sub_slider=new Swiper("#sub_slider .swiper-container", {
	    slidesPerView: 1.5,
      	spaceBetween: 12,
		pagination: {
			el: "#sub_slider .swiper-pagination",
			type: "progressbar"
        },
        navigation: {
			nextEl: "#sub_slider .swiper-button-next",
			prevEl: "#sub_slider .swiper-button-prev",
        },
		breakpoints: {
			640: {
				slidesPerView: 3.5,
				spaceBetween: 5
			}
      	},
		on: {
			init: function(){
				var subSliderLength=$("#sub_slider .swiper-slide").length;
				$("#sub_slider .tot").text("/ "+subSliderLength);
			},
			slideChange: function(){
				var currentSlider=sub_slider.activeIndex;
				currentSlider+=1;
				$("#sub_slider .num").text(currentSlider);
			}
      }
   });
 /*md_choice sub slider1 */
	var sub_slider=new Swiper("#sub_slider1 .swiper-container", {
	    slidesPerView: 1.5,
      	spaceBetween: 12,
		pagination: {
			el: "#sub_slider1 .swiper-pagination",
			type: "progressbar"
        },
        navigation: {
			nextEl: "#sub_slider1 .swiper-button-next",
			prevEl: "#sub_slider1 .swiper-button-prev",
        },
		breakpoints: {
			640: {
				slidesPerView: 3.5,
				spaceBetween: 5
			}
      	},
		on: {
			init: function(){
				var subSliderLength=$("#sub_slider1 .swiper-slide").length;
				$("#sub_slider1 .tot").text("/ "+subSliderLength);
			},
			slideChange: function(){
				var currentSlider=sub_slider.activeIndex;
				currentSlider+=1;
				$("#sub_slider1 .num").text(currentSlider);
			}
      }
   });

   /*issue sub slider1 */
	var sub_slider=new Swiper("#sub_slider2 .swiper-container", {
	    slidesPerView: 1.2,
      	spaceBetween: 12,
        
		breakpoints: {
			640: {
				slidesPerView: 3.5,
				spaceBetween: 5
			}
      	},
		on: {
			init: function(){
				var subSliderLength=$("#sub_slider2 .swiper-slide").length;
				$("#sub_slider2 .tot").text("/ "+subSliderLength);
			},
			slideChange: function(){
				var currentSlider=sub_slider.activeIndex;
				currentSlider+=1;
				$("#sub_slider2 .num").text(currentSlider);
			}
      }
   });

/* bottom */

	$("#bottom .item .heading").click(function(e){
		e.preventDefault();

		if($(this).hasClass("active") == false){
			$("#bottom .item .heading").removeClass("active");
			$(this).addClass("active");
			$("#bottom .item .contents").slideUp(300);
			$(this).next().slideDown(300);
		}
		else{
			$(this).removeClass("active");
			$(this).next().slideUp(300);
		}
	});
});
