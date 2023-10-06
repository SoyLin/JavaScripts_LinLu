
function convertir() {
    let decimal = parseFloat(document.forms["formulario"]["decimal"].value);

    let binario = decimal.toString(2);
    let octal = decimal.toString(8);
    let hexadecimal = decimal.toString(16).toUpperCase(); 

   //reverse
   // let decimal2 = parseInt(hexadecimal,16);

    
   
    document.formulario.campoBinario.value=binario;
    document.formulario.campoOctal.value = octal;
    document.formulario.campoHexa.value = hexadecimal;
  //es una prueba
  //document.formulario.prueba.value = decimal2;
}

/**
 * helpful link
 * https://stackoverflow.com/questions/57803/how-to-convert-decimal-to-hexadecimal-in-javascript
 * https://www.ionos.es/digitalguide/servidores/know-how/sistema-hexadecimal/
 * 
 * información extra
 * El sistema hexadecimal: la información que requiere ocho dígitos en el sistema binario puede expresarse con solo dos números hexadecimales.
 * el sistema hexadecimal utiliza 16 dígitos diferentes. En otras palabras: hay 16 dígitos, frente a los dos del sistema binario (1 y 0) o los diez del sistema decimal (de 0 a 9)
 * USO
 * se utiliza en la informática para facilitar la legibilidad de números grandes o secuencias de bits largas.
 */