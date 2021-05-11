var cutImgBox = () => {
	let i = $(".cutImgBox img");

	i.width("100%");
	$(".cutImgBox").each(function(){
		let t = $(this);
		let i = t.find("img");

		t.css("overflow","hidden");
		if(i.length>0){
			let iw = i.width();
			let bh = t.innerHeight();
			let inw = i.get(0).naturalWidth;
			let inh = i.get(0).naturalHeight;
			let iwwh = (inw*(bh/inh)-iw)/2;
			let iwhw = (inh*(iw/inw)-bh)/2;

			if(inw>inh && iwhw<0 || inw<=inh && iwwh>=0){
				i.height("100%");
				i.width("auto");
				i.css({"margin-left":-iwwh,"max-width":"none"});
			}else if(inw<=inh && iwhw>=0 || inw>inh && iwwh<0){
				i.width("100%");
				i.height("auto");
				i.css({"margin-top":-iwhw,"max-height":"none"});
			}
		}
	});
	i.css("opacity",1);
}