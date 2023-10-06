function comprobar() {
  
    let direccion = document.forms["formulario"]["direccion"].value;

    let strResultado = "";

    // formato de direccion
    let formato = /^[a-zA-Z][a-zA-Z0-9ºª\/-\s]{6,40}[a-zA-Z0-9]$/;
   
    if (formato.test(direccion)) 
        strResultado = `dirección válido`
    else 
        strResultado = `dirección no válido`


    document.formulario.intMensaje.value=strResultado;
}