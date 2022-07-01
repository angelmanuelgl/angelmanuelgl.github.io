var uno=document.getElementById('uno');
var dos=document.getElementById('dos');
var tres=document.getElementById('tres');
var cuatro=document.getElementById('cuatro');

function crearuno (nombre, puntaje, nivel, pais, posicion){
	let div=document.createElement("div");
	let parrafoF1=document.createElement("p");
	let parrafoF2=document.createElement("p");
	let parrafoA=document.createElement("p");
	
	// le pone las rescpetivas clases
	parrafoF1.classList.add("f");
	parrafoF2.classList.add("f");
	parrafoA.classList.add("a");

	// crea los respctivos textos a los parrafos correspondientes
	parrafoF1.appendChild(document.createTextNode(nombre));
	parrafoF2.appendChild(document.createTextNode(pais));
	parrafoA.appendChild(document.createTextNode(puntaje+" pts Niv"+nivel));
	
	// añade los parrafos al div y luego el div al lugar correspondiente
	div.appendChild(parrafoF1)
	div.appendChild(parrafoF2)
	div.appendChild(parrafoA)

	console.log(nombre+" 		¿"+pais+"		 "+puntaje+" 		"+nivel);
	posicion.appendChild(div);
}



var ListadoParticipantes= new Array (
	["Pruebar Apellido",		"60",	"2", "mexico",	uno],
	["Pruebar Nombre",			"57",	"3", "Irlanda",	uno],

	["Apellido de conocer",		"56",	"4", "Estados Unidos",	dos],
	["Apelddsado desdsd r",		"55",	"4", "PInglaterra",		dos],
	["Apellfsddo deds ocer",	"53",	"3", "mexico",			dos],
	["Apellido de conocer",		"50",	"2", "Irlanda",			dos],
	["Nombre ido de conocer",	"49",	"1", "Inglaterra",		dos],
	["Apellidodsv er",			"43",	"3", "mexico",			dos],
	["Nombre ido de conocer",	"49",	"1", "Polonia",			dos],


	["Jose Bodoque",			"50",	"5", "Estados Unidos",	tres],
	["Bodoque Tulio ",			"30",	"4", "mexico",			tres],
	["otro nombre cd",			"32",	"4", "Irlanda",			tres],
	["Fulanito djddsk",			"52",	"3", "mexico",			tres],
	["Apellido de conocer",		"31",	"2", "Irlanda",			tres],
	["Nombre ido de conocer",	"29",	"1", "Polonia",			tres],
	["Apellidodsv er",			"23",	"3", "Inglaterra",		tres],
	["Apellidodsv er",			"43",	"3", "Polonia",			tres],

	["Sin nombre pero sin",		"10",	"6", "Estados Unidos",	cuatro],
	["Jose Bodoque",			"14",	"2", "mexico",			cuatro],
	["Sin nombre pero sin",		"10",	"6", "mexico",			cuatro],
	["Jose Bodoque",			"14",	"2", "mexico",			cuatro],
	["Sin nombre pero sin",		"10",	"6", "Irlanda",			cuatro],
	["Nombre 1 Apellido 7",		"14",	"2", "Inglaterra",		cuatro],
	["Tulio Triviño",			"12",	"2", "mexico",			cuatro],
	["Policarpio Policarpio",	"11",	"2", "Polonia",			cuatro],
	["Juan Carlos Bo.",			"8",	"2", "Estados Unidos",	cuatro],
	["Nombre 4 Apellido 2",		"9",	"2", "mexico",			cuatro],
	["Nombre 6 Apellido 1",		"3",	"2", "Estados Unidos",	cuatro],
	["Nombre 7 Apellido 5",		"2",	"2", "mexico",			cuatro],
	["Nombre 1 Apellido 23",	"1",	"2", "mexico",			cuatro],
	["Sin nombre pero sin",		"10",	"6", "Estados Unidos",	cuatro],
	["Jose Bodoque",			"14",	"2", "mexico",			cuatro],
	["Sin nombre pero sin",		"10",	"6", "mexico",			cuatro],
	["Jose Bodoque",			"14",	"2", "mexico",			cuatro],





)
// console.log(ListadoParticipantes)

for (var i = ListadoParticipantes.length - 1; i >= 0; i--) {
	let nombre= ListadoParticipantes[i][0]
	let puntaje= ListadoParticipantes[i][1]
	let nivel= ListadoParticipantes[i][2]
	let pais= ListadoParticipantes[i][3]
	let posicion= ListadoParticipantes[i][4]

	crearuno (nombre, puntaje, nivel, pais, posicion);

}