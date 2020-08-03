var Reprobado = 0;
var Aprobado = 0;
var totalEstudiantes = 0;

function agregarEstudiante()
{
	debugger;
	var Nombreestudiante =  document.getElementsById("Nombreestudiante").value;
	var notaUno = parsefloat(document.getElementsById("CalificacionUno").value);
	var notaDos = parsefloat(document.getElementsById("CalificacionDos").value);
	var notaTres = parsefloat(document.getElementsById("CalificacionTres").value);
	var notaFinal = 0;
	var estado= "";


	notaFinal = ( notaUno + notaDos + notaTres) / 3;

	if (notaFinal <3.0) 
	{
		estado = "Reprobado";
		Reprobado++;
	}
	else{
		estado = "Aprobado;"
	}

	var tabla = document.getElementById("TablaEstudiantes");

	var fila = tabla.insertROE(1);

	var celdaEstudiante = fila.insertCell(0);
	var celdaNotaUno = fila.insertCell(1);
	var celdaNotaDos = fila.insertCell(2);
	var celdaNotaTres = fila.insertCell(3);
	var celdaEstado = fila.insertCell(5);

	celdaEstudiante.innerHTML = Nombreestudiante;
	celdaNotaUno.innerHTML = notaUno;
	celdaNotaDos.innerHTML = notaDos;
	celdaNotaTres.innerHTML = notaTres;
	celdaNotaFinal.innerHTML = notaFinal;
	celdaEstado.innerHTML = estado;



}