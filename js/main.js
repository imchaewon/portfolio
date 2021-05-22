$(window).load(function(){

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
		$(".p"+i).click(function(e){
			let j = parseInt(e.target.className.substr(1,1)) + 1;
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

	const sct1Sl = new Swiper('.sct1 .swiper-container',{
		nextButton: '.sct1 .swiper-button-next',
		prevButton: '.sct1 .swiper-button-prev',
		speed:500,
		loop:true,
		autoplay: 3000,
		slidesPerView : 'auto',
		autoplayDisableOnInteraction:false
	});

	$(".sct2 .bubble").mouseenter(function(){
		$(this).css("display","none");
		$(".about1").delay(300).animate({"left":100,"margin-left":0,"opacity":1},400);
		$(".about2").delay(0).animate({"top":100,"opacity":1},400);
		$(".about3").delay(50).animate({"right":100,"margin-right":0,"opacity":1},400,function(){
			for (let i=1;i<=5;i++){
				$(".skill" + i + " .graph>div").eq(0).animate({"background-color":"#222"});
			}
			for (let i=1;i<=4;i++){
				$(".skill1 .graph>div").delay(200).eq(i).animate({"background-color":"#222"});
			}
			for (let i=1;i<=3;i++){
				$(".skill2 .graph>div").delay(200).eq(i).animate({"background-color":"#222"});
			}
			for (let i=1;i<=4;i++){
				$(".skill3 .graph>div").delay(200).eq(i).animate({"background-color":"#222"});
			}
			for (let i=1;i<=4;i++){
				$(".skill4 .graph>div").delay(200).eq(i).animate({"background-color":"#222"});
			}
			for (let i=1;i<=4;i++){
				$(".skill5 .graph>div").delay(200).eq(i).animate({"background-color":"#222"});
			}
		});
		$(".about4").delay(150).animate({"bottom":0,"margin-right":0,"opacity":1},400);
	});

	startLoadFile();
	
	$(".sct3 li a").each(function(){
		$(this).colorbox();
	});
	
	
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

	$(".sct4 li a").lightBox({
		overlayBgColor:"skyblue",
		overlayOpacity: 0.6
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

	$(".section").each(function(){
		// 개별적으로 Wheel 이벤트 적용
		$(this).children().on("mousewheel DOMMouseScroll", function(e) {
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
});

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
		$(".btn_page li:eq(0)").addClass("on").siblings().removeClass("on");
	}else if(s<ofstop3 - 300){
		$(".btn_page li:eq(1)").addClass("on").siblings().removeClass("on");
	}else if(s<ofstop4 - 300){
		$(".btn_page li:eq(2)").addClass("on").siblings().removeClass("on");
	}else if(s<ofstop5 - 300){
		$(".btn_page li:eq(3)").addClass("on").siblings().removeClass("on");
	}else if(s<ofstop6 - 300){
		$(".btn_page li:eq(4)").addClass("on").siblings().removeClass("on");
		$(".sct5 h4").delay(3000).fadeIn(1000).fadeOut(500).fadeIn(500);
	}else{
		$(".btn_page li:eq(5)").addClass("on").siblings().removeClass("on");
		$(".sct6 .email span").delay(500).fadeIn(500).animate({"bottom":".5rem","right":"-13rem"}).delay(1000).fadeOut();
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


function startLoadFile(){
	$.ajax({
		url: 'js/images.json',
		type: 'GET',
		dataType : 'json',
		success : function(data){
			createImages(data);
		},
		error : function(a, b, c) {
			console.log(a, b, c);
		}
	});
}

//JSON 포멧 데이터 처리
function createImages(objImageInfo) {
	var images = objImageInfo.images;
	var str = "";
	for (var i = 1; i <= parseInt(images.length / 15); i++) {
		
		str += '<ul class="swiper-slide">';
		for(var j=1;j<=15;j++){ //15개씩 자르기
		
			// N번째 이미지 정보를 구하기
			var image = images[i*j];
			
			// N번째 이미지 패널을 생성
			str += '<li><div class="con cutImgBox">';
			str += '	<a href="' + image.url + '"><img src="' + image.url + '"><h3>' + image.title + '</h3></a>';
			str += '</div></li>';
			
		}
		str += '</ul>';
	}
	// 이미지 컨테이너에 생성한 이미지 패널들을 추가하기
	var $imageContainer = $(".sct3 .swiper-wrapper");
	$imageContainer.append(str);
}











