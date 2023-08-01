function paintObjects(){
	var i = 0;
	var max = 2*canvas.width;
	if(2*canvas.height > max) max = 2*canvas.height;
	for (var width = max; width >= 0; width-=Math.floor(amountObjects*100)) {
		context.beginPath();
	    context.fillStyle = randomRGB();
	    if( (i++) % 2 === 0 ) {
			context.fillStyle = colorSecondObjects;
		}
	    context.rect(Math.floor((canvas.width-width)/2),Math.floor((canvas.height-width)/2),width,width); //
		context.fill();
	}
}
