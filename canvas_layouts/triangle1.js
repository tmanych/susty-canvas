function paintObjects(){
	var anzahl = 200;
	for( var i = 0; i < Math.ceil(anzahl*amountObjects); i++) {
		context.beginPath();
		context.fillStyle=randomRGB();
	    if(colorSecondObjects && i%2===0) context.fillStyle = colorSecondObjects;
	    var x = Math.round( Math.random()*canvas.width );
	    var y = Math.round( Math.random()*canvas.height );
		context.translate(x,y);
		const p = new Path2D("M0 0 L 40 40 L 80 0 Z");
	    context.fill(p);
		context.setTransform(1, 0, 0, 1, 0, 0);
	}
}
