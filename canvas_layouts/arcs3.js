function paintObjects(){
	var amount = Math.ceil(amountObjects*50);
	const max_radius = Math.ceil(1.2*canvas.width); 
	var s = max_radius;
	for (var c = 0; c < amount; c++) {
		context.beginPath();
	    context.strokeStyle = randomRGB();
	    if(c%2===0)context.strokeStyle = colorSecondObjects;
	    context.arc(0,canvas.height,s,0,2*Math.PI);
		context.stroke();
		s-= max_radius/amount;
	}
}
