//---------------------------------------------------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------------------------------------------------
//-------------------------------------------Variables----------------------------------------------------------------------
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
var nivel0_Clave=document.getElementById("nivel0_Clave");
var nivel0_Clave_btn=document.getElementById("nivel0_Clave_btn");
nivel0_Clave.value="";
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

//-----------------------------------Ojala------------------------------------------------
var nivel2_Ojala_Futuro =document.getElementById("nivel2_Ojala_Futuro");
 
var nivel3_Ojala_Wonitos_Besarnos =document.getElementById("nivel3_Ojala_Wonitos_Besarnos");
var nivel3_Ojala_Wonitos_Abrazarnos =document.getElementById("nivel3_Ojala_Wonitos_Abrazarnos");
var nivel3_Ojala_Wonitos_EstarJuntos =document.getElementById("nivel3_Ojala_Wonitos_EstarJuntos");

var nivel3_Ojala_Hot2_Besarnos =document.getElementById("nivel3_Ojala_Hot2_Besarnos");
var nivel3_Ojala_Hot2_Manosearnos =document.getElementById("nivel3_Ojala_Hot2_Manosearnos");
var nivel3_Ojala_Hot2_Hacerlo =document.getElementById("nivel3_Ojala_Hot2_Hacerlo");

var nivel3_Ojala_Hot_Lamerte =document.getElementById("nivel3_Ojala_Hot_Lamerte");
var nivel3_Ojala_Hot_Tocarte =document.getElementById("nivel3_Ojala_Hot_Tocarte");
var nivel3_Ojala_Hot_Eyacular =document.getElementById("nivel3_Ojala_Hot_Eyacular");

//-----------------------------------Alagos------------------------------------------------
var nivel3_Alagos_Teamo_Teamo =document.getElementById("nivel3_Alagos_Teamo_Teamo");
var nivel3_Alagos_Teamo_Megustas =document.getElementById("nivel3_Alagos_Teamo_Megustas");
var nivel3_Alagos_Teamo_TeamoHot =document.getElementById("nivel3_Alagos_Teamo_TeamoHot");
var nivel3_Alagos_Teamo_MegustasHot =document.getElementById("nivel3_Alagos_Teamo_MegustasHot");

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
var emoj_esp_Lunas=document.getElementById("emoj_esp_Lunas");
var emoj_esp_Random=document.getElementById("emoj_esp_Random");
var emoj_esp_Numeracion=document.getElementById("emoj_esp_Numeracion");


emoj_esp_Todo.onclick=function(){EmojisEspeciales(1);}
emoj_esp_TodoR.onclick=function(){EmojisEspeciales(2);}
emoj_esp_Estrella.onclick=function(){EmojisEspeciales(3);}
emoj_esp_Flor.onclick=function(){EmojisEspeciales(4);}
emoj_esp_Rojo.onclick=function(){EmojisEspeciales(5);}
emoj_esp_Rosa.onclick=function(){EmojisEspeciales(6);}
emoj_esp_Colores.onclick=function(){EmojisEspeciales(7);}
emoj_esp_Random.onclick=function(){EmojisEspeciales(8);}
emoj_esp_Numeracion.onclick=function(){EmojisEspeciales(9);}
emoj_esp_Lunas.onclick=function(){EmojisEspeciales(10);}





//---------------------------------------------------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------------------------------------------------
//--------------------------------------------------Funciones Apoyo----------------------------------------------------------------------
//---------------------------------------------------------------------------------------------------------------------------------


