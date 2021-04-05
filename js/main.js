$(window).load(function(){

	new WOW().init();
	layerFix();

	$('html,body').animate({scrollTop:$(".sct1").offset().top},400,"easeOutQuad");
	var ofstop1=$(".sct1").offset().top
	var ofstop2=$(".sct2").offset().top
	var ofstop3=$(".sct3").offset().top
	var ofstop4=$(".sct4").offset().top
	var ofstop5=$(".sct5").offset().top
	var ofstop6=$(".sct6").offset().top
	$(".btn1").click(function(){
		$("html,body").animate({"scrollTop":0},"easeOutQuad")
	})
	$(".btn2,.pr").click(function(){
		$("html,body").animate({"scrollTop":ofstop2},"easeOutQuad")
	})
	$(".btn3,.pa").click(function(){
		$("html,body").animate({"scrollTop":ofstop3},"easeOutQuad")
	})
	$(".btn4").click(function(){
		$("html,body").animate({"scrollTop":ofstop4},"easeOutQuad")
	})
	$(".btn5,.wd").click(function(){
		$("html,body").animate({"scrollTop":ofstop5},"easeOutQuad")
	})
	$(".btn6,.cm").click(function(){
		$("html,body").animate({"scrollTop":ofstop6},"easeOutQuad")
	})
	$(".help").click(function(){
		$(".btn_page_txt").stop().toggle(500)
		setTimeout(function() {
		  $(".btn_page_txt").stop().hide(500)
		}, 2000);
	})

	$(".sct1 .gnb li a").mouseenter(function(){
		$(this).stop().animate({"padding":"10px 10px"},300)
	})
	$(".sct1 .gnb li a").mouseleave(function(){
		$(this).stop().animate({"padding":"20px 10px"},300)
	})
	$(".sct1 .btn_down").click(function(){
		$("html body").animate({"scrollTop":1277},1200,"easeOutQuad")
	})
	var sct1Sl = new Swiper('.sct1 .swiper-container',{
		nextButton: '.sct1 .swiper-button-next',
		prevButton: '.sct1 .swiper-button-prev',
		speed:500,
		loop:true,
		autoplay: 3000,
		slidesPerView : 'auto',
		autoplayDisableOnInteraction:false
	});

	var animData = {
        container: document.getElementsByClassName(".sct1 .txt"),
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: 'https://www.micelistudios.com/balance.json'
    };

	$(".sct2 .header h2").click(function(){
		$("html body").animate({"scrollTop":0},"easeOutQuad")
	})
	$(".sct2 .bubble").mouseenter(function(){
		$(this).css("display","none")
		$(".about1").delay(300).animate({"left":100,"top":256,"margin-left":0,"opacity":1},400)
		$(".about2").delay(0).animate({"top":100,"opacity":1},400)
		$(".about3").delay(50).animate({"right":100,"margin-right":0,"opacity":1},400,function(){
			$(".skill .graph>div").eq(0).animate({"background-color":"#222"})
			$(".skill .graph>div").delay(200).eq(1).animate({"background-color":"#222"})
			$(".skill .graph>div").delay(200).eq(2).animate({"background-color":"#222"})
			$(".skill .graph>div").delay(200).eq(3).animate({"background-color":"#222"})
			$(".skill .graph>div").delay(200).eq(4).animate({"background-color":"#222"})
			$(".skill2 .graph>div").eq(0).animate({"background-color":"#222"})
			$(".skill2 .graph>div").delay(200).eq(1).animate({"background-color":"#222"})
			$(".skill2 .graph>div").delay(200).eq(2).animate({"background-color":"#222"})
			$(".skill2 .graph>div").delay(200).eq(3).animate({"background-color":"#222"})
			$(".skill3 .graph>div").eq(0).animate({"background-color":"#222"})
			$(".skill3 .graph>div").delay(200).eq(1).animate({"background-color":"#222"})
			$(".skill3 .graph>div").delay(200).eq(2).animate({"background-color":"#222"})
			$(".skill3 .graph>div").delay(200).eq(3).animate({"background-color":"#222"})
			$(".skill3 .graph>div").delay(200).eq(4).animate({"background-color":"#222"})
			$(".skill4 .graph>div").eq(0).animate({"background-color":"#222"})
			$(".skill4 .graph>div").delay(200).eq(1).animate({"background-color":"#222"})
			$(".skill4 .graph>div").delay(200).eq(2).animate({"background-color":"#222"})
			$(".skill4 .graph>div").delay(200).eq(3).animate({"background-color":"#222"})
			$(".skill5 .graph>div").eq(0).animate({"background-color":"#222"})
			$(".skill5 .graph>div").delay(200).eq(1).animate({"background-color":"#222"})
			$(".skill5 .graph>div").delay(200).eq(2).animate({"background-color":"#222"})
			$(".skill5 .graph>div").delay(200).eq(3).animate({"background-color":"#222"})
			$(".skill5 .graph>div").delay(200).eq(4).animate({"background-color":"#222"})
		})
		$(".about4").delay(150).animate({"bottom":0,"margin-right":0,"opacity":1},400)
	})
	$(".group1").colorbox({rel:'group1'})
	$(".sct3 .slideWrap").slick({
		slidesToShow:1,
		slidesToScroll:1,
		slide:"ul",
		swipe:false
	})
	$(".sct4 .slideWrap a").lightBox({
	overlayBgColor:"skyblue",
	overlayOpacity: 0.6,});

	$(".sct4 .slideWrap").slick({
		slidesToShow:1,
		slidesToScroll:1,
		slide:"ul",
		swipe:false
	})

	$('.sct5 .list_wrap .left .le li').click(function(qq){
		qq.preventDefault()
		var num1 = $(this).index()
		console.log(num1)
		$('.sct5 .right li').stop().animate({'width':'0px','height':'0px'},200).hide()
		$('.sct5 .right li').eq(num1).stop().animate({'width':'688px','height':'423px'},300).show()
	})
	$('.sct5 .list_wrap .left .ri li').click(function(ww){
		ww.preventDefault()
		var num1 = $(this).index()
		console.log(num1)
		$('.sct5 .right li').stop().animate({'width':'0px','height':'0px'},200).hide()
		$('.sct5 .right li').eq(num1+6).stop().animate({'width':'688px','height':'423px'},300).show()
	})
	$('.sct5 .list_wrap .left .bt li').click(function(ww){
		ww.preventDefault()
		var num1 = $(this).index()
		console.log(num1)
		$('.sct5 .right li').stop().animate({'width':'0px','height':'0px'},200).hide()
		$('.sct5 .right li').eq(num1+12).stop().animate({'width':'688px','height':'423px'},300).show()
	})

	$(".section").each(function () {
		// 개별적으로 Wheel 이벤트 적용
		$(this).children().on("mousewheel DOMMouseScroll", function (e) {
			e.preventDefault();
			var delta = 0;
			if (!event) event = window.event;
			if (event.wheelDelta) {
				delta = event.wheelDelta / 120;
				if (window.opera) delta = -delta;
			} else if (event.detail) delta = -event.detail / 3;
			var moveTop = null;
			// 마우스휠을 위에서 아래로
			if (delta < 0) {
				if ($(this).next() != undefined) {
					moveTop = $(this).next().offset().top;
				}
			// 마우스휠을 아래에서 위로
			} else {
				if ($(this).prev() != undefined && $(this).prev().offset() != undefined) {
					moveTop = $(this).prev().offset().top;
				}
			}
			// 화면 이동 0.8초(800)
			$("html,body").stop().animate({
				scrollTop: moveTop + 'px'
			}, {
				duration:800,easing:"easeOutQuad",complete:function () {
				}
			});
		});
	});

})

