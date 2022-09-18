const menu = document.getElementById('menu');
const indicador = document.getElementById('indicador');
const secciones = document.querySelectorAll('.seccion');

let tamañoIndicador = menu.querySelector('a').offsetWidth;
indicador.style.width = tamañoIndicador + 'px';

let indexSeccionActiva;

// Observer
const observer = new IntersectionObserver((entradas, observer) => {
	entradas.forEach(entrada => {
		if(entrada.isIntersecting){
			// Obtenemos cual es la seccion que esta entrando en pantalla.
			// console.log(`La entrada ${entrada.target.id} esta intersectando`);

			// Creamos un arreglo con las secciones y luego obtenemos el index del la seccion que esta en pantalla.
			indexSeccionActiva = [...secciones].indexOf(entrada.target);
			indicador.style.transform = `translateX(${tamañoIndicador * indexSeccionActiva}px)`;
		}
	});
}, {
	rootMargin: '-80px 0px 0px 0px',
	threshold: 0.2
});

// Agregamos un observador para el hero.
observer.observe(document.getElementById('hero'));

// Asignamos un observador a cada una de las secciones
secciones.forEach(seccion => observer.observe(seccion));

// Evento para cuando la pantalla cambie de tamaño.
const onResize = () => {
	// Calculamos el nuevo tamaño que deberia tener el indicador.
	tamañoIndicador = menu.querySelector('a').offsetWidth;

	// Cambiamos el tamaño del indicador.
	indicador.style.width = `${tamañoIndicador}px`;

	// Volvemos a posicionar el indicador.
	indicador.style.transform = `translateX(${tamañoIndicador * indexSeccionActiva}px)`;
}

window.addEventListener('resize', onResize);


menu.childNodes.forEach((e) =>{
	e.addEventListener('click', (m) => {
		let  num= (m.srcElement.id)*10
		console.log(num)
		document.getElementById(num).classList.toggle('activo')
		switch (num) {
			case 10:
				document.getElementById(10).classList.remove('activo')
				document.getElementById(20).classList.add('activo')
				document.getElementById(30).classList.add('activo')
				document.getElementById(40).classList.add('activo')
				document.getElementById(50).classList.add('activo')
			break;
			case 20:
				document.getElementById(10).classList.add('activo')
				document.getElementById(20).classList.remove('activo')
				document.getElementById(30).classList.add('activo')
				document.getElementById(40).classList.add('activo')
				document.getElementById(50).classList.add('activo')
			break;
			case 30:
				document.getElementById(10).classList.add('activo')
				document.getElementById(20).classList.add('activo')
				document.getElementById(30).classList.remove('activo')
				document.getElementById(40).classList.add('activo')
				document.getElementById(50).classList.add('activo')
			break;
			case 40:
				document.getElementById(10).classList.add('activo')
				document.getElementById(20).classList.add('activo')
				document.getElementById(30).classList.add('activo')
				document.getElementById(40).classList.remove('activo')
				document.getElementById(50).classList.add('activo')
			break;
			case 50:
				document.getElementById(10).classList.add('activo')
				document.getElementById(20).classList.add('activo')
				document.getElementById(30).classList.add('activo')
				document.getElementById(40).classList.add('activo')
				document.getElementById(50).classList.remove('activo')
			break;
		}
		
	})})