//funcion que agrega lo que le piden a el parrafo
function AgregarContenido(algoqueagregar){
	var ElParrafo=document.getElementById("ElParrafo");
	if (algoqueagregar=="br"){
		let BR=document.createElement("br");
		ElParrafo.appendChild(BR);
	
	}else{
		var contenido_para_escribir=document.createTextNode(algoqueagregar);
		if (algoqueagregar===undefined){
			contenido_para_escribir="lo que se pidio agregar indefenido";
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
function RandomArrayBorrar(UnaArray){
	let Numerito= NumeroRandom(0, UnaArray.length);
	let ElementoRandom=UnaArray[Numerito];
	UnaArray.splice(Numerito, 1);	
	return ElementoRandom;
}

//funcion que devuelve verdadero o falso aleatoriamente
function RandomBolini(){
	let UnNum=NumeroRandom(0,2);
	let UnBool=true;
	if(UnNum==0){
		UnBool=false;
	}else if(UnNum==1){
		UnBool=true;
	}
	return UnBool;

}
//funcion que cambia el centrado del texto
function justificacion(nombre){
	let ElParrafo=document.getElementById("ElParrafo");
	if(nombre=="centro"){
		ElParrafo.classList.remove("justificadoizquierda");
		ElParrafo.classList.add("justificadocentro");

	}else{
		ElParrafo.classList.remove("justificadocentro");
		ElParrafo.classList.add("justificadoizquierda");
	}
}


//revision de Palabras Claves------------------------------------------------------
function RevisarPalabrasClaves(algoquerevisar,posicion){
	
	//funcion de apoyo
	function PonerEmojiCorrecto(UnaArray,pos){
		while(pos>UnaArray.length-1){
			pos=pos-UnaArray.length;	
		}
		return UnaArray[pos];
	}

	let LoQueRegresa;
	
	//revisa los emojis especiales personalizados
	for (let i =0 ; i<=EmojisSeries_Array_Arrays.length-1; i++) {
		if((algoquerevisar==EmojisSeries_Elementos[i].id)&&(LoQueRegresa===undefined||LoQueRegresa=="")){
			LoQueRegresa=PonerEmojiCorrecto(EmojisSeries_Array_Arrays[i],posicion)	
		}
	}
	
	//revisas mis emojis especiales
	if (algoquerevisar=="Todo"){ LoQueRegresa=PonerEmojiCorrecto(Arr_Cora_Todos,posicion);}
	else if (algoquerevisar=="TodoR"){ LoQueRegresa=PonerEmojiCorrecto(Arr_Cora_Todos_Reversa,posicion);}
	else if (algoquerevisar=="Rosa"){ LoQueRegresa=PonerEmojiCorrecto(Arr_Cora_Rosas,posicion);}
	else if (algoquerevisar=="Flor"){ LoQueRegresa=PonerEmojiCorrecto(Arr_Flores,posicion);}
	else if (algoquerevisar=="Estrella"){ LoQueRegresa=PonerEmojiCorrecto(Arr_Estrellas,posicion);}
	else if (algoquerevisar=="Rojo"){ LoQueRegresa=PonerEmojiCorrecto(Arr_Cora_Rojos,posicion);}
	else if (algoquerevisar=="Colores"){ LoQueRegresa=PonerEmojiCorrecto(Arr_Cora_Colores,posicion);}
	else if (algoquerevisar=="Lunas"){ LoQueRegresa=PonerEmojiCorrecto(Arr_Lunas,posicion);}
	else if (algoquerevisar=="Random"){ 
		if(Emojis_Corazones_Todos_C.length==0){
			Emojis_Corazones_Todos_C=new Array().concat(Emojis_Corazones_Todos);	
		}
		LoQueRegresa=RandomArrayBorrar(Emojis_Corazones_Todos_C);
	}
	else if (algoquerevisar=="Numeracion"){ LoQueRegresa=PonerEmojiCorrecto(Arr_Numeros,posicion);}
	
	if (LoQueRegresa===undefined|| LoQueRegresa==""){ 
		LoQueRegresa=algoquerevisar;		
	}

	return LoQueRegresa;
}
//------------------------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------------------------
//--------------------------------------------------Array de Emojis----------------------------------------------------------------------
//--------------------------------------------------------------------------------


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
var Emojis_Dias=new Array("☀️","🌤️","🌅","🌄","🌈","☁️");
var Emojis_Otros=new Array ("⛱️","💎","💍","🥰","🥺","🦋","🪁","🎀","♥️");
var Emoji_Co=new Array("♥️");
var Emojis_Corazones_Colores=new Array("❤️","🧡","💛","💚","💙","💜");
var Emojis_Corazones_Rojos=new Array("💘","❣️","💓");
var Emojis_Corazones_Rosas=new Array("💕","💞","💖","💗","💝");
var Emojis_Corazones_Otros=new Array("💟","🤍","💌",);
var Emojis_Hot=new Array("🔥");
var Emojis_Corazones_Todos=new Array().concat(Emoji_Co.concat(Emojis_Corazones_Colores.concat(Emojis_Corazones_Rojos.concat(Emojis_Corazones_Rosas.concat(Emojis_Corazones_Otros)))));
var Emojis_Corazones_Todos_C=new Array().concat(Emojis_Corazones_Todos);
var Emojis_Lunas=new Array("🌕","🌖","🌗","🌘","🌑","🌒","🌓","🌔")

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
var Arr_Lunas=Emojis_Lunas;
var Arr_Numeros=new Array("1️⃣","2️⃣","3️⃣","4️⃣","5️⃣","6️⃣","7️⃣","8️⃣","9️⃣","🔟");

//------------------------------------------------------------------------------------------------------------------------
//--------------------------------------------------Textos Basico nivel0----------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------------------------
//variables
var Textos_Array=new Array();
var nivel0_contador=0;
var Textos_Codigo_Array=new Array();

//funciones de los botones
nivel0_Anterior.onclick=function(){nivel0_contador--;nivel0_actualizar();}
nivel0_Siguiente.onclick=function(){nivel0_contador++;nivel0_actualizar();}

nivel0_Borrar.onclick=function(){
	Textos_Array[nivel0_contador]="";
	Textos_Codigo_Array[nivel0_contador]=",";
	nivel0_contador++;
	nivel0_actualizar()
}

nivel0_BorrarTodos.onclick=function(){
	Textos_Array=new Array();
	Textos_Codigo_Array=new Array();
	nivel0_contador=1;
	nivel0_actualizar();
}

nivel0_Primero.onclick=function(){nivel0_contador=0;nivel0_actualizar();}
nivel0_Final.onclick=function(){nivel0_contador=Patron_CantidadElementos-1;nivel0_actualizar();}



nivel0_Texto_btn.onclick=function(){
	Textos_Array[nivel0_contador]=nivel0_Texto.value;
	//si ya estamos en la ultima linea quiero que me agreges otra linea
	if(nivel0_contador==Patron_CantidadElementos-1){
		Patron_CantidadElementos++;
	}

	Textos_Codigo_Array[nivel0_contador]="0";
	nivel0_contador++;
	nivel0_actualizar();
}


//la funcion que da inicio
function nivel0_actualizar(){
	//hacer que el contador sea ciclico
	while(Patron_CantidadElementos<=nivel0_contador){
		nivel0_contador=nivel0_contador-Patron_CantidadElementos;
	}
	while(nivel0_contador<0){
		nivel0_contador=nivel0_contador+Patron_CantidadElementos;
	}
	//si la Array Codigo Tiene Espacios Vacios los vuelve espacios ""
	for (let i =0; i < Patron_CantidadElementos; i++) {
		if(Textos_Codigo_Array[i]===undefined||Textos_Codigo_Array[i]===""){
			Textos_Codigo_Array[i]=",";
		}
	}

	//me pone la array de codigo en codigo
	var nivel0_UnaCadena="";
	for (let i =0 ; i <=Textos_Codigo_Array.length-1; i++) {	
		let AgregarCadena=Textos_Codigo_Array[i];
		nivel0_UnaCadena=nivel0_UnaCadena+AgregarCadena;
	}
	nivel0_Clave.value=nivel0_UnaCadena;

	//la array de codigo lo pasa a la array detexto
	for (let i =0; i < Textos_Codigo_Array.length-1; i++) {
		let bolini=(Textos_Codigo_Array[i]=="0")

		if(!bolini){
			Textos_Array[i]=nivel0_revision_codigo(Textos_Codigo_Array[i]);
		}
	}

	//me escribe la posicion en que estoy y ya inicia
	nivel0_LaPosicion.innerHTML=nivel0_contador+1+" de "+Patron_CantidadElementos;
	EscribirArray();
}

//
nivel0_Clave_btn.onclick=function(){
	//pongo la clave del input en la array de codigo
	Textos_Codigo_Array=Array.from(nivel0_Clave.value);
	//me aseguro que la cantidad de renglones sea la cantidad de caracteres del codigo
	Patron_CantidadElementos=Textos_Codigo_Array.length;
	//hago que la array de textos tenga la misma cantidad de elemtnos que las arrays de codigos
	//es decir borro los que esten despues
	Textos_Array.splice(Textos_Codigo_Array.length);
	console.log("===Textos_Array", Textos_Array);
	console.log("===Textos_Codigo_Array.length", Textos_Codigo_Array.length);
	nivel0_actualizar();

}




//------------------------------------------------------------------------------------------------------------------------
//--------------------------------------------------Patron Emojis----------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------------------------
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

//ES LA QUE INICIA TODO/////////////////////////////////////////////////////////
function EscribirArray(){
	justificacion("izq");	
	document.getElementById("ElParrafo").innerHTML="";

	var Repuesto_Patron_Array=new Array().concat(Patron_Array);
	ReiniciarFormarOraciones();
	for ( var contador=0; contador < Patron_CantidadElementos; contador++) {
		
		let EsCadena= HacerCadena_Patron_Array(contador);
		let OtraCadena=Textos_Array[contador];
		if(OtraCadena===undefined){
			OtraCadena="";
		}

		let CadenaEscribir=EsCadena+" "+OtraCadena	
		AgregarContenido(CadenaEscribir);

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
}////////////////////////////////////////////////////////////////////////

//funcion de los botones de emojis /-/--/-/
function AgregarEmoji(NumArray,NumPos){
	let AlgunaArray;
	if(NumArray==1){AlgunaArray=Emojis_Estrellas;}
	if(NumArray==2){AlgunaArray=Emojis_Espacio;}
	if(NumArray==3){AlgunaArray=Emojis_Flores;}
	if(NumArray==10){AlgunaArray=Emojis_Dias;}
	if(NumArray==4){AlgunaArray=Emojis_Otros;}
	if(NumArray==5){AlgunaArray=Emojis_Corazones_Colores;}
	if(NumArray==6){AlgunaArray=Emojis_Corazones_Rojos;}
	if(NumArray==7){AlgunaArray=Emojis_Corazones_Rosas;}
	if(NumArray==8){AlgunaArray=Emojis_Corazones_Otros;}
	if(NumArray==9){AlgunaArray=Emojis_Hot;}

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
	if(num==9){Patron_Array.push("Numeracion");}
	if(num==10){Patron_Array.push("Lunas");}
	console.log("Patron_Array", Patron_Array);

	EscribirArray();
}


//-----------------------------------------------------------------------------------------------------
//------------------------------------------------Extras_PatronCorazones-----------------------------------------------------
//-----------------------------------------------------------------------------------------------------

Ext_Ptr_Direc_Normal .onclick=function(){Patron_Direccion="normal";EscribirArray();}
Ext_Ptr_Direc_Derecha .onclick=function(){Patron_Direccion="derecha";EscribirArray();}
Ext_Ptr_Direc_Izquierda .onclick=function(){Patron_Direccion="izquierda";EscribirArray();}


Ext_Ptr_CantidadElementos_btn .onclick=function(){
	if(999<Ext_Ptr_CantidadElementos.value){
		Ext_Ptr_CantidadElementos.value=999;		
	}
	if(Ext_Ptr_CantidadElementos.value<=0){
		Ext_Ptr_CantidadElementos.value=10;		
	}
	if(isNaN(Ext_Ptr_CantidadElementos.value) ){
		Ext_Ptr_CantidadElementos.value=10;
	}		
	
	Patron_CantidadElementos=parseInt(Ext_Ptr_CantidadElementos.value);
	nivel0_actualizar();
}

Ext_Ptr_Retroseso .onclick=function(){
	Patron_Array.pop(); 	 EscribirArray();
} 
Ext_Ptr_Borrar .onclick=function(){
	Patron_Array=new Array();   	EscribirArray();
}

Ext_Ptr_SaltoLinea_Si.onclick=function(){Patron_Renglones=true;EscribirArray();}
Ext_Ptr_SaltoLinea_No.onclick=function(){Patron_Renglones=false;EscribirArray();}


//-----------------------------------------------------------------------------------------------------
//------------------------------------------------Extras_EmojisSeries-----------------------------------------------------
//-----------------------------------------------------------------------------------------------------

//emoji nuevo
var Ext_EmojisSeries_OtroEmoji_Contador=0;
Ext_EmojisSeries_OtroEmoji_btn.onclick=function(){

	let boton=document.createElement("button")
	let LaId="z_"+Ext_EmojisSeries_OtroEmoji_Contador;
	boton.classList.add("morado"); 
	boton.classList.add("mini"); 
	boton.innerHTML=Ext_EmojisSeries_OtroEmoji.value;
	boton.setAttribute("id",LaId);	
	document.getElementById("contEmojis").appendChild(boton);
	
	document.getElementById(LaId).onclick=function(){
		Patron_Array.push(document.getElementById(LaId).innerHTML);
		EscribirArray();
	}		
	Ext_EmojisSeries_OtroEmoji.value="";
	Ext_EmojisSeries_OtroEmoji_Contador++;
	EscribirArray();

}
//emoji especial nuevo
var EmojisSeries_Array_Arrays=new Array();
var EmojisSeries_Elementos=new Array();

var Ext_EmojisSeries_OtroSerie_Contador=0;

Ext_EmojisSeries_OtroSerie_btn.onclick=function(){	
	let Algo=Ext_EmojisSeries_OtraSerie.value.split(",");
	if(Algo.length<=1){//--------------------------poor si no se separa con comas
		Algo=Array.from(Ext_EmojisSeries_OtraSerie.value)
	}
	for (var i = 0; i < Algo.length; i++) {//------por si dejo espacios vacios entre comas
		if(Algo[i]==""){Algo[i]="  "}
	}
	console.log("Algo", Algo);
	
	let LaClase="";
	if(Algo[0]=="-"||Algo[0]=="$"||Algo[0]=="."){			
		Algo.shift();
		let otro= ArrayCreator(Algo);
		EmojisSeries_Array_Arrays.push(otro);
		LaClase="estaactivado"
	}else{
		EmojisSeries_Array_Arrays.push(Algo);
		LaClase="botonrosa"
	}
	console.log("EmojisSeries_Array_Arrays", EmojisSeries_Array_Arrays);

	let LaId="btn_serie_"+Ext_EmojisSeries_OtroSerie_Contador;
	let boton=document.createElement("button")
	boton.classList.add(LaClase); 
	boton.classList.add("mini"); 
	boton.setAttribute("id",LaId);
	boton.innerHTML=EmojisSeries_Array_Arrays[Ext_EmojisSeries_OtroSerie_Contador][0];	
	document.getElementById("contEmojis").appendChild(boton);

	let Elemento=document.getElementById(LaId)
	EmojisSeries_Elementos.push(Elemento);
	console.log("EmojisSeries_Elementos", EmojisSeries_Elementos);
	console.log();

	//se agrega el onclick
	EmojisSeries_Elementos[Ext_EmojisSeries_OtroSerie_Contador].onclick=function(){
		Patron_Array.push(LaId);
		EscribirArray();
	} 

	Ext_EmojisSeries_OtraSerie.value="";
	Ext_EmojisSeries_OtroSerie_Contador++;
	EscribirArray();
}

//-----------------------------------------------------------------------------------------------------
//-------------------------------------------Diseño de los botones de emojis especiales-----------------------------------------------------
//-----------------------------------------------------------------------------------------------------

var Contador_SetInterval=0;
function CambiarEmojiDeBoton(UnBoton,UnaArray){
	let TotalArray=UnaArray.length;
	let Num=Contador_SetInterval%TotalArray;
	let UnEmoji=UnaArray[Num];
	let AgregarUnEmoji=document.createTextNode(UnEmoji);
	//lo agrega
	UnBoton.innerHTML=UnEmoji;
}
//para todo excepto el boton random
function HacerLosCambiosDeEmojis(){
	CambiarEmojiDeBoton(emoj_esp_Todo,Arr_Cora_Todos);
	CambiarEmojiDeBoton(emoj_esp_TodoR,Arr_Cora_Todos_Reversa);
	CambiarEmojiDeBoton(emoj_esp_Estrella,Arr_Estrellas);
	CambiarEmojiDeBoton(emoj_esp_Flor,Arr_Flores);
	CambiarEmojiDeBoton(emoj_esp_Rojo,Arr_Cora_Rojos);
	CambiarEmojiDeBoton(emoj_esp_Rosa,Arr_Cora_Rosas);
	CambiarEmojiDeBoton(emoj_esp_Colores,Arr_Cora_Colores);
	CambiarEmojiDeBoton(emoj_esp_Lunas,Arr_Lunas);
	// CambiarEmojiDeBoton(emoj_esp_Random,Emojis_Corazones_Todos)
	CambiarEmojiDeBoton(emoj_esp_Numeracion,Arr_Numeros);
	Contador_SetInterval++	
	//revisa los emojis especiales personalizados
	for (let i =0 ; i<=EmojisSeries_Array_Arrays.length-1; i++) {
		CambiarEmojiDeBoton(EmojisSeries_Elementos[i],EmojisSeries_Array_Arrays[i])
	}
}
setInterval(HacerLosCambiosDeEmojis,1000);

//para el boton random
function CambiarEmojiDelBotonRandom(){
	if(Emojis_Corazones_Todos_C.length==0){
		Emojis_Corazones_Todos_C=new Array().concat(Emojis_Corazones_Todos);	
	}
	let UnEmoji=RandomArrayBorrar(Emojis_Corazones_Todos_C);
	emoj_esp_Random.innerHTML=UnEmoji;
	let AgregarUnEmoji=document.createTextNode(UnEmoji);
}

setInterval(CambiarEmojiDelBotonRandom,1000);



//-----------------------------------------------------------------------------------------------------
//-------------------------------------------FORMAR ORACIONES APOYOS DE APOYOS-----------------------------------------------------
//-----------------------------------------------------------------------------------------------------

//funcion que le pass una array con opciones y ella elije por ti "exponencialmente"

function ElegirLog2(UnaArray){
	//si su posicion es mas cercana a 0 es mas probable,
	//mientras su posicion es mas cercana a .lenght es menos probable
	let Total=(2**UnaArray.length);
	var ParaRegresar="";
	let UnNum=NumeroRandom(1,Total);
	
	for (let i = 0; i < UnaArray.length; i++) {
		let LaPotencia=2**i;		
		if(LaPotencia<=UnNum){
			ParaRegresar=UnaArray[UnaArray.length-1-i];
		}
	}
	return ParaRegresar;
}


//funcion que hace sisisisisisima
function sisisis(algo){
	//algo debe ser una string
	let iniciocadena=algo.slice(0,-1);//desde el principio hasta antes del -1
	let fincadena=algo.slice(-1);//cuando se omite el segundo valor es hasta el final
	//lo que pasa si le dan algo en plural
	if(fincadena=="s"){
		fincadena=algo.slice(-2);
		iniciocadena=algo.slice(0,-2);
	}
	let UltimaLetra=iniciocadena.slice(-1);
	let isipisi="xd"
	var regresame=regresame=iniciocadena+isipisi+fincadena;
	
	let ArrayDeSiS=new Array("","isím","isisim","isisisim");// "isisisisim", "isisisisisim"
	isipisi=ElegirLog2(ArrayDeSiS);
	

	//lo que pasa si termina en r por ejemplo rica ->riquisima   que lleva qu el lugar de c
	if(UltimaLetra=="c" && isipisi!=""){
		let principiocadena=iniciocadena.slice(0,-1);
		iniciocadena=principiocadena+"qu"
	}

	//no quiero que divina sea isisisisi
	if(algo=="divina"||algo=="culona"||algo=="exquisita"||algo=="sexy"||algo=="exquisito"){
		isipisi="";
	}

	regresame=iniciocadena+isipisi+fincadena;
	return regresame;
}

//funcion que devuelve nada mucho o muchisimo o muchisismo
function muchoo(algoquehacer){
	let ArrayMucho=new Array("","mucho ","muchísimo ","muchisisimo ", "muchisisisimo ", "muchisisisisimo ", "muchisisisisisimo ");
	if(algoquehacer=="nonada"){
		ArrayMucho.shift();
	}
	let regresame=ElegirLog2(ArrayMucho);
	
	if(algoquehacer=="plural"&&regresame!=""){
		regresame=regresame.slice(0,-1)+"s "
	}
	if(algoquehacer=="femenino-plural"&&regresame!=""){
		regresame=regresame.slice(0,-2)+"as "
	}
	return regresame;
}
function muymuymuy(algo){
	let ArrayMucho=new Array("muy","muy muy","muy muy muy", "muy muy muy muy", "muy muy muy muy muy", "muy muy muy muy muy muy");
	if(algo=="poquito"){
		ArrayMucho=new Array("","muy","muy muy","muy muy muy",);
	}
	let regresame=ElegirLog2(ArrayMucho);
	
	return regresame;
}


//funcion que hace terminacion en cito
function cito(UnaString){
	let Regresame=UnaString;
	if(UnaString=="amor"||UnaString=="corazon"||UnaString=="beso"){
		let UnNum=NumeroRandom(0,2);
		if(UnNum==0){
		 	Regresame=UnaString+"cito";
		}
	}
	return Regresame;
}
//-----------------------------------------------------------------------------------------------------
//------------------------------------------------Array Apoyo ORACIONES-----------------------------------------------------
//-----------------------------------------------------------------------------------------------------
var Apodos_Norm_ConAdj=new Array("crush","niña","novia","Karensita","Karenchita");
var Apodos_Norm_SinAdj=new Array("futura esposa","solecito","corazon","amor","amor de mi vida","todo","cielo","bomboncito");
var Apodos_Norm_ConAdj_c=new Array().concat(Apodos_Norm_ConAdj);
var Apodos_Norm_SinAdj_c=new Array().concat(Apodos_Norm_SinAdj);
var Apodos_Norm_Adj=new Array("hermosa","preciosa");

var Apodos_Hot=new Array("chica","novia","niña");
var Apodos_Hot_copi=new Array().concat(Apodos_Hot);
var Apodos_Hot_Adjetivos=new Array("nalgona","tetona","chichona","sabrosa","rica","culona","sexy","hot","horny","pervertida","caliente","delciosa","exquisita","mala");
var Apodos_Hot_Adjetivos_copi=new Array().concat(Apodos_Hot_Adjetivos);
//-----------------------------------------------------------------------------------------------------
//-------------------------------------------FORMAR ORACIONES APOYOS-----------------------------------------------------
//-----------------------------------------------------------------------------------------------------

//funcion que da apodos normales
function ApodosNormales(){
	var Regresame="mi amor";
	//si las arrays estan vacias me las recreas plox
	if(Apodos_Norm_ConAdj.length==0 && Apodos_Norm_SinAdj.length==0){
		Apodos_Norm_ConAdj=new Array().concat(Apodos_Norm_ConAdj_c);
		Apodos_Norm_SinAdj=new Array().concat(Apodos_Norm_SinAdj_c);
	}

	//elejeir si llevara o no llevara adejtivo------
	let unnum=NumeroRandom(1, Apodos_Norm_ConAdj.length + Apodos_Norm_SinAdj.length+1);	
	
	if(unnum<=Apodos_Norm_ConAdj.length){ //----con adjetivos---
		let UnApodo=RandomArrayBorrar(Apodos_Norm_ConAdj);
		let UnAdj=sisisis(RandomArray(Apodos_Norm_Adj));
		Regresame="mi "+UnApodo+" "+UnAdj;

	}else if(unnum>Apodos_Norm_ConAdj.length){//-----sin adjetivos---
		let UnApodo=RandomArrayBorrar(Apodos_Norm_SinAdj);
		let ElAPodo=cito(UnApodo);

		Regresame="mi "+ElAPodo;
	}
	return Regresame;
}

//funcion que me da los apodos hot
function ApodosHot(){
	var Regresame="mi novia pervertida";
	//si las arrays estan vacias me las recreas plox
	// Apodos_Hot=RecrearArray(Apodos_Hot,Apodos_Hot_copi);
	// Apodos_Hot_Adjetivos=RecrearArray(Apodos_Hot_Adjetivos,Apodos_Hot_Adjetivos_copi);
	if(Apodos_Hot.length==0){
		Apodos_Hot=new Array().concat(Apodos_Hot_copi);
	}
	if(Apodos_Hot_Adjetivos.length==0){
		Apodos_Hot_Adjetivos=new Array().concat(Apodos_Hot_Adjetivos_copi);
	}

	let UnApodo=RandomArrayBorrar(Apodos_Hot);
	let UnAdj=RandomArrayBorrar(Apodos_Hot_Adjetivos);
	let ElAdj=UnAdj;
	if (UnAdj=="nalgona"||UnAdj=="tetona"||UnAdj=="chichona"||UnAdj=="rica") {
		ElAdj=sisisis(UnAdj);
	}
	Regresame="mi "+UnApodo+" "+ElAdj;
	console.log("Regresame", Regresame);
	return Regresame;
}

//funcion para facilitar la llamada de apodos
function Apodacion(Algo){//normalmentete da un apodo normal pero si el parametro es true sera hot
	let regresame=ApodosNormales();
	if(Algo==true){
		regresame=ApodosHot();	
	}
	return regresame;
}
for (var i = 1; i <=0; i++) {
	ApodosHot();
}

//funcion que me dice me devuelve mayuscula o minuscula
function MinMayus(UnaString){
	let regresame="xd";
	let PrimerLetra=UnaString.substr(0,1);//inicia en 0 y longitud 1
	let Resto=UnaString.slice(1);//incia en 1, y cuando el segundo parametro falta es hasta el final
	let LaPrimeraLetra="xd";
	if(Mayuscula){
		LaPrimeraLetra=PrimerLetra.toUpperCase();
	}else{
		LaPrimeraLetra=PrimerLetra.toLowerCase();
	}

	return LaPrimeraLetra+Resto;
}
//funcion que le das un sustantivo y un adjetivo y adapta el adjetivo al sustantivo
function AdejtivoSustantivo(adj,sust){
	console.log("sust", sust);
	console.log("adj", adj);
	//doy por hecho que el sustantivo me lo das en singular
	let regresame=adj;
	let principiocadena=adj.slice(0,-1);
	
	if(sust.slice(-2)=="as"){//osea si esta en plural y es femenino
		regresame=principiocadena+"as"
	}
	if(sust.slice(-2)=="os"||sust.slice(-2)=="es"){//osea si esta en plural y es masculino
		regresame=principiocadena+"os"	
	}
	if(sust.slice(-1)=="o"){//osea si es masculino		
		regresame=principiocadena+"o"
	}
	if(sust.slice(-1)=="a"||sust=="voz"){//osea si es femenino
		regresame=principiocadena+"a"	
	}

	console.log("regresame sustantivo", regresame);
	
	return regresame;
}

//-----------------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------------
//variables universables
var Mayuscula=true;

//esta funcion necesito que sea llamada cada vez que se valla a iniciar desde 0
function ReiniciarFormarOraciones(){
	//generales
	Mayuscula=RandomBolini();
	
	//------------------------------------Alagos------------------------------------------------  
	//Megustas y teAmo
	contador_TEAMO=0;
	contador_Megustas=0;
	LlevaApodo_Te_Me=RandomBolini();
	
	Arr_AlagosWonitos_adj=new Array("hermosa","preciosa","chula","linda","divina","guapa");
	Arra_AlagosWonitos_Eres=new Array("asombrosa","perfecta","increible","fantastica","espectacular","maravillosa");
	Arr_AlagosWonitos_MeEncanta=new Array("cabello","cuello","voz","carita","boquita","sonrisa","ojitos","labios","cachetitos");
	
	Arr_AlagosHot_Estas=new Array("nalgona","culona","tetona","chichona","sexy","sabrosa","rica","deliciosa","exquisita");
	Arra_AlagosHot_MeEncataQueSeas=new Array("hot","horny","caliente","pervertida","sucia");
	Arr_AlagosHot_MeEncantaTu=new Array("vagina","cintura","nalgas","piernas","tetas","muslos","pechos","pezones");

	//------------------------------------Ojala------------------------------------------------  
	Arr_Ojala_Besarnos=new Array("besar","comer","dar","llenar");
	Arr_Ojala_Abrazarnos=new Array("abrazarnos","estar abrazaditos","acurrucarnos","estar acurrucaditos","estar juntitos");
	//------------------------------------Ojala H2------------------------------------------------  
	Arr_OjalaH2_Besarnos=new Array("besuquearnos","besarnos","comernos a besos","besarnos de lenguita");
	Arr_OjalaH2_Besarte=new Array("besuquearte","besarte","lamerte");
	Arr_OjalaH2_Manosearnos=new Array("manosearnos","masturbarnos","tocarnos","toquetearnos");
	Arr_OjalaH2_Manosearte=new Array("manosearte","tocarte","masturbarte","nalgadas","agarrones","nalgearte");
	Arr_OjalaH2_Hacerlo=new Array("hacerlo","coger","coger bien duro","coger "+muchoo(),"darnos","darnos "+muchoo(),"acostarnos","tener relaciones");
	Arr_OjalaH2_Hacerlo_extra=new Array("todo el dia", "a cada rato","siempre","todos los dias","siempre siempre","muy seguido");
	Arr_OjalaH2_Hcaertelo=new Array("hacertelo","darte","cogerte");
	//------------------------------------Ojala H------------------------------------------------  
	

	//------------------------------------Dias ------------------------------------------------  
	Arr_Dias_mientras=new Array("al despertarnos","cuando despertemos","todo el dia","al despertar","cuando despertemos","en la camita");
	Arr_Dias_Dias_num=new Array(2,3,4,5,6);
	Bolini_Dias_PrimeraLLamada=true;
	//------------------------------------noches ------------------------------------------------  
	Arr_Noches_mientras=new Array("antes de mimir","antes de dormir","en la noche","toda la noche","antes de que dormamos","toda toda la noche","en la camita")
	Arr_Noches_Noches=new Array("duerme bien","descansa","dulces sueños");
	Bolini_Noches_PrimeraLLamada=true;
}
//-----------------------------------------------------------------------------------------------------
//------------------------------------------------Array ORACIONES-----------------------------------------------------
//-----------------------------------------------------------------------------------------------------
ReiniciarFormarOraciones();
var Arr_AlagosWonitos_adj_p=new Array().concat(Arr_AlagosWonitos_adj);
var Arra_AlagosWonitos_Eres_p=new Array().concat(Arra_AlagosWonitos_Eres);
var Arr_AlagosWonitos_MeEncanta_p=new Array().concat(Arr_AlagosWonitos_MeEncanta);

var Arr_AlagosHot_Estas_c=new Array().concat(Arr_AlagosHot_Estas);
var Arra_AlagosHot_MeEncataQueSeas_c=new Array().concat(Arra_AlagosHot_MeEncataQueSeas);
var Arr_AlagosHot_MeEncantaTu_c=new Array().concat(Arr_AlagosHot_MeEncantaTu);

//------------------------------------Ojala------------------------------------------------  
var Arr_Ojala_Besarnos_c=new Array().concat(Arr_Ojala_Besarnos);
var Arr_Ojala_Abrazarnos_c=new Array().concat(Arr_Ojala_Abrazarnos);
//------------------------------------Ojala H2------------------------------------------------  
var Arr_OjalaH2_Besarnos_c=new Array().concat(Arr_OjalaH2_Besarnos);
var Arr_OjalaH2_Besarte_c=new Array().concat(Arr_OjalaH2_Besarte);
var Arr_OjalaH2_Manosearnos_c=new Array().concat(Arr_OjalaH2_Manosearnos);
var Arr_OjalaH2_Manosearte_c=new Array().concat(Arr_OjalaH2_Manosearte);
var Arr_OjalaH2_Hacerlo_c=new Array().concat(Arr_OjalaH2_Hacerlo);
var Arr_OjalaH2_Hacerlo_extra_c=new Array().concat(Arr_OjalaH2_Hacerlo_extra);
//------------------------------------Ojala H------------------------------------------------  
	
	
//------------------------------------Dias ------------------------------------------------  
var Arr_Dias_mientras_c=new Array().concat(Arr_Dias_mientras);
var Arr_Dias_Dias_num_c=new Array().concat(Arr_Dias_Dias_num);
//-----------------------------------------------------------------------------------------------------
var Arr_Noches_mientras_c=new Array().concat(Arr_Noches_mientras);
var Arr_Noches_Noches_c=new Array().concat(Arr_Noches_Noches);
//-----------------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------------


//funcion que me crea las opciones
function Opciones(Tipo,UnaArray,AlgoQueObsevar,Parametro1,Observame){
	this.tipo=Tipo;//random   borrar   log
	this.unaarray=UnaArray; // la aray
	this.observacion=AlgoQueObsevar;
	this.parametro1=Parametro1;
	this.observacion2=Observame;
}
//esta funcion es para crear parrafaos
function HacedorOraciones(UnaArrayDeArrays){
	var regresame="";
	for (let i = 0; i < UnaArrayDeArrays.length; i++) {
		let apoyopararegresar="xd";
		if(UnaArrayDeArrays[i]=="mucho"){
			apoyopararegresar=muchoo();
		}else if(UnaArrayDeArrays[i]=="muchas"){
			apoyopararegresar=muchoo("femenino-plural");
		}else if(typeof UnaArrayDeArrays[i]==="string"){
			apoyopararegresar=UnaArrayDeArrays[i]
		}
			
		if(UnaArrayDeArrays[i].tipo=="random"){
			apoyopararegresar=RandomArray(UnaArrayDeArrays[i].unaarray)
		}
		else if(UnaArrayDeArrays[i].tipo=="borrar"){
			apoyopararegresar=RandomArrayBorrar(UnaArrayDeArrays[i].unaarray)
		}
		else if(UnaArrayDeArrays[i].tipo=="log"){
			apoyopararegresar=ElegirLog2(UnaArrayDeArrays[i].unaarray)
		}	
		if(i == 0){//al orimer elemento se le pone mayusculas si asi toca
			apoyopararegresar=MinMayus(apoyopararegresar);
		}

		if(UnaArrayDeArrays[i].observacion=="quierosisi"||UnaArrayDeArrays[i].observacion2=="quierosisi"){//si .essis=true es porque quiero que me lo ahga tipo linda->lindisisima etc
			apoyopararegresar=sisisis(apoyopararegresar);			
		}
		if(UnaArrayDeArrays[i].observacion=="adj-sust"){//si .essis=true es porque quiero que me lo ahga tipo linda->lindisisima etc
			apoyopararegresar=AdejtivoSustantivo(apoyopararegresar,UnaArrayDeArrays[i].parametro1);			
		}
		regresame=regresame+" "+apoyopararegresar;

	}
	// console.log("regresame---------", regresame);
	return regresame;
}

//-----------------------------------------------------------------------------------------------------
//-------------------------------------------FORMAR LAS ORACIONES -----------------------------------------------------
//-----------------------------------------------------------------------------------------------------


//-------------------------------------------Alagos-----------------------------------------------------
//-------------------------------------------Alagos-----------------------------------------------------
//funcion TE AMO
var contador_TEAMO=0;
var contador_Megustas=0;
var LlevaApodo_Te_Me=true;
function TEAMO_TEQUIERO(UnNum,EsHot){ //--------Alagos_Teamo caso T-- t --u-- v--
	let ArrayAlgo;
	let Residuo;
	if(UnNum==1){//si es me gustas
		ArrayAlgo=new Array("Me gustas ","Te quiero ","Me encantas ","Me fasinas ","Te adoro ","Te amo ");
		Residuo=contador_Megustas%(ArrayAlgo.length);
	}else{//si es te amo
		ArrayAlgo=new Array("Te amo ","Te adoro ","Me fasinas ","Me encantas ","Te quiero ","Me gustas ");
		Residuo=contador_TEAMO%(ArrayAlgo.length);
	}

	let Algo= MinMayus(ArrayAlgo[Residuo]);
	let Mucho=muchoo();
	let OtraCosa="";
	if(LlevaApodo_Te_Me){OtraCosa=ApodosNormales();}
	if(EsHot){OtraCosa=ApodosHot();}
	if(UnNum==1){//si es me gustas
		contador_Megustas++;	
	}else{//si es te amo
		contador_TEAMO++;
	}

	return Algo+Mucho+OtraCosa;
}

function FAlagoWonitosEstasbien(EsHot){
	//-----Alagos_Wonitos_EstasBien-----Caso U //--------Alagos_Hot_Estas-----caso X-----
	
	if(Arr_AlagosWonitos_adj.length==0){Arr_AlagosWonitos_adj=new Array().concat(Arr_AlagosWonitos_adj_p);}
	if(Arr_AlagosHot_Estas.length==0){Arr_AlagosHot_Estas=new Array().concat(Arr_AlagosHot_Estas_c);}
	
	let Eres=new Opciones("random",["eres","estas"],false);
	let Muys=new Opciones("random",["bien",muymuymuy()],false);
	let Alago=new Opciones("borrar",Arr_AlagosWonitos_adj,"quierosisi");
	if(EsHot){Alago=new Opciones("borrar",Arr_AlagosHot_Estas,"quierosisi");}
	let Unapodo= new Opciones ("random",["",Apodacion(EsHot)],false);
	
	return HacedorOraciones([Eres,Muys,Alago,Unapodo]);
}
function FAlagosWonitosEresMuy(){//--------Alagos_Wonitos_Eres--caso V
	if(Arra_AlagosWonitos_Eres.length==0){Arra_AlagosWonitos_Eres=new Array().concat(Arra_AlagosWonitos_Eres_p);}
	
	let Eres=new Opciones("log",["eres","eres muy","eres muy","eres muy muy"]);
	let Alago=new Opciones("borrar",Arra_AlagosWonitos_Eres);
	let Unapodo= new Opciones ("random",["",ApodosNormales()]);

	return HacedorOraciones([Eres,Alago,Unapodo]);
}

function FAlagosWonitosMeEncantaTu(EsHot){
	//--------Alagos_Wonitos_MeEncantaTU--caso W//--------Alagos_Hot_MeEncantaTu-----caso Z-
	
	if(Arr_AlagosWonitos_MeEncanta.length==0){Arr_AlagosWonitos_MeEncanta=new Array().concat(Arr_AlagosWonitos_MeEncanta_p);}
	if(Arr_AlagosHot_MeEncantaTu.length==0){Arr_AlagosHot_MeEncantaTu=new Array().concat(Arr_AlagosHot_MeEncantaTu_c);}
	
	let Cosa=RandomArrayBorrar(Arr_AlagosWonitos_MeEncanta);
	if(EsHot){Cosa=RandomArrayBorrar(Arr_AlagosHot_MeEncantaTu);}
	
	let Alago=new Opciones("random",["preciosa","hermosa","linda"],"adj-sust",Cosa,"quierosisi");
	if(EsHot){Alago=new Opciones("random",["rica","deliciosa","sabrosa","exqusita","preciosa","hermosa","linda"],"adj-sust",Cosa,"quierosisi");	}
	
	let Me=new Opciones("log",["me encanta tu","me fasina tu","adoro tu","amo tu"]);
	if(Cosa.slice(-1)=="s"){//osea si esta en plural
		Me=new Opciones("log",["me encantan tus","me fasinan tus","adoro tus","amo tus"]); }		

	let LaCosa=new Opciones("random",[Cosa]);

	//esto es para que sea aleatoria adejtivo sustantivo y sustantivo adjetivo
	let regresame=HacedorOraciones([Me,Alago,LaCosa]);
	if(RandomBolini()){
		regresame=HacedorOraciones([Me,LaCosa,Alago]);
	}
	return regresame;
}

function FAlagosHotMeEncantaQueSeas(){//--------Alagos_Hot_MeEncantaQueSeas--caso Y--
	if(Arra_AlagosHot_MeEncataQueSeas.length==0){Arra_AlagosHot_MeEncataQueSeas=new Array().concat(Arra_AlagosHot_MeEncataQueSeas_c);}
	
	let Eres=new Opciones("log",["me encanta que seas","me fasina que seas","adoro que seas","amo que seas"]);
	let Bien= new Opciones ("random",["","bien","muy"]);
	let Alago=new Opciones("borrar",Arra_AlagosHot_MeEncataQueSeas);
	let Unapodo= new Opciones ("log",["",ApodosHot(true),ApodosHot(true),"conmigo","solo conmigo"]);
	
	return HacedorOraciones([Eres,Bien,Alago,Unapodo]);
}

//-------------------------------------------Ojala-----------------------------------------------------------------------
//-------------------------------------------Ojala-----------------------------------------------------------------------

function FOjalaBesos(){
	if(Arr_Ojala_Besarnos.length==0){Arr_Ojala_Besarnos=new Array().concat(Arr_Ojala_Besarnos_c);}
	let Besar=RandomArrayBorrar(Arr_Ojala_Besarnos);
	let regresame;
	
	if(RandomBolini()){
		regresame=MinMayus("ojala pudieramos "+Besar+"nos ")
	}else{
	 	let Algo=MinMayus(RandomArray(["ojala pudiera ","me encantaria ","quiero ","me fasinaria "]));
		regresame=Algo+Besar+"te "
	}
	
	if(Besar=="llenar"){regresame=regresame+"de "}
	if(Besar=="comer"){regresame=regresame+"a "}

	if(Besar=="besar"){regresame=regresame+muchoo("nonada");}
	if(Besar=="dar"||Besar=="llenar"){regresame=regresame+muchoo("plural")}
	
	if(Besar=="comer"||Besar=="dar"||Besar=="llenar"){regresame=regresame+"besitos";}

	return regresame;
}
function FOjalaAbrazos(){
	if(Arr_Ojala_Abrazarnos.length<=0){Arr_Ojala_Abrazarnos=new Array().concat(Arr_Ojala_Abrazarnos_c)}
	let regresame;
	let abrazar=RandomArrayBorrar(Arr_Ojala_Abrazarnos);
	let ojala=MinMayus("ojala pudieramos ");

	regresame=ojala+abrazar;
	return regresame;
}
//-------------------------------------------Ojala Hot 2-----------------------------------------------------------------------

function FOjalaH2Besarnos(){
	if(Arr_OjalaH2_Besarnos.length<=0){Arr_OjalaH2_Besarnos=new Array().concat(Arr_OjalaH2_Besarnos_c)}	
	if(Arr_OjalaH2_Besarte.length<=0){Arr_OjalaH2_Besarte=new Array().concat(Arr_OjalaH2_Besarte_c)}
	let regresame;
	if(RandomBolini()){
		regresame=MinMayus("ojala pudieramos "+RandomArrayBorrar(Arr_OjalaH2_Besarnos));
	}else{
		let Ojala=new Opciones("random",["ojala pudiera","me encantaria","quiero","me muero de ganas de","ya quiero"])
		let abrazar=new Opciones("borrar",Arr_OjalaH2_Besarte)
		regresame=HacedorOraciones([Ojala,abrazar,"mucho","mucho"]);
	}
	return regresame;
}

function FOjalaH2Manosearnos(){
	if(Arr_OjalaH2_Manosearnos.length<=0){Arr_OjalaH2_Manosearnos=new Array().concat(Arr_OjalaH2_Manosearnos_c)}	
	if(Arr_OjalaH2_Manosearte.length<=0){Arr_OjalaH2_Manosearte=new Array().concat(Arr_OjalaH2_Manosearte_c)}
	let regresame;
	if(RandomBolini()){
		regresame=MinMayus("ojala pudieramos "+RandomArrayBorrar(Arr_OjalaH2_Manosearnos)+" "+muchoo());
	}else{
		let Ojala=new Opciones("random",["ojala pudiera","me encantaria","quiero","me muero de ganas de","ya quiero"])
		let tocarte=RandomArrayBorrar(Arr_OjalaH2_Manosearte);
		
		if(tocarte=="nalgadas"){
			tocarte=RandomArray(["ricas","buenas","sabrosas",""])+" nalgadas"
			muchas=muchoo("femenino-plural");
			if(muchas==""){muchas="unas"}
			regresame=HacedorOraciones([Ojala,"darte",muchas,tocarte]);
		
		}else if(tocarte=="agarrones"){
			tocarte=RandomArray(["ricos","buenos",""])+" agarrones"
			muchas=muchoo("plural");
			if(muchas==""){muchas="unos"}
			regresame=HacedorOraciones([Ojala,"darte",muchas,tocarte]);
		}else{
			regresame=HacedorOraciones([Ojala,tocarte,"mucho","mucho"]);
		}
	}
	return regresame;
}

function FOjalaH2Hacerlo(Customizable){
	let regresame;
	if(RandomBolini()){
		if(Arr_OjalaH2_Hacerlo.length<=0){Arr_OjalaH2_Hacerlo=new Array().concat(Arr_OjalaH2_Hacerlo_c)}
		if(Arr_OjalaH2_Hacerlo_extra.length<=0){Arr_OjalaH2_Hacerlo_extra=new Array().concat(Arr_OjalaH2_Hacerlo_extra_c)}
		let Algo=new Opciones("borrar",Arr_OjalaH2_Hacerlo)
		let Extra=new Opciones("borrar",Arr_OjalaH2_Hacerlo_extra)
		if(Customizable=="sinmientras"){return HacedorOraciones(["ojala pudieramos",Algo]);} //esto es para dias y noches hot
		return HacedorOraciones(["ojala pudieramos",Algo,Extra]);
	}
	else{
		let Ojala=new Opciones("random",["ojala pudiera","me encantaria","quiero","me muero de ganas de","ya quiero"])
		let Algo=new Opciones("random",Arr_OjalaH2_Hcaertelo);
		let Duro=new Opciones("random",[muymuymuy("poquito")+" duro","bien duro",muymuymuy("poquito")+" rico","bien rico","mucho"],"quierosisi");
		return HacedorOraciones([Ojala,Algo,Duro]);		
	}
}

//-------------------------------------------Ojala Hot -----------------------------------------------------------------------
function FOjalaHLamerte(){
	let regresame;
	return regresame;
}
function FOjalaHTocarte(){
	let regresame;
	return regresame;
}
function FOjalaHEyacular(){
	let regresame;
	return regresame;
}

//-------------------------------------------Dias-----------------------------------------------------------------------
//-------------------------------------------Dias-----------------------------------------------------------------------

function FDiasOjalaBesarnos(){
	if(Arr_Dias_mientras.length<=0){Arr_Dias_mientras=new Array().concat(Arr_Dias_mientras_c)}
	return FOjalaBesos()+" "+RandomArrayBorrar(Arr_Dias_mientras);
}
function FDiasOjalaAbrazarnos(){
	if(Arr_Dias_mientras.length<=0){Arr_Dias_mientras=new Array().concat(Arr_Dias_mientras_c)}
	return FOjalaAbrazos()+" "+RandomArrayBorrar(Arr_Dias_mientras);
}
function FDiasOjalaH2Besarnos(){
	if(Arr_Dias_mientras.length<=0){Arr_Dias_mientras=new Array().concat(Arr_Dias_mientras_c)}
	return FOjalaH2Besarnos()+" "+RandomArrayBorrar(Arr_Dias_mientras);
}
function FDiasOjalaH2Manosearnos(){
	if(Arr_Dias_mientras.length<=0){Arr_Dias_mientras=new Array().concat(Arr_Dias_mientras_c)}
	return FOjalaH2Manosearnos()+" "+RandomArrayBorrar(Arr_Dias_mientras);
}
function FDiasOjalaH2Hacerlo(){
	if(Arr_Dias_mientras.length<=0){Arr_Dias_mientras=new Array().concat(Arr_Dias_mientras_c)}
	return FOjalaH2Hacerlo("sinmientras")+" "+RandomArrayBorrar(Arr_Dias_mientras);
}
function FDias(EsHot){
	if(Arr_Dias_Dias_num.length<=0){Arr_Dias_Dias_num=new Array().concat(Arr_Dias_Dias_num_c)}
	let QuienVa=RandomArrayBorrar(Arr_Dias_Dias_num);
	if(Bolini_Dias_PrimeraLLamada){QuienVa=1}//si es la primera vez que se llama
	
	let regresame=""
	let Apodo=Apodacion(EsHot);
	let Pregunta="";
	
	switch (QuienVa) {	
		case 1://-------------------------------------------------------- 
			Pregunta=new Opciones("random",["buenos dias","buen dia"]);
			regresame=HacedorOraciones([Pregunta,Apodo]);
			break;
		case 2://-------------------------------------------------------- 
			Pregunta=new Opciones("random",["cómo amaneció","amaneció bien"])
			regresame="¿"+HacedorOraciones([Pregunta,Apodo]).substr(1)+"?";	
			break;
		case 3://-------------------------------------------------------- 
			Pregunta=new Opciones("random",["","bien"]);
			regresame="¿"+HacedorOraciones(["desansó",Pregunta,Apodo]).substr(1)+"?";	
			break;
		case 4://-------------------------------------------------------- 
			Pregunta=new Opciones("random",["durmio bien","cómo durmio"]);
			regresame="¿"+HacedorOraciones([Pregunta,Apodo]).substr(1)+"?";
			break;
		case 5://-------------------------------------------------------- 
			regresame="¿"+MinMayus("como está "+Apodo)+"?";
			break;
		case 6://-------------------------------------------------------- 
			Pregunta=new Opciones("random",["lindo","wonito","buen","bonito"]);
			regresame=HacedorOraciones(["espero que tengas un",Pregunta,"dia",Apodo]);
			break;
		}
	Bolini_Dias_PrimeraLLamada=false
	return regresame;
}
//------------------------------------------Noches-----------------------------------------------------------------------
//------------------------------------------Noches-----------------------------------------------------------------------
function FNochesOjalaBesarnos(){
	if(Arr_Noches_mientras.length<=0){Arr_Noches_mientras=new Array().concat(Arr_Noches_mientras_c)}
	return FOjalaBesos()+" "+RandomArrayBorrar(Arr_Noches_mientras);
}
function FNochesOjalaAbrazarnos(){
	if(Arr_Noches_mientras.length<=0){Arr_Noches_mientras=new Array().concat(Arr_Noches_mientras_c)}
	return FOjalaAbrazos()+" "+RandomArrayBorrar(Arr_Noches_mientras);
}
function FNochesOjalaH2Besarnos(){
	if(Arr_Noches_mientras.length<=0){Arr_Noches_mientras=new Array().concat(Arr_Noches_mientras_c)}
	return FOjalaH2Besarnos()+" "+RandomArrayBorrar(Arr_Noches_mientras);
}
function FNochesOjalaH2Manosearnos(){
	if(Arr_Noches_mientras.length<=0){Arr_Noches_mientras=new Array().concat(Arr_Noches_mientras_c)}
	return FOjalaH2Manosearnos()+" "+RandomArrayBorrar(Arr_Noches_mientras);
}
function FNochesOjalaH2Hacerlo(){
	if(Arr_Noches_mientras.length<=0){Arr_Noches_mientras=new Array().concat(Arr_Noches_mientras_c)}
	return FOjalaH2Hacerlo("sinmientras")+" "+RandomArrayBorrar(Arr_Noches_mientras);
}
function FNoches(EsHot){
	if(Arr_Noches_Noches.length<=0){Arr_Noches_Noches=new Array().concat(Arr_Noches_Noches_c)}
	let regresame=""
	let Apodo=Apodacion(EsHot);
	Pregunta=new Opciones("borrar",Arr_Noches_Noches);
	regresame=HacedorOraciones([Pregunta,Apodo]);
	//si es la primera vez que se llama
	if(Bolini_Noches_PrimeraLLamada){regresame=HacedorOraciones(["buenas noches",Apodo])}
	Bolini_Noches_PrimeraLLamada=false
	return regresame;
}




//-----------------------------------------------------------------------------------------------------
//------------------------------------------------lA REVISION-----------------------------------------------------
//-----------------------------------------------------------------------------------------------------

//funcion que revisa a quien estan llamando los

function nivel0_revision_codigo(revisame){
	var Algo=""
	
	switch (revisame) {
		case '0'://-------------------------------------------------------- 
			Algo="algoandamal"
			break;
		//------------------------------------Dias------------------------------------------------  
		case '1': //----------------------------Dias_BuenosDias----------------------------
			Algo=FDias(false);
			break;
		case '2': //----------------------------Dias_BuenosDiasHot----------------------------
			Algo=FDias(true);
			break;
		case '3': //----------------------------Dias_Ojala_Besarnos----------------------------
			Algo=FDiasOjalaBesarnos();
			break;
		case '4': //----------------------------Dias_Ojala_Abrazarnos----------------------------
			Algo=FDiasOjalaAbrazarnos();
			break;										
		case '6': //----------------------------Dias_Ojala_Dormir------------NOTERMINADO----------------
			Algo="";
			break;
		case '7': //----------------------------Dias_Ojala_Despertarte-------NOTERMINADO---------------------
			Algo="";
			break;
		case '8': //----------------------------Dias_OjalaHot_Besarnos----------------------------
			Algo=FDiasOjalaH2Besarnos();
			break;
		case '9': //----------------------------Dias_OjalaHot_Manosearnos----------------------------
			Algo=FDiasOjalaH2Manosearnos();
			break;
		case 'A': //----------------------------Dias_OjalaHot_Hacerlo-----------------------------
			Algo=FDiasOjalaH2Hacerlo(); 
			break;										
		
		//------------------------------------Noches------------------------------------------------  
		case 'B'://-------------------------------Noches_BuenasNoches-------------------------
			Algo=FNoches(false);
			break;
		case 'C': //------------------------------Noches_BuenasNochesHot--------------------------  
			Algo=FNoches(true);
			break;
		case 'D': //------------------------------Noches_Ojala_Besarnos--------------------------  
			Algo=FNochesOjalaBesarnos();
			break;
		case 'E': //-------------------------------Noches_Ojala_Abrazarnos-------------------------  
			Algo=FNochesOjalaAbrazarnos();
			break;
		case 'G': //------------------------------Noches_Ojala_Dormir-----------------NOTERMINADO---------  
			Algo="";
			break;
		case 'H': //------------------------------Noches_Ojala_Soñar------------------NOTERMINADO--------  
			Algo="";
			break;
		case 'I': //------------------------------Noches_OjalaHot_Besarnos--------------------------  
			Algo=FNochesOjalaH2Besarnos();
			break;
		case 'J': //------------------------------Noches_OjalaHot_Manosearnos--------------------------  
			Algo=FNochesOjalaH2Manosearnos();
			break;
		case 'K': //------------------------------Noches_OjalaHot_Hacerlo--------------------------  
			Algo=FNochesOjalaH2Hacerlo(); 
			break;

		//------------------------------------Ojala-----------------------------------------------  
		case 'L': //---------------------Ojala_Futuro---------------------NOTERMINADO-------------  
			Algo="";
			break;
		case 'M': //---------------------Ojala_Wonitos_Besarnos------------------------------  
			Algo=FOjalaBesos();
			break;
		case 'N': //---------------------Ojala_Wonitos_Abrazarnos------------------------------  
			Algo=FOjalaAbrazos();
			break;
		case 'P': //---------------------Ojala_Hot2_Besarnos------------------------------  
			Algo=FOjalaH2Besarnos();
			break;
		case 'Q': //---------------------Ojala_Hot2_Manosearnos------------------------------  
			Algo=FOjalaH2Manosearnos();
			break;
		case 'R': //----------------------Ojala_Hot2_Hacerlo-----------------------------  
			Algo=FOjalaH2Hacerlo();
			break;
		case 'p': //----------------------Ojala_Hot_Lamerte------------------NOTERMINADO---------------  
			Algo=FOjalaHLamerte();
			break;
		case 'q': //----------------------Ojala_Hot_Tocarte------------------NOTERMINADO----------------  
			Algo=FOjalaHTocarte();
			break;
		case 'r': //----------------------Ojala_Hot_Eyacular------------------NOTERMINADO-------------  
			Algo=FOjalaHEyacular();
			break;

		//------------------------------------Alagos-------COMPLETAMENTE TERMINADO-----------------------------------------  
		case 'T': //--------Alagos_Teamo------------------------------------------------  
			Algo=TEAMO_TEQUIERO(2,false);
			break;
		case 't': //--------Alagos_Tequiero------------------------------------------------  
			Algo=TEAMO_TEQUIERO(1,false);
			break;
		case 'u': //--------Alagos_Teamo------------------------------------------------  
			Algo=TEAMO_TEQUIERO(2,true);
			break;
		case 'v': //--------Alagos_Tequiero------------------------------------------------  
			Algo=TEAMO_TEQUIERO(1,true);
			break;
		case 'U': //--------Alagos_Wonitos_EstasBien------------------------------------------------  
			Algo=FAlagoWonitosEstasbien(false);
			break;
		case 'V': //--------Alagos_Wonitos_Eres------------------------------------------------  
			Algo= FAlagosWonitosEresMuy();
			break;
		case 'W': //-------Alagos_Wonitos_MeEncantaTu-------------------------------------------------  
			Algo=FAlagosWonitosMeEncantaTu(false);
			break;
		case 'X': //--------Alagos_Hot_Estas------------------------------------------------  
			Algo=FAlagoWonitosEstasbien(true);
			break;
		case 'Y': //--------Alagos_Hot_MeEncantaQueSeas------------------------------------------------  
			Algo=FAlagosHotMeEncantaQueSeas();
			break;
		case 'Z': //--------Alagos_Hot_MeEncantaTu------------------------------------------------  
			Algo=FAlagosWonitosMeEncantaTu(true);
			break;
		default://--------Defaul------------------------------------------------  		
			Algo=" ";
		}
	return Algo;
}



// --------------------LLAMADAS BOTONES------------------------

//funcion para facilitar la llamadas
function Text_Llama(codigo){
	console.log("codigo", codigo); 
	Textos_Codigo_Array[nivel0_contador]=codigo;
	//si ya estamos en la ultima linea quiero que me agreges otra line
	if(nivel0_contador==Patron_CantidadElementos-1){
		Patron_CantidadElementos++;
	}
	nivel0_contador++;
	nivel0_actualizar();
}

nivel2_Dias_BuenosDias.onclick=function(){Text_Llama("1")}
nivel2_Dias_BuenosDiasHot.onclick=function(){Text_Llama("2")}
nivel3_Dias_Ojala_Besarnos.onclick=function(){Text_Llama("3")}
nivel3_Dias_Ojala_Abrazarnos.onclick=function(){Text_Llama("4")}
// nivel3_Dias_Ojala_EstarJuntos.onclick=function(){Text_Llama("5")}
nivel3_Dias_Ojala_Dormir.onclick=function(){Text_Llama("6")}
nivel3_Dias_Ojala_Despertarte.onclick=function(){Text_Llama("7")}
nivel3_Dias_OjalaHot_Besarnos.onclick=function(){Text_Llama("8")}
nivel3_Dias_OjalaHot_Manosearnos.onclick=function(){Text_Llama("9")}
nivel3_Dias_OjalaHot_Hacerlo.onclick=function(){Text_Llama("A")}

nivel2_Noches_BuenasNoches.onclick=function(){Text_Llama("B");}
nivel2_Noches_BuenasNochesHot.onclick=function(){Text_Llama("C");}
nivel3_Noches_Ojala_Besarnos.onclick=function(){Text_Llama("D");}
nivel3_Noches_Ojala_Abrazarnos.onclick=function(){Text_Llama("E");}
// nivel3_Noches_Ojala_EstarJuntos.onclick=function(){Text_Llama("F");}
nivel3_Noches_Ojala_Dormir.onclick=function(){Text_Llama("G");}
nivel3_Noches_Ojala_Soñar.onclick=function(){Text_Llama("H");}
nivel3_Noches_OjalaHot_Besarnos.onclick=function(){Text_Llama("I");}
nivel3_Noches_OjalaHot_Manosearnos.onclick=function(){Text_Llama("J");}
nivel3_Noches_OjalaHot_Hacerlo.onclick=function(){Text_Llama("K");}

nivel2_Ojala_Futuro.onclick=function(){Text_Llama("L");}
nivel3_Ojala_Wonitos_Besarnos.onclick=function(){Text_Llama("M");}
nivel3_Ojala_Wonitos_Abrazarnos.onclick=function(){Text_Llama("N");}
// nivel3_Ojala_Wonitos_EstarJuntos.onclick=function(){Text_Llama("O");}
nivel3_Ojala_Hot2_Besarnos.onclick=function(){Text_Llama("P");}
nivel3_Ojala_Hot2_Manosearnos.onclick=function(){Text_Llama("Q");}
nivel3_Ojala_Hot2_Hacerlo.onclick=function(){Text_Llama("R");}
nivel3_Ojala_Hot_Lamerte.onclick=function(){Text_Llama("p"); }
nivel3_Ojala_Hot_Tocarte.onclick=function(){Text_Llama("q");}
nivel3_Ojala_Hot_Eyacular.onclick=function(){Text_Llama("r");}

nivel3_Alagos_Teamo_Teamo.onclick=function(){Text_Llama("T");}
nivel3_Alagos_Teamo_Megustas.onclick=function(){Text_Llama("t");}
nivel3_Alagos_Teamo_TeamoHot.onclick=function(){Text_Llama("u");}
nivel3_Alagos_Teamo_MegustasHot.onclick=function(){Text_Llama("v");}

nivel3_Alagos_Wonitos_EstasBien.onclick=function(){Text_Llama("U");}
nivel3_Alagos_Wonitos_Eres.onclick=function(){Text_Llama("V");}
nivel3_Alagos_Wonitos_MeEncantaTu .onclick=function(){Text_Llama("W");}
nivel3_Alagos_Hot_Estas.onclick=function(){Text_Llama("X");}
nivel3_Alagos_Hot_MeEncantaQueSeas.onclick=function(){Text_Llama("Y");}
nivel3_Alagos_Hot_MeEncantaTu.onclick=function(){Text_Llama("Z");}




