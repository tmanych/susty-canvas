function paintObjects(){
	amountObjects *= 200;
	for(var i = 0; i < amountObjects; i++)  {
		var radius = canvas.height;//*Math.random();
	    var x = Math.cos(360/amountObjects * i * Math.PI/180) * radius +canvas.width/2;
	    var y = Math.sin(360/amountObjects * i * Math.PI/180) * radius +canvas.height/2 ;

	
//	    context.fillText(i, x, y);
//	    context.fillStyle = "black";
	
	    context.beginPath();
	    context.lineWidth=3;
	    context.strokeStyle = randomRGB();
	    context.moveTo(canvas.width/2, canvas.height/2);
	    context.lineTo(x,y);
	    context.stroke();
	}

}
