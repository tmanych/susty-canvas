function paintObjects(){
	const rows = Math.ceil(amountObjects * 40);
	const size = canvas.width / rows / 2.5;
	const columns = canvas.width/size+1;
	var s = size;
	for (var row = 0; row <= rows; row++) {
		for (var col = 0; col <= columns; col++) {
		    const x = col * size;
		    const y = canvas.height - row * size;
		    
			if( (row + col) % 2 === 0 ) {
				context.beginPath();
		    	context.fillStyle = randomRGB();
				context.rect(x,y,s,s);
				context.fill();
		    }
	  	}
		s/=1.05;
	}
}
