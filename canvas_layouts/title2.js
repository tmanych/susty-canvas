function paintObjects(){
    var text = bodyElement.getElementsByTagName("h1")[0].innerText
	var schriftgroesse = 600;
	context.font=schriftgroesse+"px Arial";
	while(context.measureText(text).width > canvas.width) {
		schriftgroesse -= 5;
		context.font=schriftgroesse+"px Arial";
	}
	var anzahl = 1;
	var schriftgroesse_klein = schriftgroesse;
	while(context.measureText(text).width > (canvas.width/10)) {
		schriftgroesse_klein -= 5;
		context.font=schriftgroesse_klein+"px Arial";
		anzahl++;
	}
	schriftgroesse = Math.ceil(schriftgroesse);
	schriftgroesse_klein = Math.ceil(schriftgroesse_klein);
	var verkl = (100-schriftgroesse/schriftgroesse_klein)/100;
	var i = 0;
	var y = 0;
	schriftgroesse=schriftgroesse_klein;
	for(var i = anzahl; i > 0; i--) {
		context.fillStyle = randomRGB();
		context.font=schriftgroesse+"px Arial";
		schriftgroesse /= verkl;
		schriftgroesse = Math.ceil(schriftgroesse);
	    if(colorSecondObjects && i%2===0) context.fillStyle = colorSecondObjects;
    	context.fillText(text, 0, y);
		y += canvas.height/anzahl;
	}
}