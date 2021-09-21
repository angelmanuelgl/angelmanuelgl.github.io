var boton1=document.getElementById('minnum');
var boton2=document.getElementById('maxnum');
var calcular=document.getElementById("boton");
var elnumero=document.getElementById("elnumero");

function  NumeroRandom(min, max) {
	return Math.floor(Math.random() * (max - min+1)) + min;
}
var minnum=1;
var maxnum=1000;

calcular.onclick=function(){
	if(boton1.value<boton2.value){
		minnum=parseInt (boton1.value);
		maxnum=parseInt (boton2.value);
	}else{
		minnum=parseInt (boton2.value);
		maxnum=parseInt (boton1.value);
	}
	elnumero.innerHTML=NumeroRandom(minnum, maxnum);

}