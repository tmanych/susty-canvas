function paintObjects(){
	let width = canvas.width;
	let height = canvas.height;
	
	let tileSize = Math.floor(amountObjects*50); 
	let i = 0;
	for (let x = 0; x < width; x += tileSize) {
		for (let y = 0; y < height; y += tileSize) {
		context.fillStyle = randomRGB();
	    if( (i++) % 3 === 0 ) {
		    context.fillStyle = colorSecondObjects;
		}
	
	    let rectWidth = Math.random() * (tileSize - tileSize / 2) + tileSize / 2;
	
		context.beginPath();
	    context.arc(x, y, rectWidth/2, 0, 2*Math.PI);
		context.fill();
	  }
	}
}