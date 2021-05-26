//array con datos
	var corazones=new Array("♥️","❤️","🧡","💛","💚","💙","💜","❣️","💘","💓","💕","💞","💖","💗","💝","💟","🤍")
	var nombres=new Array("mi crush hermosa", "mi niña preciosa", "mi amor", "mi amocito", 
	"mi amor de mi vida", "mi corazon", "mi corazoncito", "mi Karensita preciosa", "mi Karenchita preciosa", 
	"mi Karensita", "mi vida", "mi todo", "mi solecito", "mi futura esposa");
	var adornos=new Array("☀️","🌼","☀️","🌺","🌸","☀️","🌈","🥰","☀️");	
	var adornos_noche=new Array("✨","⭐","🌟","🌙","💫","✨","⭐","🌟","🌙","💫","🌸","🌺","🌼","🥰")
	var maybe_min=new Array("ojalá pudiera","me encantaría","me gustaría");
	var maybe_mas=new Array("Ojalá pudiera","Me encantaría","Me gustaría");
	var muchos=new Array(" ","mucho","mucho mucho","mucho mucho mucho","muchísimo","muchisisimo","muchisisisimo");

//funcion copiar
 function copiar(){
	//elemento de donde vamos a copiar
	var elemento=document.getElementById("texto");
	// creamos un input falso que tendra el texto que tiene el elemento
	var inputFalso=document.createElement("input");
	inputFalso.setAttribute("Value",elemento.innerHTML);
	//agregamos el input falso al body
	document.body.appendChild(inputFalso);	
	//seleccionamos el input falso
	inputFalso.select();
	//ya que tenemos seleccionado el input falso podemos copiarlo con execComand
	document.execCommand("copy");
	//borramos el input falso porque no queremos que se vea
	document.body.removeChild(inputFalso);
	
}      
	
var letra;
//borra el p que esta dentro del div y lo vuelve a crear en su lugar
function reiniciar_p(){
	//borrar
	var contenedor=document.getElementById("divtexto");
	var elemento=document.getElementById("texto");
	contenedor.removeChild(elemento);
	//lo vuelve a crear
	var contenedor=document.getElementById("divtexto");
	var elemento=document.createElement("p");
	var boton=document.getElementById("boton");
	elemento.class="texto";
	elemento.id="texto";
	contenedor.insertBefore(elemento,boton);
	
	//añadi aqui la funcion que define si es plurar o singular 
	//ya que tambien se debe activiar cuando se llama esta funcion 
	letra=getRandomInt(0,2);
}

// Retorna un entero aleatorio entre min (incluido) y max (excluido)
function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min)) + min;
}

//crear y agregar texto
var contenedor=document.getElementById("divtexto");
var contenido;
				
function agregar (nodo){
	var elemento=document.getElementById("texto");
	var contenido=document.createTextNode(nodo);
	elemento.appendChild(contenido);
	var br=document.createElement("br");
	elemento.appendChild(br);
	
}

//decidir que nombres
function nombrar() {
	var names=getRandomInt(0,14);
	var nombre=nombres[names];
	return nombre;	
}



	
	
	
	
	
	
	
	
	