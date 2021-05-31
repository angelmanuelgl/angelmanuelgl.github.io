/*funcion autoinvocada 
(function(){
	todo el contenido
}())
*/


// crear arrays
var Emojis_Noche=new Array("✨","⭐","🌟","💫","🌙");
var Emojis_Flores=new Array("🌸","🌼","🌷","🌹","🌺","🌻");
var Emojis_Dia=new Array("☀️","🌈");
var Emojis_Caras=new Array("🥰","🥺");
var Emojis_Hot=new Array("🔥","🥵");
var Emojis_NoCorazones=Emojis_Noche.concat(Emojis_Flores.concat(Emojis_Dia.concat(Emojis_Caras)));
//arrays para poder crear la ARRAY DE CORAZNES
var Emojis_Corazones=new Array("♥️","❤️","🧡","💛","💚","💙","💜","❣️","💘","💓","💕","💞","💖","💗","💝","💟","🤍");
var Emojis_Corazones_Reversa=new Array("💟","💝","💗","💖","💞","💕","💓","💘","❣️","💜","💙","💚","💛","🧡","❤️");
var Corazones=Emojis_Corazones.concat(Emojis_Corazones_Reversa.concat(Emojis_Corazones));
//arrays que si se van a utilizar
var Emojis_Todos=Emojis_Noche.concat(Emojis_Flores.concat(Emojis_Dia.concat(Emojis_Caras.concat(Emojis_Corazones.concat(Emojis_Hot)))));
var Emojis_Dias=Emojis_Dia.concat(Emojis_Flores.concat(Emojis_Caras));
var Emojis_Noches=Emojis_Noche.concat(Emojis_Flores.concat(Emojis_Caras));
// la array que va creando el usuario
var LaArray=new Array(); 

//nuevas arrays
var Estrellas=new Array ("✨","⭐","🌟","💫","🌟","⭐","✨","⭐","🌟","💫",);
var Flores=new Array("🌸","🌼","🌷","🌹","🌺","🌻","🌺","🌹","🌷","🌼","🌸","🌼","🌷","🌹","🌺","🌻");
var CorazonesRojos=new Array ("❤️","❣️","💘","💓","💘","❣️","❤️","❣️","💘","💓");
var CorazonesRosas=new Array ("💞","💖","💗","💝","💗","💖","💞","💖","💗","💝");
var CorazonesArcoiris=new Array ("❤️","🧡","💛","💚","💙","💜");

//----------------------------------------------------------------
//---------------------FUNCIONES BASICAS------------------------------------------------
//------------------------------------------------------------------------

//funciones de apoyo para patrones de corazones

//cambiar atributo text-alingde AgregarCorazones
function Justificado(donde){
	
	if(donde=="izquierda"){
		let Elemento = document.getElementById("AgregarCorazones");
		Elemento.style.textAlign = 'left';
	} else{
		let Elemento = document.getElementById("AgregarCorazones");
		Elemento.style.textAlign = 'center';
	}
}

//funcion que agrega un elemento a cierto lugar con id LaId
//si le mandas br como texto agregara un br
function AgregarTexto(Texto,LaId) {
	let elemento=document.getElementById(LaId);
	
	if (Texto=="br"){
		let elemento=document.getElementById(LaId);
		let BR=document.createElement("br");
		elemento.appendChild(BR);
	
	}else{
		var contenido_para_escribir=document.createTextNode(Texto);
			if (contenido_para_escribir===undefined){
			//este if usa la desigualdad estricta === para ver si esta indefinido
			contenido_para_escribir=RamdomArray(Emojis_Corazones);
			}
		elemento.appendChild(contenido_para_escribir);
	}
}

//funcion que elimina un p con cierta id y lo vuelve a crear con su misma id y clase
function Recrear(LaId){
	//cosneguir el elemento y su padre
	let Elemento=document.getElementById(LaId);
	let Padre_Elemento=Elemento.parentNode;	
	//toma sus propiedadews
	let SuClase=Elemento.classList;
	let SuId=Elemento.id;
	//borrar
	Padre_Elemento.removeChild(Elemento);
	//lo vuelve a crear
	let Elemento_Nuevo=document.createElement("p");
	//le asigna sus propiedades
	Elemento_Nuevo.classList=SuClase;
	Elemento_Nuevo.id=SuId;
	//lo agrega
	Padre_Elemento.appendChild(Elemento_Nuevo);
}




//funcion para escribir en cierto p con id LaId los elementos de cierta Array
//tomando en cuenta que UwU y WuW va cambiando
//agregando texto si es que lo hay
function EscribirArray(Posicion){
	
	let cantidad=LaArray.length;
	 for (var i = 0; i < cantidad; i++) {
	 	
		
	 	var ElContenido=LaArray[i];
	 	if (ElContenido===undefined){
			//este if usa la desigualdad estricta === para ver si esta indefinido
			ElContenido=RamdomArray(Emojis_Corazones);
		}
	 	//revision de UwU y WuW y los botones especiales
	 	function Revision(unarreglo,palabraclave1,palabraclave2){
		 	let pos=Posicion%unarreglo.length;
			let posatras=unarreglo.length-1-pos;
			 if(ElContenido==palabraclave1){
			 	ElContenido=unarreglo[pos];
			 }
			 if(ElContenido==palabraclave2){
			 	ElContenido=unarreglo[posatras];
			 }
		}
		Revision(Corazones,"UwU","WuW");
		Revision(Estrellas,"Estrella"," ");
		Revision(Flores,"Flor"," ");
		Revision(CorazonesRojos,"CorazonRojo"," ");
		Revision(CorazonesRosas,"CorazonRosa"," ");
		Revision(CorazonesArcoiris,"CorrazonArcoIris"," ");
		 
		 //escribir		
	 	let Elemento=document.getElementById("AgregarCorazones");
		let Contenido=document.createTextNode(ElContenido);
		Elemento.appendChild(Contenido);
	}
	let Elemento=document.getElementById("AgregarCorazones");
	let LeTexto=document.createTextNode(TextoFinal);
	Elemento.appendChild(LeTexto);
}

// Retorna un entero aleatorio entre min (incluido) y max (excluido)
function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min)) + min;
}


//funcion para convertir un numero a emoji y agregarlo
//o si lo que le dan no es numero agregaa eso directamente
function AgregarALaArray(valor){
//isNaN devuelve verdadero si no es un numero y falso si es un numero
	let valores=valor;
	if (isNaN(valores)){
		//if se ejecuta si es verdadero 
		//por lo que aqui esta el codigo para agregar lo que le piden
		LaArray.push(valores);
	}else{
		//si no fue verdadero entonces fue falso entonces le da un numero 
		//por lo que aqui esta el codigo para agregar lo que le piden
		let emoji=Emojis_Todos[valores];
		LaArray.push(emoji);
	}
	//finalmente elimina lo que habia y escribe la array
	Recrear("AgregarCorazones");
	EscribirArray(0);

}


//funcion para mover todos los elementos de La Array a la  izquiera
function MoverIzquierda(){
	let aux=LaArray[0];
	for (var i = 0; i < LaArray.length-1; i++) {
	  LaArray[i]=LaArray[i+1];
	   
	}
	LaArray[LaArray.length-1]=aux;

}
//funcion para mover todos los elementos de La Array a la  derecha
function MoverDerecha() {
	let aux=LaArray[LaArray.length-1];
	for (var i =LaArray.length-1; i >0; i--) {
	  LaArray[i]=LaArray[i-1];
	   
	}
	LaArray[0]=aux;
}



