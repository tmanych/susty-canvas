var amount = Math.ceil(amountObjects*50);
function paintObjects(){
	if( ! initialized ) {
		init();
	}
	context.clearRect(0,0,canvas.width,canvas.height);
	requestAnimationFrame(paint);
	for (var c = 0; c < amount; c++) {
		objects[c].draw();
	}
}
var objects = [];
function init() {
	for (var c = 0; c < amount; c++) {
		objects[c] = new Object(c);
	}
	initialized = true;
}
function Object(i){
    this.x = Math.floor(Math.random()*canvas.width);
    this.y = Math.floor(Math.random()*canvas.height);
    this.radius = Math.floor(Math.random()*100);
    this.color = randomRGB();
	if(i%2===0) this.color=colorSecondObjects;
	this.getDirection();
}
Object.prototype.getDirection = function(){
	this.direction=Math.floor(Math.random()*4);
	this.counter=Math.floor(Math.random()*400);
}
Object.prototype.checkXY = function(){
	if(this.x > canvas.width) this.direction=1;
	if(this.y > canvas.height) this.direction=3;
	if(this.x < 0) this.direction=0;
	if(this.y < 0) this.direction=2;
}
Object.prototype.draw = function(){
	switch(this.direction){
		case 0:
			this.x++;
			break;
		case 1:
			this.x--;
			break;
		case 2:
			this.y++;
			break;
		case 3:
			this.y--;
			break;
	}
	this.counter--;
	if(this.counter===0) this.getDirection();
	this.checkXY();

	context.beginPath();
	context.lineWidth=2;
    context.strokeStyle = this.color;
    context.arc(this.x,this.y,this.radius,0,2*Math.PI);
	context.stroke();

}