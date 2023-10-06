function comprobar() {

    let strNombre = document.forms["formulario"]["nombre"].value;
    strNombre = strNombre.toUpperCase();

    let strResultado = "";
    let strLongitud = strNombre.length-1;
    

    if (strNombre.charAt(0) == strNombre.charAt(strLongitud)) {
        strResultado = `a. Empieza y termina por una letra.\n`
    }

    if (strNombre.length >= 3) {
        strResultado += `b.  Tiene una longitud mínima de 3 caracteres.\n`;
    }

    if (strNombre.length >= 3 && strNombre.length <= 27) {
        strResultado += `c. Entre el primer y el último carácter tiene letras o símbolos.\n`;
        strResultado += `d. El número de caracteres va a estar comprendido entre 3 y 27.\n`;
    }


    document.formulario.intMensaje.value=strResultado;

    let strResultado2 = "";

    // formato de direccion
    let formato = /^[a-zA-Z]{1}[a-zA-Z0-9ºª-]{1,25}[a-zA-Z]{1}$/;
   
    if (formato.test(strNombre)) 
        strResultado2 = `nombre con formato válido`
    else 
        strResultado2 = `nombre con formato no válido`


  
    document.formulario.intMensaje2.value=strResultado2;
}