//----------------------------------------------------------------------------------------
//----------------FUNCIONES QUE SON LLAMADAS POR BOTONES PARA PATRONES-------------------------------------
//---------------------------------PATRONES CORAZONES----------------------------------------
//-------------------------------------------------------------------------------------------

//Texto Final//Funcion para agregar texto final
var TextoFinal=" "//--------------------------------------
function F_TextoFinal(){
	Recrear("AgregarCorazones");
	TextoFinal=document.getElementById("Texto_Final").value;
	if (TextoFinal==null){
		TextoFinal=" ";
	}
	EscribirArray(0);
	ElComienzo();//aqui--------------------AQUI SE LLAMA AL INCIO
}
//CantidaddeElemento//Del boton input Cantidad de Elementos
var Repeticiones=16;//----------------------------------
function CantidadElementos(){
	Repeticiones=parseInt(document.getElementById("CantidadElementos").value);
	//isNaN devuelve verdadero si no es un numero
	if (isNaN(Repeticiones)){
		//if se ejecuta si es verdadero, es decir si no tiene un numero y le asigna el 16 porque si
		Repeticiones=16;
	}
	let total=Corazones.length-1
	if (Repeticiones >= total*10){
		//if se ejecuta si es verdadero, es decir si no tiene un numero y le asigna el 16 porque si
		Repeticiones=total*10;
	}
	if (Repeticiones <= 16){
		//if se ejecuta si es verdadero, es decir si no tiene un numero y le asigna el 16 porque si
		Repeticiones=16;
	}
	ElComienzo();//aqui--------------------AQUI SE LLAMA AL INCIO
}
//Otro Emoji//la funcion para agregar otro emoji
function OtroEmoji(){
	let Otro=document.getElementById("OtroEmoji").value;
	if (Otro===""){
		//este if usa la desigualdad estricta === para ver si es una cadena vacia
		Otro=RamdomArray(Emojis_NoCorazones);
	}
	AgregarALaArray(Otro);
	ElComienzo();//aqui--------------------AQUI SE LLAMA AL INCIO
}
//Botones Emoji//La funcion de los botones que tienen los emojis
function AgregarEmoji(valor){
	let numerito=parseInt(valor);
	AgregarALaArray(valor);
	ElComienzo();//aqui--------------------AQUI SE LLAMA AL INCIO
}
//Botones Emojis Especiales//
function AgregarEmojiEspecial(num){
	if (num==0){AgregarALaArray("Estrella");}
	if (num==1){AgregarALaArray("Flor");}
	if (num==2){AgregarALaArray("CorazonRojo");}
	if (num==3){AgregarALaArray("CorazonRosa");}
	if (num==4){AgregarALaArray("UwU");}
	if (num==5){AgregarALaArray("WuW");}
	if (num==6){AgregarALaArray("CorrazonArcoIris");}
	ElComienzo();//aqui--------------------AQUI SE LLAMA AL INCIO
}


//Salto de Linea//
var Saltar=1;//-----------------------
function Salta(valor){
	Saltar=valor;
	Recrear("AgregarCorazones");
	EscribirArray(0);
	ElComienzo();//aqui--------------------AQUI SE LLAMA AL INCIO
}



//no se como coño les hize para estas dos funciones pero molan estan uff
//solo juge con los parametros y ogre que funcionaran mejor no le toques
	//la funcion del boton que dice retroseso
	function Retroseso(){
		if(TextoFinal==" "){
		//no se que coño hize pero ya no borra todo solo el ultimo
		//asi que mejor ya no le toco nada
		LaArray=LaArray.splice(0,LaArray.length-1);
		
		} else{TextoFinal=" ";}
		Recrear("AgregarCorazones");
		EscribirArray(0);
		ElComienzo();//aqui--------------------AQUI SE LLAMA AL INCIO
		
	}
	//la funccion del boton borrar
	function Borrar(){
		LaArray=LaArray.splice(LaArray.length,LaArray.length-1);
		TextoFinal=" ";
		Recrear("AgregarCorazones");
		EscribirArray(0);
		
	}

//la funcion delos tres botones que son patron
var Patron="1";//--------------------------------------
function F_Patron (valor) {
	Patron=valor;
	Recrear("AgregarCorazones");
	EscribirArray(0);
	ElComienzo();//aqui--------------------AQUI SE LLAMA AL INCIO
}

//la funcion que hace patrones
function HacerElPatron(){
	if (Patron==3) {
		for (var i = 0; i <= Repeticiones; i++) {
			EscribirArray(i);
			MoverIzquierda();
			if (Saltar==1){AgregarTexto("br","AgregarCorazones");}
		}
	} else if(Patron==2) {
		for (var i = 0; i <= Repeticiones; i++) {
			EscribirArray(i);
			MoverDerecha();
			if (Saltar==1){AgregarTexto("br","AgregarCorazones");}
		}
	} else{
		for (var i = 0; i <= Repeticiones; i++) {
			EscribirArray(i);
			if (Saltar==1){AgregarTexto("br","AgregarCorazones");}
		}
	}
}



//LA Funcion del boton que dice iniciar
function IniciarPatron(){
	//quiero que lo primero que haga me haga un repuesto de la array para el final
	let LaArrayRepuesto=[].concat(LaArray);
	//vacia lo que tenga el p 
	Recrear("AgregarCorazones");
	//cambiar justificado
	Justificado("derecha");
	
	//los diferentes patrones
	HacerElPatron();

	//ahora le damos el valor del repuesto a la array original
	LaArray=LaArrayRepuesto;
}

//----------------------------------------------------------------------------------------
//--------------FUNCION QUE ES DE PATRONES Y ES EL PATRON ESPECIAL-----------------------------
//------------------------------------PATRON ESPECIAL----------------------------------------
//-------------------------------------------------------------------------------------------

function Especial(){
	//vacia lo que tenga el p 
	Recrear("AgregarCorazones");
	//cambiar justificado
	Justificado("centro");
	//hacer copias
	let LaArrayRepuesto=[].concat(LaArray);
	let CopiaDeRepeticiones=Repeticiones

	//---verificar cuantas veces de debe repetir
	//obtiene cuantas lineas ocupa el patron, si es menor de uno tomara como 1
	let eltotaldelaArray=LaArray.length+LaArray.length-2;
	if(eltotaldelaArray<=1){eltotaldelaArray=1};
	//las repeticiones se le resta uno porque la primer linea de todas no forma parte del patron
	Repeticiones--
	//obtiene cuantasdebe repetirlo
	let cuantasveces=Math.ceil(Repeticiones/eltotaldelaArray);
	
	//--calcula e imprime imprimir cuantas veces realmente se puso
	let vecescuantas=cuantasveces*eltotaldelaArray+1;
	let Contenido="se repitieron "+vecescuantas+" veces";
	if(LaArray.length>1){
		AgregarTexto(Contenido,"AgregarCorazones");	
		AgregarTexto("br","AgregarCorazones");	
	}

	//repeticiones	
	 for (let i = 0; i <cuantasveces; i++) {
	 	console.log("cuantasveces", cuantasveces);
	 	//hacer copias
	 	let LaArrayRepuesto=[].concat(LaArray);
	 	let CopiaDeRepeticiones=Repeticiones	
		//solo para la primera linea
		if (i==0){
			EscribirArray(0);
			AgregarTexto("br","AgregarCorazones");
		}
		//el patron que siempre se repite
		Repeticiones=LaArray.length-1;
		Repeticiones--;	
		if(LaArray.length<=2){Repeticiones=0;}
		console.log("Repeticione", Repeticiones);
		MoverDerecha();
		Patron=2
		HacerElPatron();
		
		Patron=3
		MoverIzquierda();MoverIzquierda();
		
		HacerElPatron();
		//poner los valores en su lugar
		Repeticiones=CopiaDeRepeticiones;
		LaArray=LaArrayRepuesto;
		
		
	}
	

	//poner el valor a las copias
	Repeticiones=CopiaDeRepeticiones;
	LaArray=LaArrayRepuesto;
}









