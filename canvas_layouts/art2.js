function paintObjects(){
	context.globalCompositeOperation='source-atop';
	context.fillStyle = "black";
	context.fillRect(0,0,context.width,context.height);

	var c = "black";
	context.fillStyle=c;
	context.fillRect(0,0,context.width,context.height);
	context.globalCompositeOperation='xor';
	for( var i = 0; i < Math.ceil(100*amountObjects); i++) {
	    context.beginPath();
	    if(i%2===0)
	        context.fillStyle = 'black';
	    else
	        context.fillStyle = c;
	    context.moveTo(0,0);
	    context.lineTo(canvas.width,0);
	    context.lineTo(canvas.width/2,canvas.height);
	    context.lineTo(0,0);
	    context.fill();
	    
	    //drehen um die Mitte
	    context.translate(canvas.width/2, canvas.height/2);
	    context.rotate(13*Math.PI*Math.sin(i));
	    context.translate(-canvas.width/2, -canvas.height/2);
	} 
	context.setTransform(1, 0, 0, 1, 0, 0);
	/*
	context.globalCompositeOperation='xor';
	context.beginPath();
	context.fillStyle = "red";
	context.rect(0,0,context.width,context.height);
	context.fill();
	*/
}
