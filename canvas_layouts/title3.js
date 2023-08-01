function paintObjects(){
    var text = bodyElement.getElementsByTagName("h1")[0].innerText
	var schriftgroesse = 40;
	context.font=schriftgroesse+"px Arial";
	var w = 0;
	var h = 0;
	var goOn = true;
	while(goOn) {
		for(var i = 0; i < text.length; i++) {
			context.beginPath();
			context.fillStyle = randomRGB();
		    if(colorSecondObjects && i%2===0) context.fillStyle = colorSecondObjects;
	    	context.fillText(text[i], h, w);
			w += context.measureText(text[i]).width;
			if(w >= canvas.height) {
				w = 0;
				h+=schriftgroesse-Math.floor(amountObjects*35);
				if(h > canvas.width){ goOn=false; continue;}
			}
		}
	}
}