//----------------------------------------------------------------------------------------
//----------------FUNCIONES QUE SON LLAMADAS PARAR LOS BOTONES ESPECIALES-------------------------------------
//---------------------------------BOTONES ESPECIALES----------------------------------------
//-------------------------------------------------------------------------------------------
var BotonRandom=document.getElementById("EmojiRandom");
var BTN_mini_estrellas=document.getElementById("miniesp1");
var BTN_mini_flores=document.getElementById("miniesp2");
var BTN_mini_corazonesrojos=document.getElementById("miniesp3");
var BTN_mini_corazonesrosas=document.getElementById("miniesp4");
var BTN_mini_UwU=document.getElementById("miniesp5");
var BTN_mini_WuW=document.getElementById("miniesp6");
var BTN_mini_CorazonesArcoiris=document.getElementById("miniesp7");

BotonRandom.onclick=function(){AgregarEmoji(1000);}
BTN_mini_estrellas.onclick=function(){AgregarEmojiEspecial(0);}
BTN_mini_flores.onclick=function(){AgregarEmojiEspecial(1);}
BTN_mini_corazonesrojos.onclick=function(){AgregarEmojiEspecial(2); }
BTN_mini_corazonesrosas.onclick=function(){AgregarEmojiEspecial(3); }
BTN_mini_UwU.onclick=function(){AgregarEmojiEspecial(4); }
BTN_mini_WuW.onclick=function(){AgregarEmojiEspecial(5); }
BTN_mini_CorazonesArcoiris.onclick=function(){AgregarEmojiEspecial(6); }

function CambiarEmojiDelBotonRandom(){
	let UnEmoji=RamdomArray(Emojis_Corazones);
	BotonRandom.innerHTML=UnEmoji;
	let AgregarUnEmoji=document.createTextNode(UnEmoji);
}

setInterval(CambiarEmojiDelBotonRandom,100);

//los otros botones especiales--
var ContadorSetInterval=0;
function CambiarEmojiDelBoton(ElBoton,UnaArray){
	//escoje el emoji correspondiente
	let TotalArray=UnaArray.length;
	let Num=ContadorSetInterval%TotalArray;
	let UnEmoji=UnaArray[Num];
	let AgregarUnEmoji=document.createTextNode(UnEmoji);
	//lo agrega
	ElBoton.innerHTML=UnEmoji;
}
//funcion especial para WuW	
function CambiarEmojiDelBotonWuW (){
	let TotalArray=Corazones.length;
	let Nus=ContadorSetInterval%TotalArray;
	let Num=TotalArray-1-Nus;
	let UnEmoji=Corazones[Num];
	let AgregarUnEmoji=document.createTextNode(UnEmoji);
	//lo agrega
	BTN_mini_WuW.innerHTML=UnEmoji;
}

//funciton que va a ser llamada por el set interval para los demas botones
function HacerLosCambiosDeEmojis(){
	ContadorSetInterval++
	CambiarEmojiDelBoton(BTN_mini_estrellas,Estrellas);
	CambiarEmojiDelBoton(BTN_mini_flores,Flores);
	CambiarEmojiDelBoton(BTN_mini_corazonesrojos,CorazonesRojos);
	CambiarEmojiDelBoton(BTN_mini_corazonesrosas,CorazonesRosas);
	CambiarEmojiDelBoton(BTN_mini_UwU,Corazones);
	CambiarEmojiDelBoton(BTN_mini_CorazonesArcoiris,CorazonesArcoiris);
	CambiarEmojiDelBotonWuW();

}

setInterval(HacerLosCambiosDeEmojis,1000);

//----------------------------------------------------------------------------------------
//--------------FUNCIONES QUE SERAN LLAMADAS POR FUNCIONES DE BUENOS DIAS Y NOCHES-------------------------------------
//---------------------------------FUNCIONES BASICAS----------------------------------------
//-------------------------------------------------------------------------------------------

//DEFINE EL MODO HOT
var SiNoHot=0;
function EsHot(num){
	SiNoHot=num;
	console.log("SiNoHot", SiNoHot);
	ElComienzo();//aqui--------------------AQUI SE LLAMA AL INCIO

}



//funcion que le das una array y te devuelve una cosa aleatoria, la otra hace lo mismo pero borra
function RamdomArray (arreglo){
	//define la cantidad de elementos que tiene la raid
	let Cantidad=arreglo.length;
	//le pide un numero aleatorio entre 0 y esa cantidad
	let NumeroRandom=getRandomInt(0, Cantidad);
	//toma el elemento que tiene la posicion esa cantidad
	let ElementoRandom=arreglo[NumeroRandom];
	return ElementoRandom;
}
function RamdomArrayBorrar (arreglo){
	let Cantidad=arreglo.length;
	let NumeroRandom=getRandomInt(0, Cantidad);
	let ElementoRandom=arreglo[NumeroRandom];
	arreglo.splice(NumeroRandom, 1);	
	return ElementoRandom;
}

var Nombres;
var Cosas_Dia;