$(window).scroll(function(){
	//var s=$("html").scrollTop()
	var s=$(document).scrollTop()
	var ofstop1=$(".sct1").offset().top-200
	var ofstop2=$(".sct2").offset().top-200
	var ofstop3=$(".sct3").offset().top-200
	var ofstop4=$(".sct4").offset().top-200
	var ofstop5=$(".sct5").offset().top-200
	var ofstop6=$(".sct6").offset().top-200

	if(s>=80){
		$(".headerF").fadeOut(500);
		$(".sct2 .bubble").addClass("on");
	}else{
		$(".headerF").fadeIn(500);
	}
	
	if(s>=969){
		$(".sct2 .header").addClass("on");
	}else{
		$(".sct2 .header").removeClass("on");
	}

	if(s<=ofstop2){
		$(".btn_page li").removeClass("on")
		$(".btn_page li").eq(0).addClass("on")
	}else if(s<=ofstop3){
		$(".btn_page li").removeClass("on")
		$(".btn_page li").eq(1).addClass("on")
	}else if(s<=ofstop4){
		$(".btn_page li").removeClass("on")
		$(".btn_page li").eq(2).addClass("on")
	}else if(s<=ofstop5){
		$(".btn_page li").removeClass("on")
		$(".btn_page li").eq(3).addClass("on")
	}else if(s<=ofstop6){
		$(".btn_page li").removeClass("on")
		$(".btn_page li").eq(4).addClass("on")
	}else{
		$(".btn_page li").removeClass("on")
		$(".btn_page li").eq(5).addClass("on")
	}

	if(s>=4327){
		$(".sct5 .list_wrap .left h4").delay(3000).fadeIn(1000).fadeOut(500).fadeIn(500)
	}else{
	}
})






/*function cnfm(){
	var cnfm = confirm("ㅇㅇㅇㅇ")

	if (cnfm){
		alert("확인")
	}else{
		alert("취소")
	}

}*/
	

function tlfgod(){

	var prpt = prompt("ㄱㄱㄱ")

	if (prpt){
		console.log(prpt+"확인")
	}else{
		console.log(prpt+"취소")
	}

}