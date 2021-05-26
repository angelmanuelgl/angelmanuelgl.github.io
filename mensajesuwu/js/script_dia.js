
//INICIAL........

//para elegir los adornos del dia
var primero;
var segundo;	
var a_uno;
var a_dos;
function adornamiento_dia(){
	primero=getRandomInt(0,9);
	segundo=getRandomInt(0,9);
	a_uno=adornos[primero];
	a_dos=adornos[segundo];	
	
}
	
	
//añade corazones con los adornos por si los textos no son suficientes	
function añadir(valor){
	//poner el corazon correcto
	var uwu=corazones[valor];
	var contenido=a_uno+uwu+a_dos;
	agregar(contenido);
}


	//SECCION UNO---------------------------------------------------------------

		//escribe buenos dias
		function UNO_UNO (valor){
			//poner el corazon correcto
			let uwu=corazones[valor];
			
			//poner nombre
			let nombre=nombrar();
			
			//para la letra inicial
			let letras=new Array("B","b");
			let laLetra=letras[letra];
			
			//para hacer plural
			let plural=getRandomInt(0,2);
			let s=new Array("","s");
			let S= s[plural];
			let os=new Array("","os");
			let OS= os[plural];
			
			//escribir
			let contenido=a_uno+uwu+a_dos+laLetra+"uen"+ OS +" dia"+S +" "+ nombre;
			agregar(contenido);
			
		}
		
		//pregunta como amaneció
		function UNO_DOS (valor){
			//poner el corazon correcto
			var uwu=corazones[valor];
			
			//poner nombre
			let nombre=nombrar();
			
			//para la letra inicial
			var letras=new Array("C","c");
			var laLetra=letras[letra];
			
			//escribi
			var contenido=a_uno+uwu+a_dos+"¿"+laLetra+ "ómo amaneció " + nombre + "?";
			agregar(contenido);
		}
		
		//pregunta si durmio bien
		function UNO_TRES (valor){
			//poner el corazon correcto
			var uwu=corazones[valor];
			
			//poner nombre
			let nombre=nombrar();
			
			//para la letra inicial
			var letras=new Array("D","d");
			var laLetra=letras[letra];
			
			//escribir
			var contenido=a_uno+uwu+a_dos+"¿"+laLetra+"urmió bien " + nombre + "?";
			agregar(contenido);
		}
		
		//pregunta si descanso
		function UNO_CUATRO (valor){
			//poner el corazon correcto
			var uwu=corazones[valor];
			
			//poner nombre
			let nombre=nombrar();
			
			//para la letra inicial
			var letras=new Array("D","d");
			var laLetra=letras[letra];
			
			//escribir
			var contenido=a_uno+uwu+a_dos+"¿"+laLetra+"escansó " + nombre + "?";
			agregar(contenido);
		}
		
	//SECCION DE ME ENCANTARIA Y OJALA ---------------------------------------------------------
	//array con las cosas que se pueden decir en el dia
	var cosas=new Array("amanecer a tu lado", "llenarte de besitos","despertarte con besitos",
	"despertarte con muchos muchos besitos","ver tu carita preciosa al despertar","verte todas las mañanas",
	"acariciar tu cabello","decirte lo mucho que te amo", "decirte lo mucho que te quiero",
	"decirte en persona todo lo que siento por ti");
		
		
		
		//UNO me gustaria o encantaria 
		
		function DOS_UNO (valor){
			//poner el corazon correcto
			var uwu=corazones[valor];
			//elegir la cosa que me gustaria hacer
			var numcosa=getRandomInt(0,10);
			var cosa=cosas[numcosa];
			
			if (letra>=1){
				//minuscula
				//elegir me gustaria encantaria o ojala pudiera
				var quizas=getRandomInt(0,3);
				var m=maybe_min[quizas];
				
				//escribir
				var contenido=a_uno+uwu+a_dos+ m +" "+ cosa;
				agregar(contenido);
			} else {
				//Mayuscula
				//elegir me gustaria encantaria o ojala pudiera
				var quizas=getRandomInt(0,3);
				var m=maybe_mas[quizas];
							
				//escribir
				var contenido=a_uno+uwu+a_dos+ m +" "+ cosa;
				agregar(contenido);
			}
		}
		
		
//SECCION Te quiero  te adoro me fasinas me encatas te amo ---------------------------------------------------------

	//decir te... amo  quiero adoro
	function Te__d (valor1,valor){
		//poner el corazon correcto
		var uwu=corazones[valor];
		
		//poner nombre
		let nombre=nombrar();
		
		//para la letra inicial
		var letras=new Array("Te ","te ");
		var laLetra=letras[letra];
		
		//muchos
		var nummucho=getRandomInt(0,7);
		var mucho= muchos[nummucho];
		
		//escribir
		var contenido=a_uno+uwu+a_dos+laLetra+ valor1 +" " + mucho +" "+ nombre;
		agregar(contenido);
	}

	//me ... encantas 
	function Me__d (valor1,valor){
		//poner el corazon correcto
		var uwu=corazones[valor];
		
		//poner nombre
		let nombre=nombrar();
		
		//para la letra inicial
		var letras=new Array("Me ","me ");
		var laLetra=letras[letra];
		
		//mucho o muchos o mucho mucho o muchsimo o etc
		var nummucho=getRandomInt(0,7);
		var mucho= muchos[nummucho];
		
		//escribir
		var contenido=a_uno+uwu+a_dos+laLetra+ valor1 +" " + mucho +" "+ nombre;
		agregar(contenido);
	}

	
	
	function Buenos_Dias(){
		reiniciar_p();
		adornamiento_dia();
		//llamar funciones para hacer parrafos	
		UNO_UNO (0);
		UNO_DOS (1);
		UNO_TRES (2);
		UNO_CUATRO(3);
		DOS_UNO(4);
		DOS_UNO(5);
		DOS_UNO(6);
		DOS_UNO(7);
		Te__d ("quiero",8);
		Te__d ("adoro",9);
		Me__d ("encantas",10);
		Me__d ("fasinas",11)
		Te__d ("amo",12);
		añadir(13);
		añadir(14);
		añadir(15);
		añadir(16);
	}
