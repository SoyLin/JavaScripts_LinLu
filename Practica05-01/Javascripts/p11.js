function comprobar() {
  
    let localidad = document.forms["formulario"]["localidad"].value;

    let strResultado = "";
    // formato de localidad
        //empezar con 3 letras, letra espacio
    let formato = /^[A-Za-z]{3}([A-Za-z\s]*[A-Za-z][A-Za-z]{4,35})$/;
   
    if (formato.test(localidad)) 
        strResultado = `Localidad válido`
    else 
        strResultado = `Localidad no válido`


    document.formulario.intMensaje.value=strResultado;
}