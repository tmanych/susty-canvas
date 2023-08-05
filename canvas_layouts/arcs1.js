function paintObjects(){
    context.fillStyle = backgroundColor;
		    context.fillRect(0,0,canvas.width,canvas.height);

	var amount = 100;
	const size = Math.ceil( canvas.height/amount ); 
	const cols = Math.ceil( canvas.width/(size) ) - 1;
	const rows = Math.ceil( canvas.height/(amountObjects*size) ) - 2; //
	var s = size;
	for (var row = 0; row <= rows; row++) {
		for (var col = 0; col <= cols; col++) {
		    const x = col * size;
		    const y = canvas.height - row * size;
		    
			context.beginPath();
		    context.fillStyle = randomRGB();
		    context.arc(x,y,s/2,0,2*Math.PI);
			context.fill();
	  	}
		s/=(1+amountObjects*0.03);
	}
}
