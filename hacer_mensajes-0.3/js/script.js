



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

//---------------------------------------------------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------------------------------------------------

//------------------------------------------------Nivel0-----------------------------------------------------




//------------------------------------------------Extras_PatronCorazones-----------------------------------------------------
//-----------------
var Ext_Ptr_Direc_Normal =document.getElementById("Ext_Ptr_Direc_Normal");
var Ext_Ptr_Direc_Derecha =document.getElementById("Ext_Ptr_Direc_Derecha");
var Ext_Ptr_Direc_Izquierda =document.getElementById("Ext_Ptr_Direc_Izquierda");

var Ext_Ptr_OtroEmoji =document.getElementById("Ext_Ptr_OtroEmoji");
var Ext_Ptr_OtroEmoji_btn =document.getElementById("Ext_Ptr_OtroEmoji_btn");

var Ext_Ptr_CantidadElementos =document.getElementById("Ext_Ptr_CantidadElementos");
var Ext_Ptr_CantidadElementos_btn =document.getElementById("Ext_Ptr_CantidadElementos_btn");

var Ext_Ptr_Retroseso =document.getElementById("Ext_Ptr_Retroseso");
var Ext_Ptr_Borrar =document.getElementById("Ext_Ptr_Borrar");

var Ext_Ptr_SaltoLinea_Si =document.getElementById("Ext_Ptr_SaltoLinea_Si");
var Ext_Ptr_SaltoLinea_No =document.getElementById("Ext_Ptr_SaltoLinea_No");
//------------





//----------------------------Extras_CorazonCorazones--y -------Extras_TextoCorazones--------------------------------------------

var Ext_Cora_OtroEmoji =document.getElementById("Ext_Cora_OtroEmoji");
var Ext_Cora_OtroEmoji_btn =document.getElementById("Ext_Cora_OtroEmoji_btn");

var Ext_Cora_Retroseso =document.getElementById("Ext_Cora_Retroseso");
var Ext_Cora_Adelante =document.getElementById("Ext_Cora_Adelante");


var Ext_Text_OtroEmoji =document.getElementById("Ext_Text_OtroEmoji");
var Ext_Text_OtroEmoji_btn =document.getElementById("Ext_Text_OtroEmoji_btn");

var Ext_Text_Retroseso =document.getElementById("Ext_Text_Retroseso");
var Ext_Text_Adelante =document.getElementById("Ext_Text_Adelante");

// ----------------------------------------------Dias------------------------------------------------------

var nivel2_Dias_BuenosDias =document.getElementById("nivel2_Dias_BuenosDias");
var nivel2_Dias_BuenosDiasHot =document.getElementById("nivel2_Dias_BuenosDiasHot");


var nivel3_Dias_Ojala_Besarnos =document.getElementById("nivel3_Dias_Ojala_Besarnos");
var nivel3_Dias_Ojala_Abrazarnos =document.getElementById("nivel3_Dias_Ojala_Abrazarnos");
var nivel3_Dias_Ojala_EstarJuntos =document.getElementById("nivel3_Dias_Ojala_EstarJuntos");
var nivel3_Dias_Ojala_Dormir =document.getElementById("nivel3_Dias_Ojala_Dormir");
var nivel3_Dias_Ojala_Despertarte =document.getElementById("nivel3_Dias_Ojala_Despertarte");

var nivel3_Dias_OjalaHot_Besarnos =document.getElementById("nivel3_Dias_OjalaHot_Besarnos");
var nivel3_Dias_OjalaHot_Manosearnos =document.getElementById("nivel3_Dias_OjalaHot_Manosearnos");
var nivel3_Dias_OjalaHot_Hacerlo =document.getElementById("nivel3_Dias_OjalaHot_Hacerlo");


// -----------------------------------------Noche---------------------------------------------------
var nivel2_Noches_BuenasNoches =document.getElementById("nivel2_Noches_BuenasNoches");
var nivel2_Noches_BuenasNochesHot =document.getElementById("nivel2_Noches_BuenasNochesHot");

var nivel3_Noches_Ojala_Besarnos =document.getElementById("nivel3_Noches_Ojala_Besarnos");
var nivel3_Noches_Ojala_Abrazarnos =document.getElementById("nivel3_Noches_Ojala_Abrazarnos");
var nivel3_Noches_Ojala_EstarJuntos =document.getElementById("nivel3_Noches_Ojala_EstarJuntos");
var nivel3_Noches_Ojala_Dormir =document.getElementById("nivel3_Noches_Ojala_Dormir");
var nivel3_Noches_Ojala_Soñar =document.getElementById("nivel3_Noches_Ojala_Soñar");

var nivel3_Noches_OjalaHot_Besarnos =document.getElementById("nivel3_Noches_OjalaHot_Besarnos");
var nivel3_Noches_OjalaHot_Manosearnos =document.getElementById("nivel3_Noches_OjalaHot_Manosearnos");
var nivel3_Noches_OjalaHot_Hacerlo =document.getElementById("nivel3_Noches_OjalaHot_Hacerlo");

//-----------------------------------Dias Y Noche------------------------------------------------
var nivel2_Ojala_Futuro =document.getElementById("nivel2_Ojala_Futuro");
 
var nivel3_Ojala_Wonitos_Besarnos =document.getElementById("nivel3_Ojala_Wonitos_Besarnos");
var nivel3_Ojala_Wonitos_Abrazarnos =document.getElementById("nivel3_Ojala_Wonitos_Abrazarnos");
var nivel3_Ojala_Wonitos_EstarJuntos =document.getElementById("nivel3_Ojala_Wonitos_EstarJuntos");

var nivel3_Ojala_Hot_Besar =document.getElementById("nivel3_Ojala_Hot_Besar");
var nivel3_Ojala_Hot_Manosear =document.getElementById("nivel3_Ojala_Hot_Manosear");
var nivel3_Ojala_Hot_Hacerlo =document.getElementById("nivel3_Ojala_Hot_Hacerlo");
var nivel3_Ojala_Hot_Eyacular =document.getElementById("nivel3_Ojala_Hot_Eyacular");

//-----------------------------------Alagos------------------------------------------------
var nivel2_Alagos_Teamo =document.getElementById("nivel2_Alagos_Teamo");

var nivel3_Alagos_Wonitos_EstasBien =document.getElementById("nivel3_Alagos_Wonitos_EstasBien");
var nivel3_Alagos_Wonitos_Eres =document.getElementById("nivel3_Alagos_Wonitos_Eres");
var nivel3_Alagos_Wonitos_MeEncantaTu =document.getElementById("nivel3_Alagos_Wonitos_MeEncantaTu");

var nivel3_Alagos_Hot_Estas =document.getElementById("nivel3_Alagos_Hot_Estas");
var nivel3_Alagos_Hot_MeEncantaQueSeas =document.getElementById("nivel3_Alagos_Hot_MeEncantaQueSeas");
var nivel3_Alagos_Hot_MeEncantaTu =document.getElementById("nivel3_Alagos_Hot_MeEncantaTu");