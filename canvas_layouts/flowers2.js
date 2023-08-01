function paintObjects(){
	var blaetter = 5;
	var innenKreis = 0.09;
	var hoehe = 0.2;
	amountObjects = Math.ceil(amountObjects*400);

	for(var j = 0; j < amountObjects; j++)  {
	    var radius = 100+Math.random()*300;
	    var farbe = randomRGB();
	    var linienFarbe = "#FFFFFF";
	    var xStart = canvas.width*Math.random();
	    var yStart = canvas.height*Math.random();
	    for(var i = 0; i < blaetter; i++)  {
	        var x2 = Math.cos(360/blaetter * (i-0.1) * Math.PI/180) * radius*hoehe + xStart;
	        var y2 = Math.sin(360/blaetter * (i-0.1) * Math.PI/180) * radius*hoehe + yStart ;
	        var x3 = Math.cos(360/blaetter * (i+0.5) * Math.PI/180) * radius*0.5 + xStart;
	        var y3 = Math.sin(360/blaetter * (i+0.5) * Math.PI/180) * radius*0.5 + yStart ;
	        var x4 = Math.cos(360/blaetter * (i+0.9) * Math.PI/180) * radius*hoehe + xStart;
	        var y4 = Math.sin(360/blaetter * (i+0.9) * Math.PI/180) * radius*hoehe + yStart ;
	
	        var radius_ = radius*0.18;
	        var x21 = Math.cos(360/blaetter * (i-0.1) * Math.PI/180) * radius_*hoehe + xStart;
	        var y21 = Math.sin(360/blaetter * (i-0.1) * Math.PI/180) * radius_*hoehe + yStart ;
	        var x31 = Math.cos(360/blaetter * (i+0.5) * Math.PI/180) * radius_*0.5 + xStart;
	        var y31 = Math.sin(360/blaetter * (i+0.5) * Math.PI/180) * radius_*0.5 + yStart ;
	        var x41 = Math.cos(360/blaetter * (i+0.9) * Math.PI/180) * radius_*hoehe + xStart;
	        var y41 = Math.sin(360/blaetter * (i+0.9) * Math.PI/180) * radius_*hoehe + yStart ;
	    
	        context.lineWidth=1;
	        //innen dreieck mit farbe füllen
	        context.beginPath();
	        context.strokeStyle=farbe;
	        context.strokeStyle=linienFarbe;
	        context.fillStyle=farbe;
	        context.moveTo(xStart,yStart);
	        context.lineTo(x2,y2);
	        context.lineTo(x4,y4);
	        context.stroke();
	        context.fill();
	
	        //innen linien (dreiecke)
	        context.beginPath();
	        context.strokeStyle=linienFarbe;
	        context.moveTo(xStart,yStart);
	        context.lineTo(x2,y2);
	        context.stroke();
	
	        //Aussenblaetter
	        context.beginPath();
	        context.moveTo(x2,y2);
	        context.quadraticCurveTo(x3,y3,x4,y4);
	        context.fill();
	        context.stroke();
	    
	        //Innenblaetter
	        context.beginPath();
	        context.fillStyle=colorSecondObjects;
	        context.strokeStyle=linienFarbe;
	        context.lineWidth=5;
	        context.moveTo(x21,y21);
	        context.quadraticCurveTo(x31,y31,x41,y41);
	        context.fill();
	        context.stroke();
	
	        context.beginPath();
	        context.arc(xStart,yStart,radius*innenKreis*0.4,0,2*Math.PI);
	        context.fillStyle=colorSecondObjects;
	        context.fill();
	
	    }
	}
};
