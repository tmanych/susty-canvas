function paintObjects(){
	var blumen = Math.ceil(amountObjects*100);
	var anzahl = 20;
	var innenKreis = 0.1;
	var hoehe = 0.9;
	for(var j = 0; j < blumen; j++)  {
	    var radius = Math.random()*200;
	    var farbe = randomRGB();
	    var xStart = canvas.width*Math.random();
	    var yStart = canvas.height*Math.random();
	    for(var i = 0; i < anzahl; i++)  {
	        var x1 = Math.cos(360/anzahl * (i-0.1) * Math.PI/180) * radius*innenKreis + xStart;
	        var y1 = Math.sin(360/anzahl * (i-0.1) * Math.PI/180) * radius*innenKreis + yStart ;
	        var x2 = Math.cos(360/anzahl * (i-0.1) * Math.PI/180) * radius*hoehe + xStart;
	        var y2 = Math.sin(360/anzahl * (i-0.1) * Math.PI/180) * radius*hoehe + yStart ;
	        var x3 = Math.cos(360/anzahl * (i+0.5) * Math.PI/180) * radius*0.5 + xStart;
	        var y3 = Math.sin(360/anzahl * (i+0.5) * Math.PI/180) * radius*0.5 + yStart ;
	        var x4 = Math.cos(360/anzahl * (i+0.9) * Math.PI/180) * radius*hoehe + xStart;
	        var y4 = Math.sin(360/anzahl * (i+0.9) * Math.PI/180) * radius*hoehe + yStart ;
	    
	        context.beginPath();
	        context.moveTo(xStart,yStart);
	        context.lineTo(x2,y2);
	        context.quadraticCurveTo(x3,y3,x4,y4);
	        context.fillStyle=farbe;
	        context.fill();
	        context.stroke();
	    
	        context.beginPath();
	        context.arc(xStart,yStart,radius*innenKreis,0,2*Math.PI);
	        context.strokeStyle="black";
	        if(colorSecondObjects) context.fillStyle=colorSecondObjects;
	        context.stroke();
	        context.fill();
	    }
	}
};
