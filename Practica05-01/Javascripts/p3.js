window.onload=calcular;

function calcular() {
	let numeroInicial = parseInt(document.forms["formulario"]["intInicial"].value);
	let numeroFinal = parseInt(document.forms["formulario"]["intFinal"].value);
  
	let VstResulto="";
	for(let indice=numeroInicial; indice<=numeroFinal; indice++)
		if(numeroPrimo(indice))
			VstResulto+=indice.toString()+"|";
		
			
			document.formulario.campoTexto.value=VstResulto;
		
  }



  function numeroPrimo(numero) {
	if (numero <= 1) {
        return false;
    }
    for (let i = 2; i < numero; i++) {
        if (numero % i === 0) {
            return false;
        }
    }
    return true;
}