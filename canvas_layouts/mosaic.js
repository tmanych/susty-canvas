function paintObjects(){
	let width = canvas.width;
	let height = canvas.height;
	
	let tileSize = Math.floor(amountObjects*40); 
	let i = 0;
	for (let x = 0; x < width; x += tileSize) {
	  for (let y = 0; y < height; y += tileSize) {
		context.fillStyle = randomRGB();
	    if( (i++) % 2 === 0 ) {
		    context.fillStyle = colorSecondObjects;
		}
	
	    let rectWidth = Math.random() * (tileSize - tileSize / 2) + tileSize / 2;
	    let rectHeight = Math.random() * (tileSize - tileSize / 2) + tileSize / 2;
	
	    context.fillRect(x, y, rectWidth, rectHeight);
	  }
	}
}