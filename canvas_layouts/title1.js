var abstand=0.85;
var hoehe=Math.ceil(window.innerHeight*amountObjects);
var anzahl= Math.floor(window.innerHeight/hoehe);
var abstandY = Math.ceil((window.innerHeight-anzahl*hoehe*abstand)/2);
function paintObjects(){
	if( ! initialized ) {
		init();
	}
	for(var x = 0; x < canvas.width; x) {
		for(var i = 0; i < buchstaben.length; i++) {
		    var y = abstandY;
			for(var j = 0; j <= anzahl; j++) {
				y+=hoehe*abstand;
				context.fillStyle = randomRGB();
			    if(colorSecondObjects && buchstaben[i].i%2===0) context.fillStyle = colorSecondObjects;
		    	context.fillText(buchstaben[i].buchstabe, x, y);
			}
			x = x + buchstaben[i].width;
		}
	}
}
var buchstaben = [];
function init() {
	context.font=Math.ceil(amountObjects*hoehe)+"px serif";
    var text = bodyElement.getElementsByTagName("h1")[0].innerText
	for( var i = 0; i < text.length ; i++) {
		if(text[i]!==" ") {
	        buchstaben[buchstaben.length] = new Buchstabe(text[i], i);
		}
	}
}
var Buchstabe = function(buchstabe, i) {
    this.i = i;
    this.buchstabe = buchstabe;
	this.width = context.measureText(this.buchstabe).width-Math.ceil(amountObjects*15);
}
