var originalWidth;
var originalHeight;
var viewportHeight = window.innerHeight;
var viewportWidth = window.innerWidth;
document.getElementById("contentContainer").style.width=viewportWidth+"px";
document.getElementById("contentContainer").style.height=viewportHeight+"px";

var originalW = document.getElementById("image").width; 
var originalH = document.getElementById("image").height;

var z = 1;
var appliedZoom = 1.1;
var decX = 300;
var decY = 300;

document.getElementById("image").onload = function(){
 resize(); 
}

function mouse(event){
	if(event.ctrlKey){
		zoomOut(event);
	}
	else {
		zoomIn(event);
	}
}

function zoomIn(event){
	appliedZoom = 1.1;
	zoom(event);
}

function zoomOut(event){
	appliedZoom = 0.9;
	zoom(event);
}

function zoom(event){

	//coordonnées de la souris 
	var x = event.clientX;
    var y = event.clientY;

	z = z * appliedZoom;
	
	//zoom dans l'image
	var newW = z*originalW;
	var newH = z*originalH;
	
	//décalage de l'image
	decX = x*(appliedZoom-1)+appliedZoom*decX;
	decY = y*(appliedZoom-1)+appliedZoom*decY;
	
	document.getElementById("image").style.width=newW+"px";
	document.getElementById("image").style.height=newH+"px";

	document.getElementById("image").style.top=-decY+"px";
	document.getElementById("image").style.left=-decX+"px";
}



function resize(){

	var x = document.getElementById("image").width; 
	var y = document.getElementById("image").height;
	var ratioImg = y/x;
	var ratioView = viewportHeight/viewportWidth;
	
	console.log("ratioImg="+ratioImg);
	console.log("ratioView="+ratioView);
	
	if (ratioView>ratioImg){		
		var w = viewportWidth;
		if (w>originalWidth){
			w=originalWidth;
		}
		var h = w*ratioImg;
	}
	else{
		var h = viewportHeight;
		if (h>originalHeight){
			h=originalHeight;
		}
		var w = h/ratioImg;
	}
	
	console.log("w="+w);
	console.log("h="+h);
	
	z=w/x;
	decX = -(viewportWidth-w)/2;
	decY = -(viewportHeight-h)/2;
	
	console.log("z="+z);
	console.log("decX="+decX);
	console.log("decY="+decY);
	
	document.getElementById("image").style.width=w+"px";
	document.getElementById("image").style.height=h+"px";
	
	document.getElementById("image").style.top=-decY+"px";
	document.getElementById("image").style.left=-decX+"px";
}