function ReiniciarArrays(){
	Nombres=new Array("mi crush hermosa", "mi niña preciosa", "mi amor", "mi amocito", 
	"mi amor de mi vida", "mi corazon", "mi corazoncito", "mi Karensita preciosa", "mi Karenchita preciosa", 
	"mi Karensita", "mi vida", "mi todo", "mi solecito", "mi futura esposa");
	Cosas_Dia=new Array("amanecer a tu lado", "llenarte de besitos","despertarte con besitos",
	"despertarte con muchos muchos besitos","ver tu carita preciosa al despertar","verte todas las mañanas",
	"acariciar tu cabello","decirte lo mucho que te amo", "decirte lo mucho que te quiero",
	"decirte en persona todo lo que siento por ti");
	Cosasss_Dia=new Array ("amanecer abrazaditos","darnos muchos besitos","comernos a besitos","estar abrazaditos en la camita todo el dia",
	"despertarnos hasta tarde","estar juntitos todo el dia")
	ria=new Array ("ojalá pudiera","me encantaría","me gustaría");
	Ria=new Array ("Ojalá pudiera","Me encantaría","Me gustaría");
	Muchos=new Array(" ","mucho","mucho mucho","mucho mucho mucho","muchísimo","muchisisimo","muchisisisimo");
	Cosa_Noche=new Array("llenarte de besitos","darte un besito de buenas noches",
	"dormir a tu lado","acariciar tu hermoso cabello mientras nos dormimos", "abrazarte y decirte lo mucho que te amo",
	"comerte a besitos", "estar siempre a tu lado", "acurrucarme a tu lado y abrazarte", 
	"ver tus hermosos ojos", "abrazarte mientras nos quedamos dormidos", "mimir a tu lado");
	Cosas_Noche=new Array("dormirnos abrazaditos","darnos muchos besitos de buenas noches","dormir juntos",
	"dormir juntos y darnos muchos besitos","darnos muchos besitos mientras nos quedamos dormidos");	
	if (SiNoHot===1){
		console.log("SiNoHot", SiNoHot);
		Nombres=new Array("mi chica tetona", "mi chica sexy", "mi amor", "mi niña guapa", 
		"mi amor de mi vida", "mi novia pervertida", "mi novia tetona", "mi novia sexy",
		"mi rica novia", "mi novia sabrosa", "mi todo","mi futura esposa","mi niña pervertida");
		Cosas_Dia=new Array("amanecer a tu lado","despertarte con muchos besitos y hacer el delicioso","llenarte de besitos y de mi se... 🥺👉🏼👈🏼",
			"ver tu carita hermosa al despertar","darte muchos besitos con agarrones 🥺👉🏼👈🏼","despertarte diciendote cositas bonitas y pervertidas",
			"comerte a besitos");
		Cosasss_Dia=new Array ("hacer el amor al despertar🥺👉🏼👈🏼","darnos muchos muchos besos","hacer el delicioso todo el dia","comernos a besitos",
			"despertarnos a hacer el🥺👉🏼👈🏼");
		Cosa_Noche=new Array("llenarte de besitos y de 🥺👉🏼👈🏼", "darte un besito de buenas noches y una noche de buneos besos","mimir a tu lado",
			"recostarme en tus ricos pechos y darles muchos besitos","besar cada rincon de tu hermoso cuerpo","darte besitos ahi abajo🥺👉🏼👈🏼", 
			"besar toda tu carita preciosa","acurrucarme a tu lado",
			"hacer el delicioso contigo");
		Cosas_Noche=new Array("dormirnos abrazaditos","hacer el amor toda la noche🥺👉🏼👈🏼","darnos muchos besitos mientras nos quedamos dormidos","hacer el amor antes de dormir",
			"besarnos mucho mucho","hacer el delicioso mientras nos quedamos dormidos","darnos besos toda la noche");

	}

}


//funcion mayusculas y minusculas
var Letra=0
function LaPrimeraLetra (mayus, minus){
	if (Letra==0){
		return mayus;
	} else {
		return minus;
	}	
}
////////////estas funciones son para dia y noche  para ambas/////////////////////

function HACER_ORACION(enmayus,enminus){
	//poner nombre
	let Nombre=RamdomArrayBorrar(Nombres);
	//para la letra inicial
	let LaLetra=LaPrimeraLetra(enmayus,enminus);				
	//escribir
	let Contenido=LaLetra+" "+ Nombre;
	AgregarTexto(Contenido,"AgregarCorazones");
}

function DIA_ME_RIA(unaareglo){///para decir que me gustaria hacer algo
	//para la cosa
	let Accion=RamdomArrayBorrar(unaareglo);
	//para la letra inicial
	if (Letra==0){
		let m=RamdomArray(Ria);
		let Contenido=m+" "+Accion;
	AgregarTexto(Contenido,"AgregarCorazones");	
	}else{
		let m=RamdomArray(ria);
		let Contenido=m+" "+Accion;
	AgregarTexto(Contenido,"AgregarCorazones");
	}
}

function DIA_TE(amo){//Te amo te adoro te quiero
	//poner nombre
	let Nombre=RamdomArrayBorrar(Nombres);
	//la letra
	let LaLetra=LaPrimeraLetra("Te ","te ");
	let Mucho=RamdomArrayBorrar(Muchos);
	let Contenido=LaLetra+ amo +" "+Mucho +" "+ Nombre;
	AgregarTexto(Contenido,"AgregarCorazones");	

}
function DIA_ME(encantas){//Me encantas me fasinas me gustas
	//poner nombre
	let Nombre=RamdomArrayBorrar(Nombres);
	//la letra
	let LaLetra=LaPrimeraLetra("Me ","me ");
	let Mucho=RamdomArrayBorrar(Muchos);
	let Contenido=LaLetra+ encantas +" "+ Mucho +" "+ Nombre;
	AgregarTexto(Contenido,"AgregarCorazones");	

}



//////////////////////Buenos DIAS/////////////////////////////	
//funcion que me dice que funcion ejecutar pasandole la psocision
function OrdenDia(posicion){
	if (posicion==0){DIA_0();}
	else if(posicion==1){DIA_PREGUNTA("Durmió bien","durmió bien");} 
	else if(posicion==2){DIA_PREGUNTA("Cómo amaneció","cómo amaneció");}
	else if(posicion==3){DIA_PREGUNTA("Descansó bien","descansó bien");} 
	else if(posicion==4){HACER_ORACION("Espero que tengas un lindo dia","espero que tengas un lindo dia");}
	else if(posicion==5){DIA_ME_RIA(Cosas_Dia);} else if(posicion==6){DIA_ME_RIA(Cosas_Dia);}
	else if(posicion==7){DIA_ME_RIA(Cosas_Dia);} else if(posicion==8){DIA_ME_RIA(Cosas_Dia);}
	else if(posicion==9){DIA_TE("quiero");} else if(posicion==8){DIA_ME("gustas");}
	else if(posicion==10){DIA_TE("adoro");} else if(posicion==11){DIA_ME("encantas");}
	else if(posicion==12){DIA_ME("fasinas");} else if(posicion==13){DIA_TE("amo");}
	else if(posicion==14||posicion==15){OjalaPudieramos(Cosasss_Dia);}
	if(SiNoHot==1){
		if(posicion==16){OjalaPudieramos(Cosasss_Dia);}
	}
}

///UNO
function DIA_0 (){//buenos dias	
	//poner nombre
	let Nombre=RamdomArrayBorrar(Nombres);
	//para la letra inicial
	let LaLetra=LaPrimeraLetra("B","b");			
	//para hacer plural
	let plural=getRandomInt(0,2);
	let s=new Array("","s");
	let S= s[plural];
	let os=new Array("","os");
	let OS= os[plural];	
	//escribir
	let Contenido=LaLetra+"uen"+ OS +" dia"+S +" "+ Nombre;
	AgregarTexto(Contenido,"AgregarCorazones");
}

function DIA_PREGUNTA(enmayus, enminus){
	//poner nombre
	let Nombre=RamdomArrayBorrar(Nombres);
	//para la letra inicial
	let LaLetra=LaPrimeraLetra(enmayus,enminus);
	let Contenido="¿"+LaLetra+ " " +Nombre + "?";
	AgregarTexto(Contenido,"AgregarCorazones");	
}



/////////////buenas noches///////////////////////////////77
function OrdenNoche(posicion){
	if(posicion==0){HACER_ORACION("Buenas Noches","buenas noches");}
	else if(posicion==1){HACER_ORACION("Descansa","descansa");}
	else if(posicion==2){HACER_ORACION("Dulces sueños","dulces sueños");}
	else if(posicion==3){HACER_ORACION("Duerme bien","duerme bien");}
	else if(posicion==4){DIA_TE("quiero");} else if(posicion==5){DIA_ME("gustas");}
	else if(posicion==6){DIA_TE("adoro");} else if(posicion==7){DIA_ME("encantas");}
	else if(posicion==8){DIA_ME("fasinas");} else if(posicion==9){DIA_TE("amo");}
	else if(posicion==10){DIA_ME_RIA(Cosa_Noche);} else if(posicion==11){DIA_ME_RIA(Cosa_Noche);}
	else if(posicion==12){DIA_ME_RIA(Cosa_Noche);} else if(posicion==13){DIA_ME_RIA(Cosa_Noche);}
	else if(posicion==14){OjalaPudieramos(Cosas_Noche);}
	if(SiNoHot==1){
		if(posicion==15||posicion==16){OjalaPudieramos(Cosas_Noche);}
	}	

}

