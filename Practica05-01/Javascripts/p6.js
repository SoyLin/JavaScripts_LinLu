function comprobar() {

    let strCadena = document.forms["formulario"]["cadena"].value;
    let strSub = document.forms["formulario"]["intSub"].value;
    
 
    let contador = 0;
    let mensaje = "";

    for (let i = 0; i < strSub.length; i++) {
        let j =0;

        // comparar una letra de subCadena con todas de la cadena principal
        while( j < strCadena.length){
            if (strSub.charAt(i) == strCadena.charAt(j)) {
                contador++;
           }
           j++;
        }
      
    }

    if(contador !== 0){
        mensaje = ` ${strSub} se encontró ${contador} veces en la primera cadena`;
    }
    else{
        mensaje = `${strSub} no se encontró en la cadena`;
    }

    document.formulario.intMensaje.value=mensaje;
}
