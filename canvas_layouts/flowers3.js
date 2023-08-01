function paintObjects(){
	amountObjects = Math.ceil(amountObjects*100);
	var blaetter = 5;
	var innen = 5;

	for(var k = 0; k < amountObjects; k++)  {
	    var x_ = Math.random()*window.innerWidth;
	    var y_ = Math.random()*window.innerHeight;
	    var radius = 20+Math.random()*30;
		for(var i = 0; i < innen; i++)  {
		    context.fillStyle = randomRGB();
			if(i%2===0) context.fillStyle = colorSecondObjects;
			for(var j = 0; j < blaetter; j++)  {
				for (var winkel = 0; winkel < 360; winkel+=Math.floor(360/blaetter)) {
				    //Punkt am Aussenkreis berechnen fuer Winkel
				    var x = Math.cos(winkel * Math.PI / 180) *  radius + x_;
				    var y = Math.sin(winkel * Math.PI / 180) *  radius + y_;
				    context.beginPath();
					context.arc(x,y,radius,0,2*Math.PI);
				    context.fill();
				}
				radius *= 0.95;
			}
		}
	}
};
