function paintObjects(){
    var text = bodyElement.getElementsByTagName("h1")[0].innerText
	var schriftgroesse = 40;
	context.font=schriftgroesse+"px serif";
	var w = 0;
	var h = 0;
	var goOn = true;
    //drehen um die Mitte
    context.translate(canvas.width/2, canvas.height/2);
		context.rotate(2*Math.PI);
    context.translate(-canvas.width/2, -canvas.height/2);
	while(goOn) {
		for(var i = 0; i < text.length; i++) {
			context.beginPath();
			context.fillStyle = randomRGB();
		    if(colorSecondObjects && i%2===0) context.fillStyle = colorSecondObjects;
	    	context.fillText(text[i], h, w);
			w += context.measureText(text[i]).width;
			if(w >= canvas.height) {
				w = 0;
				h+=schriftgroesse;
				if(h > canvas.width){ goOn=false; continue;}
			}
		}
	}
    context.translate(canvas.width/2, canvas.height/2);
	context.setTransform(1, 0, 0, 1, 0, 0);
}