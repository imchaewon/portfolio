$(window).load(function(){
	
	$("#preload").hide();

	new WOW().init();
	//layerFix();
	cutImgBox();

	//$('html,body').animate({scrollTop:$(".sct1").offset().top},400,"easeOutQuad");

	for (let i=1;i<=6;i++){
		eval("var ofstop" + i + " = $('.sct" + i + "').offset().top");
	}

	$(".btn_page li").click(function(){
		let idx = $(this).index();

		$("html,body").animate({"scrollTop":eval("ofstop" + (idx + 1))},"easeOutQuad");
		$(".btn" + (idx + 1)).addClass("on").siblings().removeClass("on");
	});

	for (let i=0;i<=5;i++){
		$(".pg"+i).click(function(e){
			let j = parseInt(e.target.className.substr(2,3));
			$("html,body").animate({"scrollTop":eval("ofstop" + j)},"easeOutQuad");
			$(".btn" + j).addClass("on").siblings().removeClass("on");
		});
	}

	$(".help").click(function(){
		let t = $(this);
		t.stop().animate({"opacity":0},400);
		$(".btn_page_txt").stop().toggle(500);
		setTimeout(function() {
			t.stop().animate({"opacity":1},400);
			$(".btn_page_txt").stop().hide(500);
		}, 2000);
	});

	(function(){
		let sw = true;
		const sct1Sl = new Swiper('.sct1 .swiper-container',{
			nextButton: '.sct1 .swiper-button-next',
			prevButton: '.sct1 .swiper-button-prev',
			speed:500,
			loop:true,
			autoplay: 3000,
			effect: 'flip',
			slidesPerView : 'auto',
			autoplayDisableOnInteraction:true,
			onSlideChangeEnd: function(swiper){
				// if (sw){
				// 	sw = false;
				// }else{
				// 	console.log(111);
				// }
			}
		});
	})();

	$(".sct2 .bubble").mouseenter(function(){
		$(this).css("display","none");
		$(".about1").delay(300).animate({"left":100,"margin-left":0,"opacity":1},400);
		$(".about2").delay(0).animate({"top":100,"opacity":1},400);
		$(".about3").delay(50).animate({"right":100,"margin-right":0,"opacity":1},400,function(){
			for (let i=0;i<4;i++){
				$(".skill1 .graph>div").delay(200).eq(i).animate({"background-color":"#222"});
			}
			for (let i=0;i<5;i++){
				$(".skill2 .graph>div").delay(200).eq(i).animate({"background-color":"#222"});
			}
			for (let i=0;i<5;i++){
				$(".skill3 .graph>div").delay(200).eq(i).animate({"background-color":"#222"});
			}
			for (let i=0;i<5;i++){
				$(".skill4 .graph>div").delay(200).eq(i).animate({"background-color":"#222"});
			}
			for (let i=0;i<4;i++){
				$(".skill5 .graph>div").delay(200).eq(i).animate({"background-color":"#222"});
			}
		});
		$(".about4").delay(150).animate({"bottom":0,"margin-right":0,"opacity":1},400);
	});

	startLoadFile();

	(() => {
		let tmp = 18; //초기값
		$('.sct5 .conWrap .tit li').click(function(e){
			e.preventDefault();
			let idx1 = $(this).index();
			let idx2 = $(this).parent().index();
			let idx3 = idx1 + idx2 * 6;
			$('.sct5 .con>ul>li').eq(tmp).stop().css("z-index",2).animate({"opacity":0,"width":0,"height":0},1000);
			$('.sct5 .con>ul>li').eq(idx1 + idx2 * 6).stop().css("z-index",1).animate({"opacity":1,'width':'100%','height':'100%'},300).show();
			tmp = idx3;
		});
	})();
	
	(function(){
		var sw = 0;
		var t = null;
	
		$(".sct5 .con > ul > li").mouseenter(function(){
			t = $(this);
			sw = 1;
		});
		$(".sct5 .con > ul > li").mouseleave(function(){
			sw = 0;
			t.removeClass("hide");
		});
				
		$(".section").each(function(){
			// 개별적으로 Wheel 이벤트 적용
			$(this).children().on("mousewheel DOMMouseScroll", function(e) {
				if(sw == 1){
					t.addClass("hide");
					return;
				}
				e.preventDefault();
				let delta = 0;
				if (!event) event = window.event;
				if (event.wheelDelta) {
					delta = event.wheelDelta / 120;
					if (window.opera){
						delta = -delta;
					}
				} else if (event.detail){
					delta = -event.detail / 3;
				}
				let moveTop = null;
				if (delta < 0) { // 마우스휠을 위에서 아래로
					if ($(this).next() != undefined && $(this).next().offset() != undefined) {
						let i = parseInt(this.classList[0].substr(3,1)) + 1;
						moveTop = eval("$('.sct" + i + "')").offset().top;
						//moveTop = $(this).next().offset().top;
						$(".page .btn_page li").removeClass("on").eq($(this).next().index()).addClass("on");
					}else{
						return;
					}
				} else { // 마우스휠을 아래에서 위로
					if ($(this).prev() != undefined && $(this).prev().offset() != undefined) {
						let i = parseInt(this.classList[0].substr(3,1)) - 1;
						moveTop = eval("$('.sct" + i + "')").offset().top;
						//moveTop = $(this).prev().offset().top;
						$(".page .btn_page li").removeClass("on").eq($(this).prev().index()).addClass("on");
					}else{
						return;
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
	})();
});

(function(){
let sw_pen = true;
$(window).scroll(function(){
	
	let s=$(document).scrollTop();
	for (let i=1;i<=6;i++){
		eval("var ofstop" + i + " = $('.sct" + i + "').offset().top");
	}

//	console.log(ofstop1);//0
//	console.log(ofstop2);//754
//	console.log(ofstop3);//1604
//	console.log(ofstop4);//2455
//	console.log(ofstop5);//3305
//	console.log(ofstop6);//4156
	if(s<ofstop2 - 300){
		$(".sct1").addClass("on").siblings().removeClass("on");
		$(".btn_page li:eq(0)").addClass("on").siblings().removeClass("on");
	}else if(s<ofstop3 - 300){
		$(".sct2").addClass("on").siblings().removeClass("on");
		$(".btn_page li:eq(1)").addClass("on").siblings().removeClass("on");
	}else if(s<ofstop4 - 300){
		$(".sct3").addClass("on").siblings().removeClass("on");
		$(".btn_page li:eq(2)").addClass("on").siblings().removeClass("on");
	}else if(s<ofstop5 - 300){
		$(".sct4").addClass("on").siblings().removeClass("on");
		$(".btn_page li:eq(3)").addClass("on").siblings().removeClass("on");
	}else if(s<ofstop6 - 300){
		$(".sct5").addClass("on").siblings().removeClass("on");
		$(".btn_page li:eq(4)").addClass("on").siblings().removeClass("on");
		//$(".sct5 h4").delay(3000).fadeIn(1000).fadeOut(500).fadeIn(500);
	}else{
		$(".sct6").addClass("on").siblings().removeClass("on");
		$(".btn_page li:eq(5)").addClass("on").siblings().removeClass("on");
		if(sw_pen){
			sw_pen = false;
			$(".sct6 .email .pen").delay(500).fadeIn(500).animate({"bottom":".5rem","right":"-13rem"}).delay(1000).fadeOut();
		}
	}

	if(s>=80){
		$(".headerF").fadeOut(500);
		$(".sct2 .bubble").addClass("on");
	}else
		$(".headerF").fadeIn(500);
	
	if(s>=ofstop2)
		$(".sct2 .header").addClass("on");
	else
		$(".sct2 .header").removeClass("on");
});
})();

$(document).ajaxStop(function() {
	
	const sl3 = new Swiper('.sct3 .swiper-container',{
		pagination: ".sct3 .swiper-pagination",
		nextButton: '.sct3 .swiper-next',
		prevButton: '.sct3 .swiper-prev',
		speed:500,
		loop:true,
		paginationClickable:true,
		autoplayDisableOnInteraction:false,
		autoplay:2500,
		slidesPerView : 'auto'
	});
	
	$(".sct3 li a").each(function(){
		$(this).colorbox();
	});

	const sl4 = new Swiper('.sct4 .swiper-container',{
		pagination: ".sct4 .swiper-pagination",
		nextButton: '.sct4 .swiper-next',
		prevButton: '.sct4 .swiper-prev',
		speed:500,
		loop:true,
		paginationClickable:true,
		paginationType : 'fraction',
		autoplayDisableOnInteraction:false,
		autoplay:2500,
		slidesPerView : 'auto'
	});
	
	$(".sct4 li a").lightBox({
		overlayBgColor:"skyblue",
		overlayOpacity: 0.6
	});
	
	cutImgBox();
	
});

document.addEventListener("DOMContentLoaded", function() {
	var lazyloadImages;		

	if ("IntersectionObserver" in window) {
		lazyloadImages = document.querySelectorAll(".lazy");
		var imageObserver = new IntersectionObserver(function(entries, observer) {
			entries.forEach(function(entry) {
				if (entry.isIntersecting) {
					var image = entry.target;
					image.src = image.dataset.src;
					image.classList.remove("lazy");
					imageObserver.unobserve(image);
					
					/*setTimeout(function(){
						cutImgBox();
					},100)*/
				}
			});
		});

		lazyloadImages.forEach(function(image) {
			imageObserver.observe(image);
		});
	} else {
		var lazyloadThrottleTimeout;
		lazyloadImages = document.querySelectorAll(".lazy");
		
		function lazyload () {
			if(lazyloadThrottleTimeout) {
				clearTimeout(lazyloadThrottleTimeout);
			}		

			lazyloadThrottleTimeout = setTimeout(function() {
				var scrollTop = window.pageYOffset;
				lazyloadImages.forEach(function(img) {
						if(img.offsetTop < (window.innerHeight + scrollTop)) {
							img.src = img.dataset.src;
							img.classList.remove('lazy');
						}
				});
				if(lazyloadImages.length == 0) {
					document.removeEventListener("scroll", lazyload);
					window.removeEventListener("resize", lazyload);
					window.removeEventListener("orientationChange", lazyload);
				}
			}, 20);
		}
		document.addEventListener("scroll", lazyload);
		window.addEventListener("resize", lazyload);
		window.addEventListener("orientationChange", lazyload);
	}
});


function startLoadFile(){
	$.ajax({
		url: 'js/images.json',
		type: 'GET',
		dataType : 'json',
		success : function(data){
			createImages_ps(data);
		},
		error : function(a, b, c) {
			console.log(a, b, c);
		}
	});
	$.ajax({
		url: 'js/images.json',
		type: 'GET',
		dataType : 'json',
		success : function(data){
			createImages_ai(data);
		},
		error : function(a, b, c) {
			console.log(a, b, c);
		}
	});
}

//JSON 포멧 데이터 처리
function createImages_ps(objImageInfo) {
	var images = objImageInfo.imgs_ps;
	var str = "";
	var m = parseInt(images.length / 15);
	var n = parseInt(images.length % 15);
	$out:for (var i = 0; i <= m; i++) {
		if(n == 0 && i == m){
			break;
		}
		str += '<ul class="swiper-slide">';
		for(var j=1;j<=15;j++){ //15개씩 자르기
		
			// N번째 이미지 정보를 구하기
			var image = images[i * 15 + j - 1];
			
			//객체가 없을시 탈출
			if(image==null || image==undefined || image==""){
				break $out;
			}
			
			// N번째 이미지 패널을 생성
			str += '<li><div class="con cutImgBox">';
			str += '	<a href="' + image.url + '"><img src="' + image.url + '"><h3>' + image.title + '</h3></a>';
			str += '</div></li>';
			
		}
		str += '</ul>';
	}
	// 이미지 컨테이너에 생성한 이미지 패널들을 추가하기
	var imgCon_ps = $(".sct3 .swiper-wrapper");
	imgCon_ps.append(str);
}

function createImages_ai(objImageInfo) {
	var images = objImageInfo.imgs_ai;
	var str = "";
	var m = parseInt(images.length / 15);
	var n = parseInt(images.length % 15);
	$out:for (var i = 0; i <= m; i++) {
		if(n == 0 && i == m){
			break;
		}
		str += '<ul class="swiper-slide">';
		for(var j=1;j<=15;j++){ //15개씩 자르기
		
			// N번째 이미지 정보를 구하기
			var image = images[i * 15 + j - 1];
			
			//객체가 없을시 탈출
			if(image==null || image==undefined || image==""){
				break $out;
			}
			
			// N번째 이미지 패널을 생성
			str += '<li><div class="con cutImgBox">';
			str += '	<a href="' + image.url + '"><img src="' + image.url + '"><h3>' + image.title + '</h3></a>';
			str += '</div></li>';
			
		}
		str += '</ul>';
	}
	// 이미지 컨테이너에 생성한 이미지 패널들을 추가하기
	var imgCon = $(".sct4 .swiper-wrapper");
	imgCon.append(str);
}








