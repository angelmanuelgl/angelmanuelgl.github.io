//declaraciones
var boton1=document.getElementById('minnum');
var boton2=document.getElementById('maxnum');
var calcular=document.getElementById("boton");
var elnumero=document.getElementById("elnumero");
var minnum=1;
var maxnum=100;


function  NumeroRandom(min, max) {
	return Math.floor(Math.random() * (max - min+1)) + min;
}


calcular.onclick=function(){
	//se asegura de que no esten vacios
	if(boton1.value==""){
		boton1.value=0;
	}
	if(boton2.value==""){
		boton2.value=100;
	}

	//asigna el valor mayor al maxnum y el menor al minnum
	if(parseInt (boton1.value)<parseInt (boton2.value)){
		minnum=parseInt (boton1.value);
		maxnum=parseInt (boton2.value);
	}else{
		minnum=parseInt (boton2.value);
		maxnum=parseInt (boton1.value);
	}
	//se asegura que los numeros escritos sean numeros
	boton1.value=parseInt (boton1.value);
	boton2.value=parseInt (boton2.value);

	//se encarga de verificar que sena numero positivos
	if(isNaN(minnum)){
		minnum=0
		boton1.value=0;
	}
	if(isNaN(maxnum)){
		maxnum=100;
		boton2.value=100;
	}

	elnumero.innerHTML=NumeroRandom(minnum, maxnum);
	console.log("boton1.value", boton1.value);
	console.log("boton2.value", boton2.value);

}