var uno=document.getElementById('uno');
var dos=document.getElementById('dos');
var tres=document.getElementById('tres');
var cuatro=document.getElementById('cuatro');

function crearuno (nombre, puntaje, nivel, posicion){
	let div=document.createElement("div");
	let parrafoF=document.createElement("p");
	let parrafoA=document.createElement("p");
	
	// le pone las rescpetivas clases
	parrafoF.classList.add("f");
	parrafoA.classList.add("a");

	// crea los respctivos textos a los parrafos correspondientes
	parrafoF.appendChild(document.createTextNode(nombre));
	parrafoA.appendChild(document.createTextNode(puntaje+" pts Niv"+nivel));
	
	// añade los parrafos al div y luego el div al lugar correspondiente
	div.appendChild(parrafoF)
	div.appendChild(parrafoA)

	console.log(div)
	posicion.appendChild(div)
}



var ListadoParticipantes= new Array (
	["Pruebar Apellido",		"60",	"2",	uno],
	["Pruebar Nombre",			"57",	"3",	uno],

	["Apellido de conocer",		"56",	"4",	dos],
	["Apelddsado desdsd r",		"55",	"4",	dos],
	["Apellfsddo deds ocer",	"53",	"3",	dos],
	["Apellido de conocer",		"50",	"2",	dos],
	["Nombre ido de conocer",	"49",	"1",	dos],
	["Apellidodsv er",			"43",	"3",	dos],
	["Nombre ido de conocer",	"49",	"1",	dos],


	["Jose Bodoque",			"50",	"5",	tres],
	["Bodoque Tulio ",			"30",	"4",	tres],
	["otro nombre cd",			"32",	"4",	tres],
	["Fulanito djddsk",			"52",	"3",	tres],
	["Apellido de conocer",		"31",	"2",	tres],
	["Nombre ido de conocer",	"29",	"1",	tres],
	["Apellidodsv er",			"23",	"3",	tres],
	["Apellidodsv er",			"43",	"3",	tres],

	["Sin nombre pero sin",		"10",	"6",	cuatro],
	["Jose Bodoque",			"14",	"2",	cuatro],
	["Sin nombre pero sin",		"10",	"6",	cuatro],
	["Jose Bodoque",			"14",	"2",	cuatro],
	["Sin nombre pero sin",		"10",	"6",	cuatro],
	["Nombre 1 Apellido 7",		"14",	"2",	cuatro],
	["Nombre 2 Apellido 8",		"12",	"2",	cuatro],
	["Nombre 12 Apellido 5",	"11",	"2",	cuatro],
	["Nombre 3Apellido 9",		"8",	"2",	cuatro],
	["Nombre 4 Apellido 2",		"9",	"2",	cuatro],
	["Nombre 6 Apellido 1",		"3",	"2",	cuatro],
	["Nombre 7 Apellido 5",		"2",	"2",	cuatro],
	["Nombre 1 Apellido 23",	"1",	"2",	cuatro],





)
console.log(ListadoParticipantes)

for (var i = ListadoParticipantes.length - 1; i >= 0; i--) {
	let nombre= ListadoParticipantes[i][0]
	let puntaje= ListadoParticipantes[i][1]
	let nivel= ListadoParticipantes[i][2]
	let posicion= ListadoParticipantes[i][3]

	crearuno (nombre, puntaje, nivel, posicion);

}