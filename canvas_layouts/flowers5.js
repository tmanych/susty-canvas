function paintObjects(){
	var blumen = Math.ceil(amountObjects*100);
	var radius = 200;
	var anzahl = 15;
	
	for(var j = 0; j < blumen; j++)  {
	    var farbe = randomRGB();
	    var xStart = canvas.width*Math.random();
	    var yStart = canvas.height*Math.random();
	    for(var i = 0; i < anzahl; i++)  {
	        var hoehe = 0.4;
	        var x1 = Math.cos(360/anzahl * i * Math.PI/180) * 15 + xStart;
	        var y1 = Math.sin(360/anzahl * i * Math.PI/180) * 15 + yStart ;
	        var x2 = Math.cos(360/anzahl * i * Math.PI/180) * radius*hoehe + xStart;
	        var y2 = Math.sin(360/anzahl * i * Math.PI/180) * radius*hoehe + yStart ;
	        var x3 = Math.cos(360/anzahl * (i+0.5) * Math.PI/180) * radius*0.5 + xStart;
	        var y3 = Math.sin(360/anzahl * (i+0.5) * Math.PI/180) * radius*0.5 + yStart ;
	        var x4 = Math.cos(360/anzahl * (i+1) * Math.PI/180) * radius*hoehe + xStart;
	        var y4 = Math.sin(360/anzahl * (i+1) * Math.PI/180) * radius*hoehe + yStart ;
	    
	        context.beginPath();
	        context.moveTo(xStart,yStart);
	        context.lineTo(x2,y2);
	        context.quadraticCurveTo(x3,y3,x4,y4);
	        context.fillStyle=farbe;
	        context.stroke();
	        context.fill();
	    
	        context.beginPath();
	        context.arc(xStart,yStart,radius*0.2,0,2*Math.PI);
	        context.strokeStyle="black";
	        if(colorSecondObjects) context.fillStyle=colorSecondObjects;
			context.lineWidth=1;
	        context.fill();
	        context.stroke();
	    }
	}
}
