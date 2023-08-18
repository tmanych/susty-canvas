function paintObjects(){
    var text = bodyElement.getElementsByTagName("h1")[0].innerText
	var schriftgroesse = 600;
	context.font=schriftgroesse+"px serif";
	while(context.measureText(text).width > canvas.width) {
		schriftgroesse *= 0.9;
		context.font=schriftgroesse+"px serif";
	}
	var anzahl = 1;
	var schriftgroesse_klein = schriftgroesse;
	while(context.measureText(text).width > (canvas.width/10)) {
		schriftgroesse_klein *= 0.9;
		context.font=schriftgroesse_klein+"px serif";
		anzahl++;
	}
	schriftgroesse = Math.ceil(schriftgroesse);
	schriftgroesse_klein = Math.ceil(schriftgroesse_klein);
	var verkl = (100-schriftgroesse/schriftgroesse_klein)/100;
	var i = 0;
	var y = canvas.height;
	for(var i = anzahl; i > 0; i--) {
		context.fillStyle = randomRGB();
		context.font=schriftgroesse+"px serif";
		schriftgroesse *= verkl;
		schriftgroesse = Math.ceil(schriftgroesse);
	    if(colorSecondObjects && i%2===0) context.fillStyle = colorSecondObjects;
    	context.fillText(text, 0, y);
		y -= canvas.height/anzahl;
	}
}