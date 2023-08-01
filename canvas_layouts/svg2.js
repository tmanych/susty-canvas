function paintObjects(){
	var anzahl = 200;
	for( var i = 0; i < Math.ceil(anzahl*amountObjects); i++) {
		context.beginPath();
		context.fillStyle=randomRGB();
	    if(colorSecondObjects && i%2===0) context.fillStyle = colorSecondObjects;
		context.strokeStyle="black";
	    var x = Math.round( Math.random()*canvas.width );
	    var y = Math.round( Math.random()*canvas.height );
		context.scale(amountObjects,amountObjects);
		context.translate(x,y);
		const p = new Path2D(svgContent);
	    context.fill(p);
	    context.stroke(p);
		context.setTransform(1, 0, 0, 1, 0, 0);
	}
}
