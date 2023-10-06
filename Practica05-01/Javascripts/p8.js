function comprobar() {

    // Obtén el valor del campo de entrada de fecha
let intAnio = document.forms["formulario"]["intAnio"].value;
let intMes = document.forms["formulario"]["intMes"].value;
let intDia = document.forms["formulario"]["intDia"].value;

let strBisiesto = "";
let strResultado = "";

	//comprobar si es bisiesto
	if ((intAnio%4==0 && intAnio%100!=0) || (intAnio%100==0 && intAnio %400!=0)) {
		strBisiesto ="si";
	}
	else {
		strBisiesto ="no";
	}
	

	if ((intMes==1 || intMes==3|| intMes==5 || intMes==7 || intMes==8 || intMes==10 || intMes==12) && (intDia>=1 && intDia<=31)  ) {
        strResultado = `fecha correcta`
	}
	else if ((intMes==4 || intMes==6 || intMes==9 || intMes==11)  && (intDia>=1 && intDia<=30) ) {
		strResultado = `fecha correcta`
	}
	else if ((intMes==2 && (intDia>=1 && intDia<=28))&&(strBisiesto == "no")) {
		strResultado = `fecha correcta`
	}
	else if ((intMes==2 && (intDia>=1 && intDia<=29))&&(strBisiesto == "si") ){
		strResultado = `fecha correcta`
	}
	else {
		strResultado = `fecha INCORRECTA`
	}

    document.formulario.intMensaje.value=strResultado;

}





