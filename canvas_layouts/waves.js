function paintObjects(){
	let width = canvas.width;
	let height = canvas.height;
	
	let amplitude = height / (Math.floor(amountObjects*6)+1); // Height of the wave
	let frequency = 0.02;       // How often the wave repeats
	let offset = height / 2;    // Shift the wave down to the middle of the canvas
	let i = 0;
	for(var y1=0-amplitude;y1 < height;y1+=40){
		context.beginPath();
		context.moveTo(0, offset);
		
		for (let x = 0; x < width; x++) {
		  let y = amplitude * Math.sin(x * frequency) + offset;
		  context.lineTo(x, y+y1);
		}
		
		context.strokeStyle = randomRGB();
	    if( (i++) % 2 === 0 ) {
		    context.strokeStyle = colorSecondObjects;
		}
		context.stroke();
	}
}