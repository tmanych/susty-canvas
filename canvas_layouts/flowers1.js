function paintObjects(){
	amountObjects = Math.ceil(amountObjects*400);
    for(var i = 0; i< amountObjects; i++) {
        var blaetter = 3+Math.ceil(Math.random()*2);
        var radius = 50+Math.random()*150;
        var farbe = randomRGB();
        var xStart = canvas.width*Math.random()-10;
        var yStart = canvas.height*Math.random()+50;
        var flower = new Flower(xStart, yStart, radius, blaetter, farbe);
        flower.draw();
    }
}
function Flower(centerX, centerY, radius, numPetals, color){
	this.context = context;
    this.centerX = centerX;
    this.centerY = centerY;
    this.radius = radius;
    this.numPetals = numPetals;
    this.color = color;
}
  
Flower.prototype.draw = function(){
    context.strokeStyle="black";
    context.beginPath();

	for (var n = 0; n < this.numPetals; n++) {
	  var theta1 = ((Math.PI * 2) / this.numPetals) * (n + 1);
	  var theta2 = ((Math.PI * 2) / this.numPetals) * (n);
	  
	  var x1 = (this.radius * Math.sin(theta1)) + this.centerX;
	  var y1 = (this.radius * Math.cos(theta1)) + this.centerY;
	  var x2 = (this.radius * Math.sin(theta2)) + this.centerX;
	  var y2 = (this.radius * Math.cos(theta2)) + this.centerY;
	  
	  context.moveTo(this.centerX, this.centerY);
	  context.bezierCurveTo(x1, y1, x2, y2, this.centerX, this.centerY);
	}
        
    context.closePath();
    context.fillStyle = this.color;
    context.fill();
    context.stroke();

    context.beginPath();
    context.arc(this.centerX, this.centerY, this.radius / 8, 0, 2 * Math.PI, false);
    context.fillStyle = colorSecondObjects;
    context.fill();
    context.stroke();
};
