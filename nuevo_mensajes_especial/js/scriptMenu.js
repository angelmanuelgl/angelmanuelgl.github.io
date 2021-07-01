// -----------------------------------MENU DESPLEGABLE------------------------------------------------

//botones que despliegan
var nivel1_Dias=document.getElementById("nivel1_Dias");
var nivel1_Noches =document.getElementById("nivel1_Noches");
var nivel1_Ojala=document.getElementById("nivel1_Ojala");
var nivel1_Alagos=document.getElementById("nivel1_Alagos");
var nivel1_Extras=document.getElementById("nivel1_Extras");

//div de los nivel 2
var nivel2_Dias=document.getElementById("nivel2_Dias");
var nivel2_Noches=document.getElementById("nivel2_Noches");
var nivel2_Ojala=document.getElementById("nivel2_Ojala");
var nivel2_Alagos=document.getElementById("nivel2_Alagos");
var nivel2_Extras=document.getElementById("nivel2_Extras");

//div de los del nivel 3
var nivel3_Dias_Ojala=document.getElementById("nivel3_Dias_Ojala");
var nivel3_Dias_OjalaHot=document.getElementById("nivel3_Dias_OjalaHot");
var nivel3_Noches_Ojala=document.getElementById("nivel3_Noches_Ojala");
var nivel3_Noches_OjalaHot=document.getElementById("nivel3_Noches_OjalaHot");
var nivel3_Ojala_Wonitos=document.getElementById("nivel3_Ojala_Wonitos");
var nivel3_Ojala_Hot=document.getElementById("nivel3_Ojala_Hot");
var nivel3_Alagos_Wonitos=document.getElementById("nivel3_Alagos_Wonitos");
var nivel3_Alagos_Hot=document.getElementById("nivel3_Alagos_Hot");
var nivel3_Extras_PatronCorazones=document.getElementById("nivel3_Extras_PatronCorazones");
var nivel3_Extras_CorazonCorazones=document.getElementById("nivel3_Extras_CorazonCorazones");
var nivel3_Extras_TextoCorazones=document.getElementById("nivel3_Extras_TextoCorazones");
var nivel3_Extras_EmojisSeries=document.getElementById("nivel3_Extras_EmojisSeries");

//botones que llaman 
var nivel2_Dias_Ojala=document.getElementById("nivel2_Dias_Ojala");
var nivel2_Dias_OjalaHot=document.getElementById("nivel2_Dias_OjalaHot");
var nivel2_Noches_Ojala=document.getElementById("nivel2_Noches_Ojala");
var nivel2_Noches_OjalaHot=document.getElementById("nivel2_Noches_OjalaHot");
var nivel2_Ojala_Wonitos=document.getElementById("nivel2_Ojala_Wonitos");
var nivel2_Ojala_Hot=document.getElementById("nivel2_Ojala_Hot");
var nivel2_Alagos_Wonitos=document.getElementById("nivel2_Alagos_Wonitos");
var nivel2_Alagos_Hot=document.getElementById("nivel2_Alagos_Hot");
var nivel2_Extras_PatronCorazones=document.getElementById("nivel2_Extras_PatronCorazones");
var nivel2_Extras_CorazonCorazones=document.getElementById("nivel2_Extras_CorazonCorazones");
var nivel2_Extras_TextoCorazones=document.getElementById("nivel2_Extras_TextoCorazones");
var nivel2_Extras_EmojisSeries=document.getElementById("nivel2_Extras_EmojisSeries");


//funcion que hace que desaparezcan todos los que excepto el que le piden
function HacerQueDesaparezca(elemento,lin){	
	//crea una especie de array llamada elementos que contiene todos los elementos con la clase lin
	let elementos=document.getElementsByClassName(lin);
	// a cada elemento de la array le agrega la clase desapercer
	for (let i = 0; i < elementos.length; i++) {
		elementos[i].classList.add("desaparecer");
	}	
	
	//este if es porque si es lin2 tambien quiero que se quite lin 3 (nota:pero no viseversa)
	if(lin=="lin2"){
		let elementos=document.getElementsByClassName("lin3");
		for (let i = 0; i < elementos.length; i++) {
			elementos[i].classList.add("desaparecer");
		}
	}
	//le quita la clase desaparecer al elemento que le pases como parametro
	elemento.classList.remove("desaparecer");
}

//funcion que "desactiva" a todos y "activa" el que le piden
function ActivarColorBoton(elemento,lin){
	let elementos=document.getElementsByClassName(lin);
	for (let i = 0; i < elementos.length; i++) {
		elementos[i].classList.remove("estaactivado");
	}	
	elemento.classList.add("estaactivado");
}

//funcion que sirve de apoyo para las llamadas ya que esta es llamada por los botons que despliegan
function DesapareceYColor(elemento1,lin1,elemento2,lin2){
	HacerQueDesaparezca(elemento1,lin1);
	ActivarColorBoton(elemento2,lin2);
}

//los botones hacen sus llamadas
nivel1_Dias.onclick=function(){DesapareceYColor(nivel2_Dias,"lin2",this,"boton");}
nivel1_Noches.onclick=function(){DesapareceYColor(nivel2_Noches,"lin2",this,"boton");}
nivel1_Ojala.onclick=function(){DesapareceYColor(nivel2_Ojala,"lin2",this,"boton");}
nivel1_Alagos.onclick=function(){DesapareceYColor(nivel2_Alagos,"lin2",this,"boton");}
nivel1_Extras.onclick=function(){DesapareceYColor(nivel2_Extras,"lin2",this,"boton");}

nivel2_Dias_Ojala.onclick=function(){DesapareceYColor(nivel3_Dias_Ojala,"lin3",this,"bin2");}
nivel2_Dias_OjalaHot.onclick=function(){DesapareceYColor(nivel3_Dias_OjalaHot,"lin3",this,"bin2");}
nivel2_Noches_Ojala.onclick=function(){DesapareceYColor(nivel3_Noches_Ojala,"lin3",this,"bin2");}
nivel2_Noches_OjalaHot.onclick=function(){DesapareceYColor(nivel3_Noches_OjalaHot,"lin3",this,"bin2");}
nivel2_Ojala_Wonitos.onclick=function(){DesapareceYColor(nivel3_Ojala_Wonitos,"lin3",this,"bin2");}
nivel2_Ojala_Hot.onclick=function(){DesapareceYColor(nivel3_Ojala_Hot,"lin3",this,"bin2");}
nivel2_Alagos_Wonitos.onclick=function(){DesapareceYColor(nivel3_Alagos_Wonitos,"lin3",this,"bin2");}
nivel2_Alagos_Hot.onclick=function(){DesapareceYColor(nivel3_Alagos_Hot,"lin3",this,"bin2");}
nivel2_Extras_PatronCorazones.onclick=function(){DesapareceYColor(nivel3_Extras_PatronCorazones,"lin3",this,"bin2");}
nivel2_Extras_CorazonCorazones.onclick=function(){DesapareceYColor(nivel3_Extras_CorazonCorazones,"lin3",this,"bin2");}
nivel2_Extras_TextoCorazones.onclick=function(){DesapareceYColor(nivel3_Extras_TextoCorazones,"lin3",this,"bin2");}
nivel2_Extras_EmojisSeries.onclick=function(){DesapareceYColor(nivel3_Extras_EmojisSeries,"lin3",this,"bin2");}
