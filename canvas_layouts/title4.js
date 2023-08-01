function paintObjects(){
	var breite = 50;
	var i = 0;
	var x = 0;
	context.clearRect(0,0,canvas.width,canvas.height);
	context.beginPath();
	for(var i = breite; i > 0; i--) {
		context.fillStyle = randomRGB();
	    if(i%2===0) {
			context.fillRect(x,0,breite,canvas.height);
		}
		x += breite;
	}
    var text = bodyElement.getElementsByTagName("h1")[0].innerText
	var schriftgroesse = canvas.height;
	context.font=schriftgroesse+"px Arial";
	while(context.measureText(text).width > canvas.width) {
		schriftgroesse -= 5;
		context.font=schriftgroesse+"px Arial";
	}
	context.fillStyle = randomRGB();
	context.globalCompositeOperation='xor';//xor //lighter
	context.fillText(text, 0, canvas.height);
}