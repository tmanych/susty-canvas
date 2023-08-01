function paintObjects(){
	var anzahl = 200;
	for( var i = 0; i < Math.ceil(anzahl*amountObjects); i++) {
		context.beginPath();
		context.strokeStyle=randomRGB();
	    if( i % 2 === 0 ) {
		    context.strokeStyle = colorSecondObjects;
		}
	    var x = Math.round( Math.random()*canvas.width );
	    var y = Math.round( Math.random()*canvas.height );
	    var radius = Math.round( Math.random() * anzahl * amountObjects );
	    context.arc(x, y, radius, 0, 2*Math.PI);
	    context.stroke();
	}
}
