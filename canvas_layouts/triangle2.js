function paintObjects(){
	var breite = Math.floor(180*amountObjects);
	const p = new Path2D("M0 0 L "+breite/2+" "+breite/2+" L "+breite+" 0 Z");
	const p1 = new Path2D("M0 "+breite/2+" L "+breite/2+" 0 L "+breite+" "+breite/2+" Z");
	for (var row = 0; row <= window.innerHeight/breite; row++) {
		for (var col = 0; col <= window.innerWidth/breite; col++) {
		    const x = col * breite;
		    const y = row * breite;
			context.fillStyle=randomRGB();
			context.beginPath();
			context.translate(x,y);
		    context.fill(p);
			context.setTransform(1, 0, 0, 1, 0, 0);
			context.beginPath();
			context.fillStyle=colorSecondObjects;
			context.translate(x,y+breite/2);
		    context.fill(p1);
			context.setTransform(1, 0, 0, 1, 0, 0);
		}
	}
}