function OjalaPudieramos(UnaArray){//ojala pudieramos		
		//para la letra inicial
		let LaLetra=LaPrimeraLetra("Ojalá puedieramos ","ojalá puedieramos ");		
		//elejir la cosa que me gustaria hacer
		let Lacosa=RamdomArrayBorrar(UnaArray);		
		//escribir
		let Contenido=LaLetra+ Lacosa;
		AgregarTexto(Contenido,"AgregarCorazones");			
}


///////////////////Esta Funcion me srive para dar los buenis dias o buenas noches/////////////////////
//si se le pasa el parametro OrdenDia sera buenos dias y si se le pasa Orden Noche sera buenas noches
//si le paso otra cosa dara error
function DiaNoche(Funcion){
	//quiero que lo primero que haga me haga un repuesto de la array para el final
	let LaArrayRepuesto=[].concat(LaArray);	
	//vacia lo que tenga el p 
	Recrear("AgregarCorazones");
	//cambiar justificado
	Justificado("izquierda");
	ReiniciarArrays();
	//toma la letra mayuscula o minuscula
	Letra=getRandomInt(0,2);

	if (Patron==3) {
		for (var i = 0; i <= Repeticiones; i++) {
			EscribirArray(i);
			Funcion(i);
			AgregarTexto("br","AgregarCorazones");
			MoverIzquierda();
		}
	} else if(Patron==2) {
		for (var i = 0; i <= Repeticiones; i++) {
			EscribirArray(i);
			Funcion(i);
			AgregarTexto("br","AgregarCorazones");
			MoverDerecha();
		}
	} else{
		for (var i = 0; i <= Repeticiones; i++) {
			EscribirArray(i);
			Funcion(i);
			AgregarTexto("br","AgregarCorazones");
		}
	}
	LaArray=LaArrayRepuesto;
}

//----------------------------------------------------------------------------------------
//---------------------FUNCIONES QUE SON UTILIZADAS PARA EL DISEÑO -------------------------------------
//---------------------------------	DISEÑO DE BOTONES----------------------------------------
//-------------------------------------------------------------------------------------------

//los divid que contiene botones principalesson

const BTN_BuenosDias=document.getElementById("BTN_BuenosDias");
const BTN_BuenasNoches=document.getElementById("BTN_BuenasNoches");
const BTN_PatronCorazonces= document.getElementById("BTN_PatronCorazonces");
const BTN_Especial=document.getElementById("BTN_Especial");
const BTN_CorazonCorazon=document.getElementById("BTN_CorazonCorazon");
const BTN_TextoCorazon=document.getElementById("BTN_TextoCorazon");

//los div que contienen botones para personalizar son:
const btn_losemojis =document.getElementById("btn_losemojis");
const btn_definirpatron =document.getElementById("btn_definirpatron");
const btn_otroemoji =document.getElementById("btn_otroemoji");
const btn_cantidadelementos =document.getElementById("btn_cantidadelementos");
const btn_textofinal =document.getElementById("btn_textofinal");
const btn_textocorazones =document.getElementById("btn_textocorazones");
const btn_retroseso =document.getElementById("btn_retroseso");
const btn_saltolinea =document.getElementById("btn_saltolinea");
const btn_modohot=document.getElementById("btn_modohot");
const btn_adelante=document.getElementById("btn_adelante");

//funcion que quita cierta clase de cierto elemento
function QuitarClase(elemento,LaClase){
	let SiNo=elemento.classList.contains(LaClase);
	if(SiNo){
		elemento.classList.remove(LaClase);
	}
}
function AgregarClase(elemento,LaClase){
	let SiNo=elemento.classList.contains(LaClase);
	if(SiNo){
		//SiNo es verdadero no hace nada porque quiere decir que ya tiene la clase
	}else{
		//siNo es falso queire decir que no tiene la clase porloque hay que quitarsela
		elemento.classList.add(LaClase);
	}
}

//funcion que le quita la clase activado a todos los botones principales
//y tambien se lo agrega al que le pasan por parametro
function QuitarClaseAgregar(elemento){
	QuitarClase(BTN_PatronCorazonces,"activado");
	QuitarClase(BTN_BuenosDias,"activado");
	QuitarClase(BTN_BuenasNoches,"activado");
	QuitarClase(BTN_Especial,"activado");
	QuitarClase(BTN_CorazonCorazon,"activado");
	QuitarClase(BTN_TextoCorazon,"activado");
	elemento.classList.add("activado");
}
//funcion que vuelve a todos invivisibles y luego
//le quita lo invisible a los botones que siemre se usan
function VolverVisible(){
	AgregarClase(btn_definirpatron,"invisible");
	AgregarClase(btn_cantidadelementos,"invisible");
	AgregarClase(btn_textofinal,"invisible");
	AgregarClase(btn_textocorazones,"invisible");
	AgregarClase(btn_saltolinea,"invisible");
	AgregarClase(btn_modohot,"invisible");
	AgregarClase(btn_adelante,"invisible");
	QuitarClase(btn_losemojis,"invisible2");
	QuitarClase(btn_otroemoji,"invisible");
	QuitarClase(btn_retroseso,"invisible");

}

var CualLlamar=2;
function BTN_F_Dia(){
	QuitarClaseAgregar(BTN_BuenosDias);
	VolverVisible();
	QuitarClase(btn_definirpatron,"invisible");
	QuitarClase(btn_cantidadelementos,"invisible");
	QuitarClase(btn_modohot,"invisible");
	CualLlamar=0;
	DiaNoche(OrdenDia);
}

function BTN_F_Noche(){
	QuitarClaseAgregar(BTN_BuenasNoches);
	VolverVisible();
	QuitarClase(btn_definirpatron,"invisible");
	QuitarClase(btn_cantidadelementos,"invisible");
	QuitarClase(btn_modohot,"invisible");
	CualLlamar=1;
	DiaNoche(OrdenNoche);

}

function BTN_F_IniciarPatron(){
	QuitarClaseAgregar(BTN_PatronCorazonces);
	VolverVisible();
	QuitarClase(btn_definirpatron,"invisible");
	QuitarClase(btn_saltolinea,"invisible");
	QuitarClase(btn_cantidadelementos,"invisible");
	QuitarClase(btn_textofinal,"invisible");
	CualLlamar=2;
	IniciarPatron();
}

function BTN_F_Especial(){
	QuitarClaseAgregar(BTN_Especial);
	VolverVisible();
	QuitarClase(btn_cantidadelementos,"invisible");
	QuitarClase(btn_textofinal,"invisible");
	CualLlamar=3;
	Especial();

}

function BTN_F_CorazonCorazones(){
	QuitarClaseAgregar(BTN_CorazonCorazon);
	VolverVisible();
	AgregarClase(btn_retroseso,"invisible");
	QuitarClase(btn_adelante,"invisible");
	CualLlamar=4;
	CorazonCorazones('clave');
}

