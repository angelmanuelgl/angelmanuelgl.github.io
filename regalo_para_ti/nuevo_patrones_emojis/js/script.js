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
var Emojis_Otros=new Array ("💎","💍","🥰","🥺","⛱️","🦋","🪁","🎀","🧸","🍁","♥️");
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
	nivel0_contador=0;
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
	document.getElementById("contEmojisvd").appendChild(boton);
	
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
	document.getElementById("contEmojisvd").appendChild(boton);

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

function ReiniciarFormarOraciones(){}//esto es para el otro documento donde no queiro funciones de textos personales
