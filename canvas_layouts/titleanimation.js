function paintObjects(){
	if( ! initialized ) {
		init();
	}
	context.clearRect(0,0,canvas.width,canvas.height);
	requestAnimationFrame(paint);
	for (var c = 0; c < objects.length; c++) {
		objects[c].draw();
	}
	context.font=schriftgroesse+"px Arial";
	context.globalCompositeOperation='xor';//xor //lighter
	context.fillStyle = colorSecondObjects;
	context.fillText(text, 0, canvas.height);
}

var objects = [];
var rectWidth = Math.floor(amountObjects*500);
var text = "";
var schriftgroesse = 0;
function init() {
	for (var c = 0; c < Math.floor(canvas.width/rectWidth)+2; c++) {
		objects[c] = new Object(c);
	}
	text = bodyElement.getElementsByTagName("h1")[0].innerText;
	schriftgroesse = canvas.height;
	context.font=schriftgroesse+"px Arial";
	while(context.measureText(text).width > canvas.width) {
		schriftgroesse -= 5;
		context.font=schriftgroesse+"px Arial";
	}
	initialized = true;
}
function Object(i){
    this.x = rectWidth*(i-2);
	this.i = i;
	this.color = randomRGB();
}
Object.prototype.checkXY = function(){
	if(this.x > canvas.width){
		this.x=-2*rectWidth;
	}
}
Object.prototype.draw = function(){
	this.x++;
	this.checkXY();
	
	if(this.i%2===0) return;

	context.beginPath();
    context.fillStyle = this.color;
    context.rect(this.x,0,rectWidth,canvas.height);
	context.fill();
}