function BTN_F_TextoCorazones(){
	QuitarClaseAgregar(BTN_TextoCorazon);
	VolverVisible();
	AgregarClase(btn_retroseso,"invisible");
	QuitarClase(btn_adelante,"invisible");
	QuitarClase(btn_textocorazones,"invisible");
	CualLlamar=5;
	TextoDeCorazones('clave');
}
// Las funciones de los botones son:
// DiaNoche(OrdenDia);
// DiaNoche(OrdenNoche);
// IniciarPatron();
// Especial();
// CorazonCorazones();



function ElComienzo(){
	if (CualLlamar==0){
		DiaNoche(OrdenDia);
	}else if(CualLlamar==1){
		DiaNoche(OrdenNoche);
	}else if (CualLlamar==3){
		Especial();
	}else if(CualLlamar==4){
		CorazonCorazones();	
	}else if(CualLlamar==5){
		TextoDeCorazones();
	}else{
		IniciarPatron();	
	}

}

//----------------------------------------------------------------------------------------
//--------------FUNCION QUE SERAN UTILIZADAS PARA EL BOTON DE CORAZON DE CORAZONES-------------------------------------
//--------------------------------CORAZON DE CORAZONES-------------------------------------------
//-------------------------------------------------------------------------------------------

//ESTA ES LA QUE INICIA TODO

//clave es para las llamadas princiaples
//clave2 es para los botones de regreso
//si no tiene clave lo llamo un emoji
function CorazonCorazones(parametro){
	//si lo llama un boton principal
	if(parametro=='clave'){
	ContadorTexCo=0;
	LaArrayCorazonesParaCorazon=new Array("🤍","🤍","🤍","🤍","🤍","🤍","🤍","🤍","🤍","🤍","🤍","❤️","❤️","❤️","❤️","❤️","❤️","❤️","❤️","❤️");
	}

	//vacia lo que tenga el p 
	Recrear("AgregarCorazones");
	//cambiar justificado
	Justificado("Centro");
	ContadorLineas=0;

	//si lo llama un emoji
		if(parametro!='clave' && parametro!='clave2'){
			F_LaArrayCorazonesParaTexto(LaArrayCorazonesParaCorazon);
			ContadorTexCo++;
			ResiduoModContador(20);
		}

	//sirve para decirme en que posicion estoy 
	let cuentisTexCo=ContadorTexCo;
	if(cuentisTexCo<=0){
		cuentisTexCo=cuentisTexCo+20;
	}
	cuentisTexCo=cuentisTexCo%20;
	cuentisTexCo++;
	//me dice en que posicion estoy
	let AgregaEsto = "---La posicion Es " + cuentisTexCo + " ---";
	AgregarTexto(AgregaEsto,"AgregarCorazones");	
	AgregarTexto("br","AgregarCorazones");AgregarTexto("br","AgregarCorazones");
	AgregarTexto("①.","AgregarCorazones");AgregarTexto("②.","AgregarCorazones"); 
	AgregarTexto("③.","AgregarCorazones");AgregarTexto("④.","AgregarCorazones");
	AgregarTexto("⑤.","AgregarCorazones");AgregarTexto("⑥.","AgregarCorazones");
	AgregarTexto("⑦.","AgregarCorazones");AgregarTexto("⑧.","AgregarCorazones");
	AgregarTexto("⑨.","AgregarCorazones");AgregarTexto("⑩.","AgregarCorazones");
	AgregarTexto("⑪","AgregarCorazones");
	AgregarTexto("br","AgregarCorazones");AgregarTexto("⑫.","AgregarCorazones");
	AgregarTexto("⑬.","AgregarCorazones");AgregarTexto("⑭.","AgregarCorazones");
	AgregarTexto("⑮.","AgregarCorazones");AgregarTexto("⑯.","AgregarCorazones");
	AgregarTexto("⑰.","AgregarCorazones");AgregarTexto("⑱.","AgregarCorazones");
	AgregarTexto("⑲.","AgregarCorazones");AgregarTexto("⑳.","AgregarCorazones");
	AgregarTexto("br","AgregarCorazones");AgregarTexto("br","AgregarCorazones");
	
	//ESCRIBIR CORAZON
	EscribirLineasCorazones("aaaaaaaaaaa");EscribirLineasCorazones("aaaxaaaxaaa");
	EscribirLineasCorazones("aaxxxaxxxaa");EscribirLineasCorazones("axxxxxxxxxa");
	EscribirLineasCorazones("aaxxxxxxxaa");EscribirLineasCorazones("aaaxxxxxaaa");
	EscribirLineasCorazones("aaaaxxxaaaa");EscribirLineasCorazones("aaaaaxaaaaa");
	EscribirLineasCorazones("aaaaaaaaaaa");

}



//----------------------------------------------------------------------------------------
//--------------FUNCIONES QUE SON UTILIZADAS PARA TEXTO DE CORAZONES-------------------------------------
//---------------------------------TEXTO DE CORAZONES----------------------------------------
//-------------------------------------------------------------------------------------------

//---compartidas
//funcion que toma elultimo elemeto de la array LaArary y lo pone en nuestra nueva array de solo 12 elementos
var LaArrayCorazonesParaTexto=new Array("🤍","🤍","🤍","🤍","🤍","🤍","🤍","❤️","❤️","❤️","❤️","❤️");
var LaArrayCorazonesParaCorazon=new Array("🤍","🤍","🤍","🤍","🤍","🤍","🤍","🤍","🤍","🤍","🤍","❤️","❤️","❤️","❤️","❤️","❤️","❤️","❤️","❤️");

//funcion que vuelve le ContadroTexco a su residuo modulo 12
function ResiduoModContador(mod){
	if(ContadorTexCo<=0){
		ContadorTexCo=ContadorTexCo+mod;
	}
	ContadorTexCo=ContadorTexCo%mod;
	console.log("ContadorTexCo", ContadorTexCo);
}


//funciones de los botones
var ContadorTexCo=0;
function TexCo_Adelante(){
	ContadorTexCo++;
	
	if (CualLlamar==4){CorazonCorazones('clave2');ResiduoModContador(20);}
	if (CualLlamar==5){TextoDeCorazones('clave2');ResiduoModContador(12);}

}
function TexCo_Atras(){
	ContadorTexCo--;
	if (CualLlamar==4){CorazonCorazones('clave2');ResiduoModContador(20);}
	if (CualLlamar==5){TextoDeCorazones('clave2');ResiduoModContador(12);}
}

//funcion que toma el ultimo elemento de LaArray y lo pone en la array que le pasan de parametro
function F_LaArrayCorazonesParaTexto(UnaArray){
	UnaArray[ContadorTexCo]=LaArray[LaArray.length-1];
	//despues de tomar el elemento de la array que me borre su ultimo elemeto para que quede tal cual
	LaArray.pop();
	console.log("LaArrayCorazonesParaTexto", UnaArray);
}

