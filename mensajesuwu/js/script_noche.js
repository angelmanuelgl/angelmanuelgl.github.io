
//INICIAL........

//para elegir los adornos de la noche
var primero_n;
var segundo_n;
var n_uno;
var n_dos;
function adornamiento_noche(){
	primero_n=getRandomInt(0,14);
	segundo_n=getRandomInt(0,14);
	n_uno=adornos_noche[primero_n];
	n_dos=adornos_noche[segundo_n];		
}

function añadir_noche(valor){
	//poner el corazon correcto
	var uwu=corazones[valor];
	var contenido=n_uno+uwu+n_dos;
	agregar(contenido);
}

//SECCION 1---------------------
	
	//escribe buenas noches
	function N_UNO (valor){
		//poner el corazon correcto
		let uwu=corazones[valor];
		
		//poner nombre
		let nombre=nombrar();
		
		//para la letra inicial
		let letras=new Array("B","b");
		let laLetra=letras[letra];
		
		//no hay para hacer plural o singular porque no hay buenas noches y buena noche	
		
		//escribir
		let contenido=n_uno+uwu+n_dos+laLetra+"uenas noches " + nombre;
		agregar(contenido);			
		}
		
	//descansa
	function N_DOS(valor){
		//poner el corazon correcto
		let uwu=corazones[valor];
		
		//poner nombre
		let nombre=nombrar();
		
		//para la letra inicial
		let letras=new Array("D","d");
		let laLetra=letras[letra];
		
		//escribir
		let contenido=n_uno+uwu+n_dos+laLetra+"escansa " + nombre;
		agregar(contenido);		
	}
	
	//dulces sueños
	function N_TRES(valor){
		//poner el corazon correcto
		let uwu=corazones[valor];
		
		//poner nombre
		let nombre=nombrar();
		
		//para la letra inicial
		let letras=new Array("D","d");
		let laLetra=letras[letra];
		
		//escribir
		let contenido=n_uno+uwu+n_dos+laLetra+"ulces sueños " + nombre;
		agregar(contenido);		
	}

	//descansa
	function N_CUATRO(valor){
		//poner el corazon correcto
		let uwu=corazones[valor];
		
		//poner nombre
		let nombre=nombrar();
		
		//para la letra inicial
		let letras=new Array("D","d");
		let laLetra=letras[letra];
		
		//escribir
		let contenido=n_uno+uwu+n_dos+laLetra+"escansa " + nombre;
		agregar(contenido);		
	}


//SECCION Te quiero  te adoro me fasinas me encatas te amo ---------------------------------------------------------
	

	//decir te... amo  quiero adoro
	function Te__n (valor1,valor){
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
		var contenido=n_uno+uwu+n_dos+laLetra+ valor1 +" " + mucho +" "+ nombre;
		agregar(contenido);
	}

	//me ... encantas 
	function Me__n (valor1,valor){
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
		var contenido=n_uno+uwu+n_dos+laLetra+ valor1 +" " + mucho +" "+ nombre;
		agregar(contenido);
	}
	
//SECCION DE ME ENCANTARIA Y OJALA ---------------------------------------------------------
	
	//ojala pudiera, me encantaria, 
	var cosa_n=new Array("llenarte de besitos","darte un besito de buenas noches",
	"dormir a tu lado","acariciar tu cabello mientras nos dormimos", "abrazarte y decirte lo mucho que te amo",
	"comerte a besitos", "estar siempre a tu lado", "abrazarte y escuchar tu respiracion", 
	"ver tus hermosos ojos mientras nos quedamos dormidos")
	
	function Encantaria_n (valor){
		//poner el corazon correcto
		var uwu=corazones[valor];
						
			//elejir la cosa que me gustaria hacer
			let numcosa=getRandomInt(0,9);
			let lacosa=cosa_n[numcosa];
				
		if (letra>=1){
			//minuscula
			//elegir me gustaria encantaria o ojala pudiera
			let quizas=getRandomInt(0,3);
			let m=maybe_min[quizas];

			//escribir
			var contenido=n_uno+uwu+n_dos+ m +" "+ lacosa;
			agregar(contenido);
		} else {
			//Mayuscula
			//elegir me gustaria encantaria o ojala pudiera
			let quizas=getRandomInt(0,3);
			let m=maybe_mas[quizas];
			
			//escribir
			var contenido=n_uno+uwu+n_dos+ m +" "+ lacosa;
			agregar(contenido);
		}
	}
	//ojala pudieramos
	var cosas_n=new Array("dormirnos abrazaditos","darnos muchos besitos de buenas noches","dormir juntos",
	"dormir juntos y darnos muchos besitos", "darnos muchos besitos mientras nos quedamos dormidos")		
	
	function ojala_n (valor){
		//poner el corazon correcto
		let uwu=corazones[valor];
				
		//para la letra inicial
		let letras=new Array("O","o");
		let laLetra=letras[letra];
		
		//elejir la cosa que me gustaria hacer
		let numcosa=getRandomInt(0,5);
		let lacosa=cosas_n[numcosa];
		
		//escribir
		let contenido=n_uno+uwu+n_dos+laLetra+"jalá puedieramos " + lacosa;
		agregar(contenido);
			
		}	
	
	//ojala sueñe y ojala sueñes conmigo  OJO ESTA HABARCA DOS PARRAFOS
	function ojalasueñe_n (valor){
		//poner el corazon correcto
		let uwu=corazones[valor];				
		//para la letra inicial
		let letras=new Array("O","o");
		let laLetra=letras[letra];		
		//poner nombre
		let nombrecito=new Array ("Karensita","Kanrechita","Kanresita preciosa","Kanresita hermosa",
		"Kanresita preciosisima","Kanresita hermosisima","Kanrechita preciosa","Kanrechita hermosa", 
		"Kanrechita preciosisima","Kanrechita hermosisima", "futura esposa","amor de mi vida");				
		let names=getRandomInt(0,12);
		let nombre=nombrecito[names];
		//escribir
		let contenido=n_uno+uwu+n_dos+laLetra+"jalá sueñe con mi " + nombre;
		agregar(contenido);
		//segunda escritura
		valor=valor+1;
		uwu=corazones[valor];
		contenido=n_uno+uwu+n_dos+laLetra+"jalá sueñes conmigo";
		agregar(contenido);			
		}	
	
	
	
	
function Buenas_Noches(){
	reiniciar_p();
	adornamiento_noche();
	N_UNO (0);
	N_DOS(1);
	N_TRES(2);
	N_CUATRO(3);
	Te__n ("quiero",4);
	Te__n ("adoro",5);
	Me__n ("encantas",6);
	Me__n ("fasinas",7)
	Te__n ("amo",8);
	Encantaria_n (9);
	Encantaria_n (10);
	Encantaria_n (11);
	Encantaria_n (12);
	ojala_n (13);
	ojalasueñe_n (14);
	añadir_noche(16);
}

