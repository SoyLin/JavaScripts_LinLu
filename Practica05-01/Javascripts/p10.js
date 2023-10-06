function comprobar() {
  
    let url = document.forms["formulario"]["url"].value;

    let strResultado = "";
    // formato de url
    let formato = /^(http:\/\/|https:\/\/)?(www\.)+[a-zA-Z][a-zA-Z0-9-]*[a-zA-Z0-9]+[.]+[a-zA-Z]{2,4}$/;

   
    if (formato.test(url)) 
        strResultado = `url válido`
    else 
        strResultado = `url no válido`


    document.formulario.intMensaje.value=strResultado;
}