//funcion que  escribe lineas
var ElementoAoX;
var ContadorLineas=0;
var Desfase=6;
var ArrayCorazonesOTexto=LaArrayCorazonesParaCorazon;
function EscribirLineasCorazones(UnaCadena){
	//solo se va a repetir siete porque en un principio se supone que todas las string necesarias son de 7
	for(var i=0; i<UnaCadena.length; i++){
		
		//si es llamada por corazon de corazones
		if (CualLlamar==4){Desfase=10;ArrayCorazonesOTexto=LaArrayCorazonesParaCorazon;}
		//si es llamada por texto de corazones
		if (CualLlamar==5){Desfase=6;ArrayCorazonesOTexto= LaArrayCorazonesParaTexto;}


		let AoX=UnaCadena.substr(i,1);
		if(AoX=="a"){ElementoAoX=ArrayCorazonesOTexto[i];}
		if(AoX=="x"){ElementoAoX=ArrayCorazonesOTexto[i+Desfase];}
		
		//esto es para revuisar sobre los botones especiales
		function Revision(unarreglo,palabraclave1,palabraclave2){
			let pos=ContadorLineas%unarreglo.length;
			let posatras=unarreglo.length-1-pos;
			if(ElementoAoX==palabraclave1){ElementoAoX=unarreglo[pos];}
			if(ElementoAoX==palabraclave2){ElementoAoX=unarreglo[posatras];}			 
		}
		Revision(Corazones,"UwU","WuW");
		Revision(Estrellas,"Estrella"," ");
		Revision(Flores,"Flor"," ");
		Revision(CorazonesRojos,"CorazonRojo"," ");
		Revision(CorazonesRosas,"CorazonRosa"," ");
		Revision(CorazonesArcoiris,"CorrazonArcoIris"," ");

		if (ElementoAoX===undefined){
			//este if usa la desigualdad estricta === para ver si esta indefinido
			ElementoAoX=RamdomArray(Emojis_Corazones);
		}

		//ahora si agrega el texto
		AgregarTexto(ElementoAoX,"AgregarCorazones");	
	}

	//al fnal de escribir la linea escribe un espacio
	AgregarTexto("br","AgregarCorazones");
	ContadorLineas++;	
}
//--termina compartidas

//funcion que es llamada por el  boton del tipo text y tomara el texto
var ElTextoDeCorazones="HOLA"
function CualTextoDeCorazones(){
	ElTextoDeCorazones=document.getElementById("Texto_Corazones").value;	
	if (ElTextoDeCorazones==null){
		ElTextoDeCorazones="HOLA";
	}

	TextoDeCorazones('clave2');
}


//funcion que escrbe letras usando la que escribe lineas
function EscribirTextoCorazones(LaLetra){
	EscribirLineasCorazones("aaaaaaa");
	if (LaLetra=="A"||LaLetra=="a"){
		EscribirLineasCorazones("aaaxaaa");EscribirLineasCorazones("aaxaxaa");EscribirLineasCorazones("axaaaxa");EscribirLineasCorazones("axxxxxa");EscribirLineasCorazones("axaaaxa");EscribirLineasCorazones("axaaaxa");EscribirLineasCorazones("axaaaxa");
	}
	if (LaLetra=="B"||LaLetra=="b"){
		EscribirLineasCorazones("axxxxaa");EscribirLineasCorazones("axaaaxa");EscribirLineasCorazones("axaaaxa");EscribirLineasCorazones("axxxxaa");EscribirLineasCorazones("axaaaxa");EscribirLineasCorazones("axaaaxa");EscribirLineasCorazones("axxxxaa");
	}
	if(LaLetra=="C"||LaLetra=="c"){
		EscribirLineasCorazones("aaaxxxa");EscribirLineasCorazones("aaxaaaa");EscribirLineasCorazones("axaaaaa");EscribirLineasCorazones("axaaaaa");EscribirLineasCorazones("aaxaaaa");EscribirLineasCorazones("aaaxxxa");
	}
	if (LaLetra=="D"||LaLetra=="d"){
		EscribirLineasCorazones("axxxaaa");EscribirLineasCorazones("axaaxaa");EscribirLineasCorazones("axaaaxa");EscribirLineasCorazones("axaaaxa");EscribirLineasCorazones("axaaaxa");EscribirLineasCorazones("axaaxaa");EscribirLineasCorazones("axxxaaa");
	}	

	if (LaLetra=="E"||LaLetra=="e"){
		EscribirLineasCorazones("axxxxxa");EscribirLineasCorazones("axaaaaa");EscribirLineasCorazones("axaaaaa");EscribirLineasCorazones("axxxaaa");EscribirLineasCorazones("axaaaaa");EscribirLineasCorazones("axaaaaa");	EscribirLineasCorazones("axxxxxa");
	}
	if (LaLetra=="F"||LaLetra=="f"){
		EscribirLineasCorazones("axxxxxa");EscribirLineasCorazones("axaaaaa");EscribirLineasCorazones("axaaaaa");EscribirLineasCorazones("axxxaaa");EscribirLineasCorazones("axaaaaa");EscribirLineasCorazones("axaaaaa");	EscribirLineasCorazones("axaaaaa");
	}
	if(LaLetra=="G"||LaLetra=="g"){
		EscribirLineasCorazones("aaaxxxa");EscribirLineasCorazones("aaxaaaa");EscribirLineasCorazones("axaaaaa");EscribirLineasCorazones("axaaxxa");EscribirLineasCorazones("aaxaaxa");EscribirLineasCorazones("aaaxxaa");
	}
	if(LaLetra=="H"||LaLetra=="h"){
		EscribirLineasCorazones("axaaaxa");EscribirLineasCorazones("axaaaxa");EscribirLineasCorazones("axaaaxa");EscribirLineasCorazones("axxxxxa");EscribirLineasCorazones("axaaaxa");EscribirLineasCorazones("axaaaxa");EscribirLineasCorazones("axaaaxa");
	}
	if(LaLetra=="I"||LaLetra=="i"){
		EscribirLineasCorazones("axxxxxa");EscribirLineasCorazones("aaaxaaa");EscribirLineasCorazones("aaaxaaa");EscribirLineasCorazones("aaaxaaa");EscribirLineasCorazones("aaaxaaa");EscribirLineasCorazones("axxxxxa");
	}
	if(LaLetra=="J"||LaLetra=="j"){
		EscribirLineasCorazones("axxxxxa");EscribirLineasCorazones("aaaxaaa");EscribirLineasCorazones("aaaxaaa");EscribirLineasCorazones("aaaxaaa");EscribirLineasCorazones("axaxaaa");EscribirLineasCorazones("aaxaaaa");
	}
	if(LaLetra=="K"||LaLetra=="k"){
		EscribirLineasCorazones("axaaaxa");EscribirLineasCorazones("axaaxaa");EscribirLineasCorazones("axaxaaa");EscribirLineasCorazones("axxaaaa");EscribirLineasCorazones("axaxaaa");EscribirLineasCorazones("axaaxaa");EscribirLineasCorazones("axaaaxa");
	}
	if(LaLetra=="L"||LaLetra=="l"){
		EscribirLineasCorazones("axaaaaa");EscribirLineasCorazones("axaaaaa");EscribirLineasCorazones("axaaaaa");EscribirLineasCorazones("axaaaaa");EscribirLineasCorazones("axaaaaa");EscribirLineasCorazones("axxxxaa");
	}
	if(LaLetra=="M"||LaLetra=="m"){
		EscribirLineasCorazones("axaaaxa");EscribirLineasCorazones("axxaxxa");EscribirLineasCorazones("axaxaxa");EscribirLineasCorazones("axaaaxa");EscribirLineasCorazones("axaaaxa");EscribirLineasCorazones("axaaaxa");		
	}
	if(LaLetra=="N"||LaLetra=="n"){
		EscribirLineasCorazones("axaaaxa");EscribirLineasCorazones("axxaaxa");EscribirLineasCorazones("axaxaxa");EscribirLineasCorazones("axaaxxa");EscribirLineasCorazones("axaaaxa");		
	}
	if(LaLetra=="Ñ"||LaLetra=="ñ"){
		EscribirLineasCorazones("axxxxxa");EscribirLineasCorazones("aaaaaaa");EscribirLineasCorazones("axaaaxa");EscribirLineasCorazones("axxaaxa");EscribirLineasCorazones("axaxaxa");EscribirLineasCorazones("axaaxxa");EscribirLineasCorazones("axaaaxa");		
	}
	if(LaLetra=="O"||LaLetra=="o"){
		EscribirLineasCorazones("aaxxxaa");EscribirLineasCorazones("axaaaxa");EscribirLineasCorazones("axaaaxa");EscribirLineasCorazones("axaaaxa");EscribirLineasCorazones("axaaaxa");EscribirLineasCorazones("aaxxxaa");
	}
	if(LaLetra=="P"||LaLetra=="p"){
		EscribirLineasCorazones("axxxaaa");EscribirLineasCorazones("axaaxaa");EscribirLineasCorazones("axaaxaa");EscribirLineasCorazones("axxxaaa");EscribirLineasCorazones("axaaaaa");EscribirLineasCorazones("axaaaaa");EscribirLineasCorazones("axaaaaa");
	}
	if(LaLetra=="Q"||LaLetra=="q"){
		EscribirLineasCorazones("aaxxxaa");EscribirLineasCorazones("axaaaxa");EscribirLineasCorazones("axaaaxa");EscribirLineasCorazones("axaaaxa");EscribirLineasCorazones("axaxaxa");EscribirLineasCorazones("aaxxxaa");EscribirLineasCorazones("aaaaaxa");
	}
	if(LaLetra=="R"||LaLetra=="r"){
		EscribirLineasCorazones("axxxxaa");EscribirLineasCorazones("axaaaxa");EscribirLineasCorazones("axaaaxa");EscribirLineasCorazones("axxxxaa");EscribirLineasCorazones("axaaaxa");EscribirLineasCorazones("axaaaxa");EscribirLineasCorazones("axaaaxa");
	}
	if(LaLetra=="S"||LaLetra=="s"){
		EscribirLineasCorazones("aaxxxxa");EscribirLineasCorazones("axaaaaa");EscribirLineasCorazones("aaxaaaa");EscribirLineasCorazones("aaaxaaa");EscribirLineasCorazones("aaaaxaa");EscribirLineasCorazones("aaaaaxa");EscribirLineasCorazones("axxxxaa");
	}	
	if(LaLetra=="T"||LaLetra=="t"){
		EscribirLineasCorazones("axxxxxa");EscribirLineasCorazones("aaaxaaa");EscribirLineasCorazones("aaaxaaa");EscribirLineasCorazones("aaaxaaa");EscribirLineasCorazones("aaaxaaa");EscribirLineasCorazones("aaaxaaa");
	}
	if(LaLetra=="U"||LaLetra=="u"){
		EscribirLineasCorazones("axaaaxa");EscribirLineasCorazones("axaaaxa");EscribirLineasCorazones("axaaaxa");EscribirLineasCorazones("axaaaxa");EscribirLineasCorazones("aaxxxaa");	
	}
		if(LaLetra=="V"||LaLetra=="v"){
		EscribirLineasCorazones("axaaaxa");EscribirLineasCorazones("axaaaxa");EscribirLineasCorazones("axaaaxa");EscribirLineasCorazones("aaxaxaa");EscribirLineasCorazones("aaaxaaa");	
	}

	if(LaLetra=="Z"||LaLetra=="z"){
		EscribirLineasCorazones("aaaaaaa");
		EscribirLineasCorazones("aaaaaaa");
		EscribirLineasCorazones("aaaaaaa");
		EscribirLineasCorazones("aaaaaaa");
		EscribirLineasCorazones("aaaaaaa");
		EscribirLineasCorazones("aaaaaaa");
	}
	if(LaLetra==":"){
		EscribirLineasCorazones("aaaxaaa");
		EscribirLineasCorazones("aaxxxaa");
		EscribirLineasCorazones("aaaxaaa");
		EscribirLineasCorazones("aaaaaaa");
		EscribirLineasCorazones("aaaxaaa");
		EscribirLineasCorazones("aaxxxaa");
		EscribirLineasCorazones("aaaxaaa");
	}
	if(LaLetra=="."){
		EscribirLineasCorazones("aaxaxaa");
		EscribirLineasCorazones("axxxxxa");
		EscribirLineasCorazones("aaxxxaa");
		EscribirLineasCorazones("aaaxaaa");
	}
	if(LaLetra=="1"){
		EscribirLineasCorazones("aaxxaaa");
		EscribirLineasCorazones("axaxaaa");
		EscribirLineasCorazones("aaaxaaa");
		EscribirLineasCorazones("aaaxaaa");
		EscribirLineasCorazones("aaaxaaa");
		EscribirLineasCorazones("axxxxxa");
	}
	if(LaLetra==" "){
		for(let i=0; i<1; i++){EscribirLineasCorazones("aaaaaaa");}
	}
	EscribirLineasCorazones("aaaaaaa");
}



