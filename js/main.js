
$(function(){
	// 페이지 이동 관련
	var scrollT=0;
	var pageN=0;
	var targetY=0;
	var transition=false;
	var winHalf;
	var categoryFlag=false;

	$(".floating_menu li").eq(pageN).addClass("active");
	$("#header .menu li").eq(pageN).addClass("active");
	$("#start .controller li").eq(pageN).addClass("active");

	$(window).scroll(function(){
		scrollT=$(window).scrollTop();

		if(scrollT <= $("#page1").offset().top-winHalf){
			pageN=0;
		}
		else if(scrollT <= $("#page2").offset().top-winHalf){
			pageN=1;
		}
		else if(scrollT <= $("#page3").offset().top-winHalf){
			pageN=2;
		}
		else if(scrollT <= $("#page4").offset().top-winHalf){
			pageN=3;
		}
		else{
			pageN=4;
		}
		//console.log("pageN : "+pageN);


		$(".floating_menu li").removeClass("active");
		$(".floating_menu li").eq(pageN).addClass("active");
		$("#header .menu li").removeClass("active");
		$("#header .menu li").eq(pageN).addClass("active");
		$("#start .controller li").removeClass("active");
		$("#start .controller li").eq(pageN).addClass("active");

		if(pageN == 1 || pageN == 3){
			$("#start .controller").addClass("dark");
			$("#header .menu").addClass("dark");
			$(".fix_logo").addClass("dark");
			$(".fix_tab").addClass("dark");
			$(".fix_copy").addClass("dark");
			$(".fix_contact a").addClass("dark");
			
		}
		else{
			$("#start .controller").removeClass("dark");
			$("#header .menu").removeClass("dark");
			$(".fix_logo").removeClass("dark");
			$(".fix_tab").removeClass("dark");
			$(".fix_copy").removeClass("dark");
			$(".fix_contact a").removeClass("dark");
		}

		//#page2에 컨트롤러와 컨택트 제거
		if(pageN == 2){
			$("#start .controller").css({"display":"none"});
			$(".fix_contact").addClass("unvisible");
		}
		else{
			$("#start .controller").css({"display":"block"});
			$(".fix_contact").removeClass("unvisible");
		}





		if(categoryFlag){
			return;
		}
		else{
			if(pageN == 0){
				$("#start").addClass("active");
			}
			else{
				$("#page"+pageN).addClass("active");

				if(pageN == 4){
					categoryFlag=true;
				}
			}
		}
	});

	//2) 화면 크기 조정 관련 
	$(window).resize(function(){
		winHalf=$(window).height()/2;
		$(window).trigger("scroll");
	});
	$(window).trigger("resize");

	$("#header .menu li, #start .controller li").click(function(e){
		e.preventDefault();
		pageN=$(this).index();

		if(pageN == 0){
			targetY=0;
		}
		else{
			targetY=$("#page"+pageN).offset().top;
		}

		$("html").animate({"scrollTop":targetY}, 300);
	});

	//탭 이동 관련
	$(".floating_menu li").click(function(e){
		e.preventDefault();
		pageN=$(this).index();

		if(pageN == 0){
			targetY=0;
		}
		else{
			targetY=$("#page"+pageN).offset().top;
		}

		transition=true;
		$("body").removeClass("fixed");
		$(".fix_tab").removeClass("active");
		$(".floating_menu").removeClass("active");
	});
	$(".floating_menu").on("transitionend", function(){
		if($(this).hasClass("active") == false && transition){
			transition=false;
			$("html").animate({"scrollTop":targetY}, 300);
		}
	});

	$(".fix_tab").click(function(e){
		e.preventDefault();
		//$(this).addClass("active");
		//$(".floating_menu").addClass("active");

		$(this).toggleClass("active");
		$(".floating_menu").toggleClass("active");
	});

	//포트폴리오 리스트
	var portfolioN=0;

	$(".project:first").addClass("active");

	$(".project .title").click(function(e){
		e.preventDefault();
		var portfolio=$(this).parents(".project");
		// console.log(portfolioN, portfolio.index());

		if(portfolioN != portfolio.index()){
			portfolioN=portfolio.index();
			$(".project").removeClass("active");
			portfolio.addClass("active");

			var portfolioY=$(this).offset().top-60;
			$("html").animate({scrollTop:portfolioY}, 800);
		}
	});

	//비디오
	var videoUrl=["video1", "video2", "video3"];
	var videoTotal=videoUrl.length-1;
	var videoN=0;
	var videoPath="";
	var video=document.getElementById("my_video");
	video.muted=true;
	video.play();

	function videoDimmed(){
		$(".media video").hide().css({opacity:0});

		setTimeout(function(){
			$(".media video").show().animate({opacity:1}, 300);
		}, 500);
	}

	videoDimmed();

	video.addEventListener("ended", function(){
		if(videoN < videoTotal){
			videoN+=1;
		}
		else{
			videoN=0;
		}

		video.pause();
		videoPath="video/"+videoUrl[videoN]+".mp4";
		$("#my_video").attr({src:videoPath});
		video.play();
		videoDimmed();
	});
	$(".arrow .left").click(function(e){
		e.preventDefault();

		if(videoN > 0){
			videoN-=1;
		}
		else{
			videoN=videoTotal;
		}

		video.pause();
		videoPath="video/"+videoUrl[videoN]+".mp4";
		$("#my_video").attr({src:videoPath});
		videoDimmed();
		video.play();
	});
	$(".arrow .right").click(function(e){
		e.preventDefault();

		if(videoN < videoTotal){
			videoN+=1;
		}
		else{
			videoN=0;
		}

		video.pause();
		videoPath="video/"+videoUrl[videoN]+".mp4";
		$("#my_video").attr({src:videoPath});
		videoDimmed();
		video.play();
	});

	function mobileLink(){
		if(isMobile){
			$("a.project1").attr({href:"project1/mobile/index.html"});
		}
		else{
			$("a.project1").attr({href:"project1/pc/index.html"});
		}
		$("a.project2").attr({href:"project2/index.html"});
	}

	mobileLink();
});