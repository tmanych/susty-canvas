function paintObjects(){
	const anzahl = 100;
	const radius = 400;
	const anzahlKreise=15;
	for( var i = 0; i < Math.ceil(anzahl*amountObjects); i++) {
	    var x = Math.round( Math.random()*canvas.width );
	    var y = Math.round( Math.random()*canvas.height );
		var r = Math.ceil(Math.random()*radius-100)+100;
		var schritte = Math.floor(r/anzahlKreise);
		context.strokeStyle=randomRGB();
		context.globalAlpha = Math.random();
		for( var j = 0; j < anzahlKreise; j++) {
			context.beginPath();
		    if( i % 2 === 0 ) {
			    context.strokeStyle = colorSecondObjects;
			}
		    context.arc(x, y, r, 0, 2*Math.PI);
		    context.stroke();
			r -= schritte;
		}
	}
	context.globalAlpha = 1;
}
