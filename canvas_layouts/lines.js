function paintObjects(){
	var amount = 100;
	const size = Math.ceil( canvas.height/amount ); 
	const cols = Math.ceil( canvas.width/(size) ) - 1;
	const rows = Math.ceil( canvas.height/(amountObjects*size) ) - 2; //
	var s = size;
	for (var row = 0; row <= rows; row++) {
	    const y = canvas.height - row * size;
		    
		context.beginPath();
	    context.fillStyle = randomRGB();
	    context.rect(0,y,canvas.width,s);
		context.fill();
		s/=(1+amountObjects*0.06);
	}
}
