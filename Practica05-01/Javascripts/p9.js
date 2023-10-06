function comprobar() {

    let strEmail = document.forms["formulario"]["email"].value;

    let strResultado = "";
    //formato
    let formato =  /^[a-zA-Z][a-zA-Z0-9.-]*[a-zA-Z0-9]@[a-zA-Z0-9.-]+[a-zA-Z]{2,4}$/;


      // Comprobar si el email cumple con el formato
    if (formato.test(strEmail)) 
        strResultado = `Email válido`
    else 
        strResultado = `Email no válido`
    

    document.formulario.intMensaje.value=strResultado;

}