//eESTA ES LA QUE INICIA TODO

//clave es para las llamadas princiaples
//clave2 es para los botones de regreso
//si no tiene clave lo llamo un emoji
function TextoDeCorazones(parametro){
	//si lo llama un boton principal
	if(parametro=='clave'){
	ContadorTexCo=0;
	LaArrayCorazonesParaTexto=new Array("🤍","🤍","🤍","🤍","🤍","🤍","🤍","❤️","❤️","❤️","❤️","❤️");
	}

	//vacia lo que tenga el p 
	Recrear("AgregarCorazones");
	//cambiar justificado
	Justificado("Centro");
	ContadorLineas=0;

	//si lo llama un emoji
		if(parametro!='clave' && parametro!='clave2'){
			F_LaArrayCorazonesParaTexto( LaArrayCorazonesParaTexto);
			ContadorTexCo++;
			ResiduoModContador(13);
		}

		//sirve para decirme en que posicion estoy 
	let cuentisTexCo=ContadorTexCo;
	if(cuentisTexCo<=0){
		cuentisTexCo=cuentisTexCo+12;
	}
	cuentisTexCo=cuentisTexCo%12;
	cuentisTexCo++;
	//me dice en que posicion estoy
	let AgregaEsto = "---La posicion Es " + cuentisTexCo+" ---";
	AgregarTexto(AgregaEsto,"AgregarCorazones");	
	AgregarTexto("br","AgregarCorazones");AgregarTexto("br","AgregarCorazones");
	AgregarTexto("①.","AgregarCorazones");AgregarTexto("②.","AgregarCorazones"); 
	AgregarTexto("③.","AgregarCorazones");AgregarTexto("④.","AgregarCorazones");
	AgregarTexto("⑤.","AgregarCorazones");AgregarTexto("⑥.","AgregarCorazones");
	AgregarTexto("⑦.","AgregarCorazones");
	AgregarTexto("br","AgregarCorazones");	
	AgregarTexto("⑧.","AgregarCorazones");AgregarTexto("⑨.","AgregarCorazones"); 
	AgregarTexto("⑩.","AgregarCorazones");AgregarTexto("⑪.","AgregarCorazones");
	AgregarTexto("⑫.","AgregarCorazones");AgregarTexto("br","AgregarCorazones");
	AgregarTexto("br","AgregarCorazones");

	//aqui ya empieza a llamar
	for (var i = 0 ; i < ElTextoDeCorazones.length; i++) {
		let UnaLetra=ElTextoDeCorazones.substr(i,1);
		EscribirTextoCorazones(UnaLetra);
	}
			
}


