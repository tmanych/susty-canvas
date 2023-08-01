function paintObjects(){
	const columns = Math.ceil(amountObjects * 100);
	const squareSize = canvas.width / columns;
	const rows = canvas.height/squareSize+1;
	
	for (var row = 0; row <= rows; row++) {
	    const y = canvas.height - row * squareSize;
	    
		context.beginPath();
	    context.fillStyle = randomRGB();
	    if( (row ) % 2 === 0 ) {
		    context.fillStyle = colorSecondObjects;
		}
	    context.rect(0,y,canvas.width,squareSize);
		context.fill();
	}
}
