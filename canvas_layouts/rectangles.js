function paintObjects(){
	const columns = Math.ceil(amountObjects * 100);
	const squareSize = canvas.width / columns;
	const rows = canvas.height/squareSize+1;
	
	for (var row = 0; row <= rows; row++) {
	  for (var col = 0; col <= columns; col++) {
	    const x = col * squareSize;
	    const y = canvas.height - row * squareSize;
	    
		context.beginPath();
	    context.fillStyle = randomRGB();
	    if( (row + col) % 2 === 0 ) {
		    context.fillStyle = colorSecondObjects;
		}
	    context.rect(x,y,squareSize,squareSize);
		context.fill();
	  }
	}
}
