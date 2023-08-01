function paintObjects(){
    var anzahlDrehungen = 30*amountObjects;
	for(var rotations = 0; rotations < anzahlDrehungen; rotations++) {
 		var frequenz = Math.PI/180*2;
		var amplitude  = 40;
	 	context.moveTo(0,canvas.height/2);
		context.beginPath();	
	    context.strokeStyle = randomRGB();
	    if( rotations % 2 === 0 ) {
		    context.strokeStyle = colorSecondObjects;
		}
		for( var x = -canvas.width/2; x < canvas.width*2; x+=1 ) {
		 	var y =  amplitude * Math.sin( x * frequenz ) + canvas.height/2 ;
			context.lineTo(x,y);
		}
 		context.stroke();
        
        //drehen um die Mitte
        context.translate(canvas.width/2, canvas.height/2);
    	context.rotate(360/anzahlDrehungen*Math.PI*Math.sin(rotations) / 180);
        context.translate(-canvas.width/2, -canvas.height/2);
	}
	context.setTransform(1, 0, 0, 1, 0, 0);
}
