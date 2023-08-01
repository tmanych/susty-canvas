function paintObjects(){
	var breite = 120;
	const p = new Path2D(svgContent);
const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
const tempPath = document.createElementNS("http://www.w3.org/2000/svg", "path");
tempPath.setAttribute("d", svgContent);
svg.appendChild(tempPath);
const bbox = tempPath.getBBox();
svg.removeChild(tempPath);

const width = bbox.width;
const height = bbox.height;
console.log(width,height);
	for (var row = Math.ceil(window.innerHeight/breite*amountObjects); row >= 0 ; row--) {
		for (var col = Math.ceil(10*window.innerWidth/breite*amountObjects); col >= 0 ; col--) {
		    const x = col * breite;
		    const y = row * breite;
			context.beginPath();
			context.scale(amountObjects,amountObjects);
			context.fillStyle=randomRGB();
			if(colorSecondObjects && col%2===0)
				context.fillStyle=colorSecondObjects;
			context.strokeStyle="black";
			context.translate(x,y);
		    context.fill(p);
		    context.stroke(p);
			context.setTransform(1, 0, 0, 1, 0, 0);
		}
	}
}
