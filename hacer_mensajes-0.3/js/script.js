



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

//---------------------------------------------------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------------------------------------------------

//------------------------------------------------Nivel0-----------------------------------------------------

var nivel0_Anterior=document.getElementById("nivel0_Anterior");
var nivel0_Siguiente=document.getElementById("nivel0_Siguiente");
var nivel0_Borrar=document.getElementById("nivel0_Borrar");
var nivel0_BorrarTodos=document.getElementById("nivel0_BorrarTodos");
var nivel0_Primero=document.getElementById("nivel0_Primero");
var nivel0_Final=document.getElementById("nivel0_Final");
var nivel0_Texto=document.getElementById("nivel0_Texto");
var nivel0_Texto_btn=document.getElementById("nivel0_Texto_btn");
var nivel0_LaPosicion=document.getElementById("nivel0_LaPosicion");


//------------------------------------------------Extras_EmojisSeries-----------------------------------------------------

var Ext_EmojisSeries_OtroEmoji=document.getElementById("Ext_EmojisSeries_OtroEmoji");
var Ext_EmojisSeries_OtroEmoji_btn=document.getElementById("Ext_EmojisSeries_OtroEmoji_btn");

var Ext_EmojisSeries_OtraSerie=document.getElementById("Ext_EmojisSeries_OtraSerie");
var Ext_EmojisSeries_OtroSerie_btn=document.getElementById("Ext_EmojisSeries_OtraSerie_btn");

//------------------------------------------------Extras_PatronCorazones-----------------------------------------------------
//-----------------
var Ext_Ptr_Direc_Normal =document.getElementById("Ext_Ptr_Direc_Normal");
var Ext_Ptr_Direc_Derecha =document.getElementById("Ext_Ptr_Direc_Derecha");
var Ext_Ptr_Direc_Izquierda =document.getElementById("Ext_Ptr_Direc_Izquierda");

var Ext_Ptr_CantidadElementos =document.getElementById("Ext_Ptr_CantidadElementos");
var Ext_Ptr_CantidadElementos_btn =document.getElementById("Ext_Ptr_CantidadElementos_btn");

var Ext_Ptr_Retroseso =document.getElementById("Ext_Ptr_Retroseso");
var Ext_Ptr_Borrar =document.getElementById("Ext_Ptr_Borrar");

var Ext_Ptr_SaltoLinea_Si =document.getElementById("Ext_Ptr_SaltoLinea_Si");
var Ext_Ptr_SaltoLinea_No =document.getElementById("Ext_Ptr_SaltoLinea_No");


//----------------------------Extras_CorazonCorazones--y -------Extras_TextoCorazones--------------------------------------------

var Ext_Cora_OtroEmoji =document.getElementById("Ext_Cora_OtroEmoji");
var Ext_Cora_OtroEmoji_btn =document.getElementById("Ext_Cora_OtroEmoji_btn");

var Ext_Cora_Retroseso =document.getElementById("Ext_Cora_Retroseso");
var Ext_Cora_Adelante =document.getElementById("Ext_Cora_Adelante");

var Ext_Cora_OtraSerie=document.getElementById("Ext_Cora_OtraSerie")
var Ext_Cora_OtraSerie_btn=document.getElementById("Ext_Cora_OtraSerie_btn")


var Ext_Text_Texto =document.getElementById("Ext_Text_Texto");
var Ext_Text_Texto_btn =document.getElementById("Ext_Text_Texto_btn");

var Ext_Text_OtroEmoji =document.getElementById("Ext_Text_OtroEmoji");
var Ext_Text_OtroEmoji_btn =document.getElementById("Ext_Text_OtroEmoji_btn");

var Ext_Text_Retroseso =document.getElementById("Ext_Text_Retroseso");
var Ext_Text_Adelante =document.getElementById("Ext_Text_Adelante");

var Ext_Text_OtraSerie=document.getElementById("Ext_Text_OtraSerie");
var Ext_Text_OtraSerie_btn=document.getElementById("Ext_Text_OtraSerie_btn");
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

//----------------------------------Emojis Especiales------------------------------------------------
var emoj_esp_Todo=document.getElementById("emoj_esp_Todo");
var emoj_esp_TodoR=document.getElementById("emoj_esp_TodoR");
var emoj_esp_Estrella=document.getElementById("emoj_esp_Estrella");
var emoj_esp_Flor=document.getElementById("emoj_esp_Flor");
var emoj_esp_Rojo=document.getElementById("emoj_esp_Rojo");
var emoj_esp_Rosa=document.getElementById("emoj_esp_Rosa");
var emoj_esp_Colores=document.getElementById("emoj_esp_Colores");
var emoj_esp_Random=document.getElementById("emoj_esp_Random");


emoj_esp_Todo.onclick=function(){EmojisEspeciales(1);}
emoj_esp_TodoR.onclick=function(){EmojisEspeciales(2);}
emoj_esp_Estrella.onclick=function(){EmojisEspeciales(3);}
emoj_esp_Flor.onclick=function(){EmojisEspeciales(4);}
emoj_esp_Rojo.onclick=function(){EmojisEspeciales(5);}
emoj_esp_Rosa.onclick=function(){EmojisEspeciales(6);}
emoj_esp_Colores.onclick=function(){EmojisEspeciales(7);}
emoj_esp_Random.onclick=function(){EmojisEspeciales(8);}



