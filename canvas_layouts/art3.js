function paintObjects(){
	context.clearRect(0,0,canvas.width,canvas.height);
	context.globalCompositeOperation='lighter';
    
    var radius = Math.floor(50*amountObjects);
    var i = 0;
    for( var y=-radius; y < canvas.height+2*radius; y+=2*radius) {
        for( var x=-radius; x < canvas.width+radius; x+=2*radius) {
            var color_rect = colorSecondObjects;
            if(i++%2 === 0) {
                color_rect = backgroundColor;
            }

            context.fillStyle = color_rect;
            context.beginPath();
            context.rect(x-radius, y+radius, 2*radius, 2*radius);
            context.fill();

            context.beginPath();
            context.fillStyle = randomRGB();
            context.arc(x+radius, y-radius, radius, 0, 2*Math.PI);
            context.fill();
        }
    }
	context.globalCompositeOperation='source-over';
}
