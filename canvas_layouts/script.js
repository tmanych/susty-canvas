var initialized=false;
window.onresize = function(){
	paint();
}
window.onload = function(){
		paint();
}
window.fullscreenchange = function(){
	paint();
}
function paint(){
	if( ! initialized ) {
		bodyElement = document.body;
		bodyStyle = getComputedStyle(bodyElement);
		canvas = document.createElement("canvas", {"id" : "myCanvas","class" : "myCanvas" });
		bodyElement.insertBefore(canvas, bodyElement.firstChild);
		canvas.style.position="fixed";
		contentElement = document.getElementById("content");
		var styleContentElement = window.getComputedStyle(contentElement);
		contentElement.style.position="relative";
		var box = document.getElementById("masthead");
		canvas.style.zIndex=-1;
		context = canvas.getContext('2d');
	}
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
	
	paintBackgroundColor();
	if(typeof paintObjects === "function") paintObjects();
	paintLightener();
	if(canvaslayouttype_field === 'top border') cutBackground();
	if(canvaslayouttype_field === 'top bottom') cutBackgroundCenter();
	if(canvaslayouttype_field === 'top small') cutBackgroundTopSmall();
	paintBackgroundContent();	
	paintShadow();

	if( initialized === false ) initialized = true;
}
function paintShadow(){
	if(lightenContent<=0) return;
	context.beginPath();
	const grd = context.createLinearGradient(contentElement.offsetLeft+contentElement.clientWidth, 0, contentElement.offsetLeft+contentElement.clientWidth+5, 0);
	grd.addColorStop(0, "rgba(50,50,50,0.4)");
	grd.addColorStop(1, "rgba(150,150,150,0.1)");
	context.fillStyle=grd;
	context.rect(contentElement.offsetLeft+contentElement.clientWidth,0,5,canvas.height);
	context.fill();
}
function cutBackground(){	
	var box = document.getElementById("masthead");
	context.clearRect(0,0,window.innerWidth, 1.0 * ( box.offsetHeight+box.offsetTop ) );
	context.clearRect(0,window.innerHeight - (1.0 *( box.offsetHeight+box.offsetTop ) ) ,window.innerWidth,window.innerHeight);
}
function cutBackgroundTopSmall(){	
	var box = document.getElementById("masthead");
	context.clearRect(0,0,window.innerWidth,box.offsetHeight+1.5*box.offsetTop);
	context.clearRect(0,(2.5*box.offsetHeight+box.offsetTop),window.innerWidth,window.innerHeight);
}
function cutBackgroundCenter(){	
	var box = document.getElementById("masthead");
	context.clearRect(0,(1.0*box.offsetHeight+box.offsetTop),window.innerWidth,window.innerHeight-2.5*box.offsetHeight-box.offsetTop );
}
function paintBackgroundColor(){	
	context.beginPath();
	context.fillStyle="#"+backgroundColor;
	context.rect(0,0,canvas.width,canvas.height);
	context.fill();
}
function paintBackgroundContent(){	
	context.beginPath();
	context.globalAlpha = lightenContent;
	context.strokeStyle='black';
	//context.fillStyle="#"+backgroundColor;
	//context.fillStyle=bodyStyle.getPropertyValue('background-color');
	context.fillStyle="white";
	context.rect(contentElement.offsetLeft,0,contentElement.clientWidth,canvas.height);
    context.lineWidth=0.5;
	if(lightenContent>0) context.stroke();
	context.fill();
	context.globalAlpha = 1;
    context.lineWidth=1;
}
function paintLightener(){
	context.beginPath();
	context.fillStyle="rgba(255,255,255,"+lightenObjects+")";
	context.rect(0,0,canvas.width,canvas.height);
	context.fill();
}
function randomRGB(r1=false, g1=false, b1=false) {
	if(colorObjects !== "random") return colorObjects;
	var r = (r1===false)? Math.floor(Math.random()*255):r1;
	var g = (g1===false)? Math.floor(Math.random()*255):g1;
	var b = (b1===false)? Math.floor(Math.random()*255):b1;
	return "rgb("+r+","+g+","+b+")";
}