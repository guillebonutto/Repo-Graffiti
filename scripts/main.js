// 1- Que al hacer submit en el form se genere un div con clase "mensaje" y se anexe dentro de #wall
// 2- Si no existe, agregar un input de tipo texto al form y modificar el script para que ese texto se incluya en un párrafo adentro de cada nuevo .mensaje
// 2.1- Evitar que el input quede vacío.

// 3- Si no existe, agregar un input de tipo color al form y modificar el script para que el texto del nuevo .mensaje sea del color seleccionado

// 4- Agregar una X dentro de un span con clase "close" en cada .mensaje nuevo para agregar la funcionalidad de eliminar ese graffiti

// 5- Agregar un input de tipo checkbox al form y modificar el script para que el .mensaje tenga la clase .poster en lugar de .graffiti

// BONUS- Al hacer submit, los inputs del formulario deben volver a los valores iniciales

//-- crear elemento --|
document.querySelector("#boton").addEventListener("click", function (e) {
	var check = document.querySelector("#is-poster")
	var textoInp = document.querySelector("#text").value
	var textColor = document.querySelector("#textColor").value
	var shadowColor = document.querySelector("#shadowColor").value
	const divPoster = document.createElement("div")
	const spanPoster = document.createElement("span")
	spanPoster.className = "close"
	spanPoster.innerHTML = "&times;"
	const textPoster = document.createElement("p")
	textPoster.style.color = textColor
	textPoster.style.textShadow =
		"0px 0px 2px black, 0px 0px 8px" + shadowColor + ",0px 0px 1rem #15448e"
	const text = document.createTextNode(textoInp)
	if (check.checked) {
		divPoster.className = "mensaje poster"
	} else {
		divPoster.className = "mensaje graffiti"
	}
	divPoster.appendChild(spanPoster)
	divPoster.appendChild(textPoster)
	textPoster.appendChild(text)
	var poster = document.querySelector("#wall")
	poster.appendChild(divPoster)
	e.preventDefault()
})

//-- eliminar elemento click normal -->
const wall = document.querySelector("#wall")
const graffiti = document.querySelector(".graffiti")
wall.addEventListener("click", function (e) {
	// console.log("borrado")
	if (e.target.className == "close") wall.removeChild(e.target.parentNode)
	// e.path[2].removeChild(e.path[1])
})

//-- eliminar elemento con click derecho -->
wall.addEventListener("auxclick", function (e) {
	document.oncontextmenu = () => {
		return false
	}
	if (e.target.parentNode.className == "mensaje graffiti") wall.removeChild(e.target.parentNode)
})
