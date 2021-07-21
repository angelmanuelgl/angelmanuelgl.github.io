

var contenedor=document.getElementById('body');
window.onmousemove=function(e){
	var x=-e.clientX/3;
	var y=-e.clientY/3;
	contenedor.style.backgroundPositionX= x + "px";
	contenedor.style.backgroundPositionY= y + "px";
	if(Math.random()<0.5){
		console.log("si", Math.random()<0.5);
		contenedor.style.backgroundSize=70+Math.random()*20+"%";	
	}else{
		contenedor.style.backgroundSize=70-Math.random()*20+"%";	
	}
}
function CambioTamaño(){
	
}

setInterval(CambioTamaño,800);