//---------------------------------------------------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------------------------------------------------
//--------------------------------------------------Funciones Apoyo----------------------------------------------------------------------

//agregegar Un elemento al final de una Array
function Arr_AgregarFinal(){}

//funcion que agrega lo que le piden a el parrafo
function AgregarContenido(algoqueagregar){
	var ElParrafo=document.getElementById("ElParrafo");
	if (algoqueagregar=="br"){
		let BR=document.createElement("br");
		ElParrafo.appendChild(BR);
		
	
	}else{
		var contenido_para_escribir=document.createTextNode(algoqueagregar);
			if (algoqueagregar===undefined){
				contenido_para_escribir="xd";
				console.log("contenido_para_escribir", contenido_para_escribir);
			}
		ElParrafo.appendChild(contenido_para_escribir);
	}
}

//numero Random // Retorna un entero aleatorio entre min (incluido) y max (excluido)
function  NumeroRandom(min, max) {
	return Math.floor(Math.random() * (max - min)) + min;
}

//Elemento de Array Random
function RandomArray(UnaArray){
	return UnaArray[NumeroRandom(0, UnaArray.length)]
}

//revision de Palabras Claves
function RevisarPalabrasClaves(algoquerevisar,posicion){
	//funcion de apoyo
	function PonerEmojiCorrecto(UnaArray,pos){
		while(pos>UnaArray.length-1){
			pos=pos-UnaArray.length;	
		}
		return UnaArray[pos];
	}
	let LoQueRegresa;
	if (algoquerevisar=="Todo"){ LoQueRegresa=PonerEmojiCorrecto(Arr_Cora_Todos,posicion);}
	else if (algoquerevisar=="TodoR"){ LoQueRegresa=PonerEmojiCorrecto(Arr_Cora_Todos_Reversa,posicion);}
	else if (algoquerevisar=="Rosa"){ LoQueRegresa=PonerEmojiCorrecto(Arr_Cora_Rosas,posicion);}
	else if (algoquerevisar=="Flor"){ LoQueRegresa=PonerEmojiCorrecto(Arr_Flores,posicion);}
	else if (algoquerevisar=="Estrella"){ LoQueRegresa=PonerEmojiCorrecto(Arr_Estrellas,posicion);}
	else if (algoquerevisar=="Rojo"){ LoQueRegresa=PonerEmojiCorrecto(Arr_Cora_Rojos,posicion);}
	else if (algoquerevisar=="Colores"){ LoQueRegresa=PonerEmojiCorrecto(Arr_Cora_Colores,posicion);}
	else if (algoquerevisar=="Random"){ LoQueRegresa=RandomArray(Emojis_Corazones_Todos);}
	else { LoQueRegresa=algoquerevisar;}

	return LoQueRegresa;
}

//------------------------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------------------------
//--------------------------------------------------Array de Emojis----------------------------------------------------------------------
//funcion que me crea las array que quiero
function ArrayCreator(UnaArray){
	let UnaArrayDePaso=new Array();
	for (let i = UnaArray.length - 2; i > 0; i--) {
		UnaArrayDePaso.push(UnaArray[i]);
	}
	let UnaArrayEntrega=new Array().concat(UnaArray.concat(UnaArrayDePaso));
	return UnaArrayEntrega;
	
}
//bases
var Emojis_Estrellas=new Array ("✨","⭐","🌟","💫");
var Emojis_Espacio=new Array ("☄️","🌙","🌕","🪐");
var Emojis_Flores=new Array ("🌸","🌼","🌷","🌹","🌺","🌻");
var Emojis_Otros=new Array ("☀️","🌈","⛱️","☁️","💎","💍","🥰","🥺","♥️");
var Emoji_Co=new Array("♥️");
var Emojis_Corazones_Colores=new Array("❤️","🧡","💛","💚","💙","💜");
var Emojis_Corazones_Rojos=new Array("💘","❣️","💓");
var Emojis_Corazones_Rosas=new Array("💕","💞","💖","💗","💝");
var Emojis_Corazones_Otros=new Array("💟","🤍","💌");
var Emojis_Corazones_Todos=new Array().concat(Emoji_Co.concat(Emojis_Corazones_Colores.concat(Emojis_Corazones_Rojos.concat(Emojis_Corazones_Rosas.concat(Emojis_Corazones_Otros)))));


function InvertirArray(UnaArray){
	let OtraArray=new Array();
	for (let i = UnaArray.length - 1; 0 <= i ; i--) {
		OtraArray.push(UnaArray[i]);
	}
	return OtraArray;
}
var Emojis_Corazones_Todos_Reversa=InvertirArray(Emojis_Corazones_Todos);

//definitivas
var Arr_Cora_Todos=ArrayCreator(Emojis_Corazones_Todos);
var Arr_Cora_Todos_Reversa=ArrayCreator(Emojis_Corazones_Todos_Reversa);
var Arr_Cora_Rosas=ArrayCreator(Emojis_Corazones_Rosas);
var Arr_Flores=ArrayCreator(Emojis_Flores);

