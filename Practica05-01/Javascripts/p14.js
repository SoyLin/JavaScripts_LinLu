function comprobar() {
  
    let codigo = document.forms["formulario"]["codigo"].value;

    let strResultado = "";

    // formato 
    let formato = /^[0-9]{3,6}(AN|ES|DL|US)[#@\$&][A-Za-z]{4,7}[0-9]{2}[A-Za-z]{3}[A-Za-z0-9%\/\?!]{5}$/;
   
    if (formato.test(codigo)) 
        strResultado = `codigo válido`
    else 
        strResultado = `codigo no válido`


    document.formulario.intMensaje.value=strResultado;
}