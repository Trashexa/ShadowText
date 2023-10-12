const contenedor = document.querySelector('.contenedor');
const texto = contenedor.querySelector('h1');
const separacion = 500;

function sombrasTexto(e){
	const { offsetWidth: width, offsetHeight: height} = contenedor;
	let { offsetX: x, offsetY: y } = e;

	if (this !== e.target) {
		x = x + e.target.offsetLeft;
				y = y + e.target.offsetTop;
			}
			const xseparacion = Math.round((x / width * separacion) - (separacion / 2));
			const yseparacion = Math.round((y / width * separacion) - (separacion / 2));

			texto.style.textShadow = `
			${xseparacion}px ${yseparacion}px 0 rgba(255, 0, 255, 0.7),
			${xseparacion * -1}px ${yseparacion}px 0 rgba(0, 255, 255, 0.7),
			${yseparacion}px ${xseparacion * -1}px 0 rgba(0, 255, 0, 0.7),
			${yseparacion}px ${xseparacion}px 0 rgba(0, 0, 255, 0.7)
			`;

		}
		contenedor.addEventListener('mousemove', sombrasTexto);