var Arr_Estrellas=Emojis_Estrellas;
var Arr_Cora_Rojos=Emojis_Corazones_Rojos;
var Arr_Cora_Colores=Emojis_Corazones_Colores;

//--------------------------------------------------Patron Emojis----------------------------------------------------------------------
//varibles 
var Patron_Array=new Array();
var Patron_Direccion="normal";
var Patron_Renglones=true;
var Patron_CantidadElementos=10;

//funcion para mover la array de Patron_Arayy a la derecha o izquierda
function Mover_Patron_Array(direccion){
	if(Patron_Direccion=="izquierda"){
		let aux=Patron_Array[0];
		for(var i = 0; i < Patron_Array.length-1; i++) {
	  		Patron_Array[i]=Patron_Array[i+1]; 
		}
		Patron_Array[Patron_Array.length-1]=aux;
	}else if (Patron_Direccion=="derecha"){
		let aux=Patron_Array[Patron_Array.length-1];
		for (var i =Patron_Array.length-1; i >0; i--) {
	 		Patron_Array[i]=Patron_Array[i-1];   
		}
		Patron_Array[0]=aux;
	}
}
//funcion que me pasa la array de emojis a una cadena de texto
function HacerCadena_Patron_Array(posicion){
	let UnaCadena="";
	for (let i =0 ; i <=Patron_Array.length - 1; i++) {
		
		let AgregarCadena=RevisarPalabrasClaves(Patron_Array[i],posicion);

		UnaCadena=UnaCadena+AgregarCadena;
	}	

	return UnaCadena;
}

//escribir array varias veces dependiendo del patron--ESTA ES LA BUENA
function EscribirArray(){
	document.getElementById("ElParrafo").innerHTML="";;
	var Repuesto_Patron_Array=new Array().concat(Patron_Array);
	
	for ( var contador=0; contador <= Patron_CantidadElementos; contador++) {
		
		let EsCadena= HacerCadena_Patron_Array(contador)	
		AgregarContenido(EsCadena);

		if(Patron_Direccion=="derecha"){			
			Mover_Patron_Array("derecha"); 
		}
		else if(Patron_Direccion=="izquierda"){
			Mover_Patron_Array("izquierda");  
		}	
		if(Patron_Renglones){
			AgregarContenido("br");	
		}
	}

	
	Patron_Array=Repuesto_Patron_Array;
}

//funcion de los botones de emojis /-/--/-/
function AgregarEmoji(NumArray,NumPos){
	let AlgunaArray;
	if(NumArray==1){AlgunaArray=Emojis_Estrellas;}
	if(NumArray==2){AlgunaArray=Emojis_Espacio;}
	if(NumArray==3){AlgunaArray=Emojis_Flores;}
	if(NumArray==4){AlgunaArray=Emojis_Otros;}
	if(NumArray==5){AlgunaArray=Emojis_Corazones_Colores;}
	if(NumArray==6){AlgunaArray=Emojis_Corazones_Rojos;}
	if(NumArray==7){AlgunaArray=Emojis_Corazones_Rosas;}
	if(NumArray==8){AlgunaArray=Emojis_Corazones_Otros;}

	Patron_Array.push(AlgunaArray[NumPos]);
	
	EscribirArray();
}
function EmojisEspeciales(num){
	if(num==1){Patron_Array.push("Todo");}
	if(num==2){Patron_Array.push("TodoR");}
	if(num==3){Patron_Array.push("Estrella");}
	if(num==4){Patron_Array.push("Flor");}
	if(num==5){Patron_Array.push("Rojo");}
	if(num==6){Patron_Array.push("Rosa");}
	if(num==7){Patron_Array.push("Colores");}
	if(num==8){Patron_Array.push("Random");}
	console.log("Patron_Array", Patron_Array);

	EscribirArray();
}




//funcion de los textos
 var Textos_Array=new Array();
function AgregarTexto(){


}
//-----------------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------------
//------------------------------------------------Extras_PatronCorazones-----------------------------------------------------
//-----------------
Ext_Ptr_Direc_Normal .onclick=function(){Patron_Direccion="normal";EscribirArray();}
Ext_Ptr_Direc_Derecha .onclick=function(){Patron_Direccion="derecha";EscribirArray();}
Ext_Ptr_Direc_Izquierda .onclick=function(){Patron_Direccion="izquierda";EscribirArray();}


Ext_Ptr_CantidadElementos_btn .onclick=function(){
	Patron_CantidadElementos=parseInt(Ext_Ptr_CantidadElementos.value)-1;
	EscribirArray();
}

Ext_Ptr_Retroseso .onclick=function(){
	Patron_Array.pop(); 	 EscribirArray();
} 
Ext_Ptr_Borrar .onclick=function(){
	Patron_Array=new Array();   	EscribirArray();
}

Ext_Ptr_SaltoLinea_Si.onclick=function(){Patron_Renglones=true;EscribirArray();}
Ext_Ptr_SaltoLinea_No.onclick=function(){Patron_Renglones=false;EscribirArray();}

