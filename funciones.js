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

function GetValor(){
	var valor1 = document.getElementByName("valor1").value;
	var valor2 = document.getElementByName("valor2").value;

	var resultado;

	resultado = parseInt(valor1) + parseInt(valor2);

	document.getElementById('demo').innerHTML = resultado;

}