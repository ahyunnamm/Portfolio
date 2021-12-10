$(function(){
   // 1) 페이지 이동 관련
   var t=0; 
   var n=0; 
   var w; 
   var winHalf;
   var topPos=0;
   var categoryFlag=false;

   $(window).scroll(function(){
      t=$(window).scrollTop();

      if(t < $("#page1").offset().top-winHalf){
         n=0;
      }
      else if(t < $("#page2").offset().top-winHalf){
            n=1;
      }
      else if(t < $("#page3").offset().top-winHalf){
         n=2;
      }
      else if(t < $("#page4").offset().top-winHalf){
         n=3;
      }
      else if(t < $("#page5").offset().top-winHalf){
         n=4;
      }
      else{
         n=5;
      }

      // console.log("n : "+n);

		if(t > 100){
			$(".up").addClass("active");
			$(".menu_zone").addClass("active");
		}
        else{
			$(".up").removeClass("active");
			$(".menu_zone").removeClass("active");
        }

	  $("#gnb li a").removeClass("on");
      $("#gnb li").eq(n).find("a").addClass("on");

	    if(categoryFlag){
         	return;
		}
		else{
			if(n == 0){
				$("#header").addClass("active");
			}
			else{
				$("#page"+n).addClass("active");

				if(n == 5){
					categoryFlag=true;
				}
			}
		}
   });

	 // 2) 탭 이동 관련
   $(".tab").click(function(e){
      e.preventDefault();
      $("body").toggleClass("static");
      $(".mobile").toggleClass("active");
      $(".tab").toggleClass("active");
      $(".dim").toggleClass("active");
   });
   $(".dim").click(function(){
      $("body").removeClass("static");
      $(".mobile").removeClass("active");
      $(".tab").removeClass("active");
      $(".dim").removeClass("active");
   });

	// 3) 메뉴 클릭 이동 관련
   $("#gnb li").click(function(e){
      e.preventDefault();
      topPos=$(this).find("a").attr("href");
	  console.log(topPos);
      topPos=$(topPos).offset().top;
      $("html").animate({scrollTop:topPos}, 400);
   });
      $("#m_gnb li").click(function(e){
      e.preventDefault();
      $(".dim").trigger("click");

      topPos=$(this).find("a").attr("href");
      topPos=$(topPos).offset().top;
      $("html").delay(400).animate({scrollTop:topPos}, 400);
   });

      // 4) 상단 이동 관련
   $(".up").click(function(e){
      e.preventDefault();
      $("html").animate({scrollTop:0}, 400);
   });

   // 5) 화면 크기 조정 관련
   $(window).resize(function(){
      w=window.innerWidth;
      winHalf=$(window).height()/2;

	  $(window).trigger("scroll")
   });
   $(window).trigger("resize");

   // 6) AOS 효과
   	AOS.init({
		easing:"ease-in-out-sine", 
		duration:600, 
		once: "true" 
	});
});