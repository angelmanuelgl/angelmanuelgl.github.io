$(document).ready(function(){
// Objeto del Banner
	var banner = {
		padre: $('#banner'),
		numeroSlides: $('#banner').children('.slide').length,
		posicion: 1
	};
	
// Establecemos que el primer slide aparecera desplazado
	banner.padre.children('.slide').first().css({
		'left': 0
	});

// Funcion para calcular el alto que tendran los contenedores padre
	var altoBanner = function(){
		var alto = banner.padre.children('.slide').outerHeight();
		banner.padre.css({
			'height': alto + 'px'
		});
	}
    
	altoBanner();

	$(window).resize(function(){
		altoBanner();
	});
	
// ---------------------------------------
// ----- Banner
// ---------------------------------------
   
	// Boton Siguiente
	
	//cuando se haga click se llama la funcion y ademas se previenen el Default
	$('#banner-next').on('click', function(e){ 
		e.preventDefault();
		Mover();
	});
	//cada cierto tiempo se llama  a la funcion
	//, y no es necesario prevenir elm defaul porque no se esta dando click
	setInterval(Mover,10000);
	
	//La fucnion hace todo
	function Mover(){
		if (banner.posicion < banner.numeroSlides){
			
			// Seleccionamos todos los slides que no tengan la clase .active
			// y los posicionamos a la derecha
			banner.padre.children().not('.active').css({
				'left': '100%'
			});
			
			// Quitamos la clase active y se la ponemos al siguiente elemento.Y lo animamos
				$('#banner .active').removeClass('active').next().addClass('active').animate({
					'left': 0
			});
			
			// Animamos el slide anterior para que se deslaza hacia la izquierda
			$('#banner .active').prev().animate({
				'left': '-100%'
			});
			banner.posicion=banner.posicion+1;
		}else{
			// Seleccionamos todos los slides que no tengan la clase .active
			// y los posicionamos a la derecha
			banner.padre.children().not('.active').css({
				'left': '100%'
			});

			$('#banner .active').animate({
				'left': '-100%'
			});
			
			// Eliminamos la clase active y se la ponemos al primer elemento.
			// Despues lo animamos.
			$('#banner .active').removeClass('active');
			banner.padre.children().first().addClass('active').animate({
				'left': 0
			});

			// Reseteamos la posicion a 1
			banner.posicion = 1;
		}
	}
	
	
	
		
});