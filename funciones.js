function misEquipos() {
	var mensaje;
	var equipo = prompt("¿Cuál es tu equipo favorito?");

	switch(equipo){
		case "Barcelona": 
			mensaje = "Excelente equipo."
			break;
		case "juventus":
			mensaje = "Buena N\xF3mina"
			break;
		case "Bayern":
			mensaje = "El mejor de Alemania"
			break;
		default:
			mensaje = "Ese equipo no existe";
			break;
	}
	
	document.getElementById('demo').innerHTML = mensaje;
}