var botonfila=document.getElementById('fila');
var botoncolumna=document.getElementById('columna');

var cantfila=20;
var cantcolumna=20;

var LaMatriz =[ ];

// esta funcion es para general la tabla y la matriz por primera vez
function genera_tabla() {

	console.log("estoy llamadno ala funcion que genera tabla");
	// desaprece el objeto
	document.getElementById('filascolumas').classList.add("desaparece")
	//se asegura de que no esten vacios
	if(botonfila.value==""){
		botonfila.value=20;
	}
	if(botoncolumna.value==""){
		botoncolumna.value=20;
	}
	cantfila=botonfila.value;
  	cantcolumna=botoncolumna.value;

  	// Obtener la referencia del elemento body
  	var contenedor = document.getElementById('contienetabla');

  	// Crea un elemento <table> y un elemento <tbody>
 	var tabla   = document.createElement("table");
  	var tblBody = document.createElement("tbody");
 	tblBody.setAttribute("id","Tabla");

 	// Crea las celdas
  	for (var i = 0; i < cantfila; i++) {
  
    	// Crea las hileras de la tabla y de la array 
    	var hilera = document.createElement("tr");
    	var ArrayColumna=[]
    	for (var j = 0; j < cantcolumna; j++) {
      		// Crea un elemento <td> le pone una id 
      		// y que llame a la funcion cambio cuando se haga click
      		// la celda se añade a la hilera
      		var celda = document.createElement("td");
      		celda.setAttribute("onclick", "cambioestado(" +i+ "," +j+")");
      		celda.setAttribute("id", i+" "+j);
      		celda.classList.add("muerto")

      		// agrega a la hilera de la tabla y de la array cada celda
      		hilera.appendChild(celda); 	
      		ArrayColumna.push(false);	 	
    		}
    	// agrega a la array cada hilera
    	LaMatriz.push(ArrayColumna)
    	// agrega la hilera al final de la tabla (al final del elemento tblbody)
    	tblBody.appendChild(hilera);
	}

  	// posiciona el <tbody> debajo del elemento <table>
  	tabla.appendChild(tblBody);
  	contenedor.appendChild(tabla);

 	console.log("LaMatriz", LaMatriz);
}


// funcion para cambiar de estado cada que se le a click
function cambioestado (fila,columna){
	
	var Celda=document.getElementById(fila +" "+ columna);
		
	if (Celda.classList.contains("vivo")){
		Celda.classList.remove("vivo");
		Celda.classList.add("muerto");
		LaMatriz[fila][columna]=false;

	} else if ( Celda.classList.contains("muerto")){
		Celda.classList.remove("muerto");
		Celda.classList.add("vivo");
		LaMatriz[fila][columna]=true;

	}
}



// esta funcion toma los datos de una matriz y los transforma a la tabla
function MatrizToTabla(ParametroMatriz){

	for (var i = 0; i < ParametroMatriz.length; i++) {
		

		for (var j = 0; j < ParametroMatriz[i].length; j++) {
			console.log("i", i, j);
			var Celda=document.getElementById(i +" "+ j);
			console.log("ParametroMatriz[i][j]", ParametroMatriz[i][j]);

			if(ParametroMatriz[i][j]){
				// si la matriz esta èn verdadero vuelve a la celda viva
				Celda.classList.remove("muerto");
				Celda.classList.add("vivo");
			} else  {
				// si la matriz esta en falso vulve a la celda muerta
				Celda.classList.remove("vivo");
				Celda.classList.add("muerto");
			}			
		}	
	}
}

// esta funcion cuenta la cantidad de vecinas vivas de cierta array
function VecinasVivas(ParametroMatriz, fils, colum){
	var contador=0;
	
	function RevisarDefinicion (par1, par2 ){
		// revisa primero un parametro y no es undefined revisa el ottro
		// si ambos no son undefined regresa true de contrario regresa false
		if(  ! (LaMatriz[par1] === undefined)  ){
			if(  ! (LaMatriz[par1][par2]=== undefined)  ){
				return true;
			} else{	return false;	}
		} else{	return false;	}
	}

	function Contar(par1,par2){
		// si se esta definido y ademas es true se cuenta
		if(RevisarDefinicion (par1,par2)){
			if(LaMatriz[par1][par2]===true){contador++}
		}
	}
	// comprueba las celdas vecinas
	Contar( fils-1 , colum-1);
	Contar( fils-1 , colum);
	Contar( fils-1 , colum+1);

	Contar( fils , colum-1);
	Contar( fils , colum+1);

	Contar( fils+1 , colum-1);
	Contar( fils+1 , colum);
	Contar( fils+1 , colum+1);

	return contador;
}


var OtraMatrizCopia=[];
function pasosiguiente(){	
	
	// copia la matiz solo si no se habia copiado antes
	// para saber si se ha copiado antes 
	// revisamos que el ultimo elemneto no sea undefined
	if(  (OtraMatrizCopia[LaMatriz.length-1]===undefined ) ) {
  		for (var i = 0; i < LaMatriz.length; i++) {
    		// Crea las hileras de la tabla y de la array 
    		var ArrayColumna=[]
    		for (var j = 0; j < LaMatriz[i].length; j++) { 	
      			ArrayColumna.push(LaMatriz[i][j]);	 	
    		}
    		// agrega a la array cada hilera
    		OtraMatrizCopia.push(ArrayColumna)
		}
		console.log("traMatrizCopia", OtraMatrizCopia);
	}

	// revisa las reglas y pone los resultados en la patriz de la copia
	for (var i = 0; i < LaMatriz.length; i++) {
		
		for (var j = 0; j < LaMatriz[i].length; j++) {
			var vecinas=VecinasVivas(LaMatriz,i,j)
			
			// -- // si esta muerta y tiene 3 vecinas vivas, vuelve a la vida		
			if( !LaMatriz[i][j] && (vecinas==3) ){
				OtraMatrizCopia[i][j]=true;
			} 
			// -- // si esta viva hay solo 1 o mas de 4, se muere
			else if ( LaMatriz[i][j] && (vecinas==1 ||vecinas==0||vecinas>=4 ) ){
				OtraMatrizCopia[i][j]=false;
			}else if( LaMatriz[i][j] && (vecinas==2 ||vecinas==3) ){
				OtraMatrizCopia[i][j]=true;
			}

		}
	}

	// pasa los resultados de la matriz copia a la matriz original
	LaMatriz= [];
	for (var i = 0; i < OtraMatrizCopia.length; i++) {	
    	// Crea las hileras de la tabla y de la array 
    	var ArrayColumna=[]
    	for (var j = 0; j < OtraMatrizCopia[i].length; j++) { 	
      		ArrayColumna.push(OtraMatrizCopia[i][j]);	 	
    	}
    	// agrega a la array cada hilera
    	LaMatriz.push(ArrayColumna)
	}
    	console.log("LaMatriz", LaMatriz);


	MatrizToTabla(LaMatriz);
	console.log("LaMatriz", LaMatriz);
}

var IdentificadorIntervalo;
function Avanzar(){
	IdentificadorIntervalo=setInterval(pasosiguiente, 400);
}
	

function Detener(){
	clearInterval(IdentificadorIntervalo)
}