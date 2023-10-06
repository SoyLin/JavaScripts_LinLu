window.onload=comienzo;

function comienzo(){
	let VstResulto="";
	for(let indice=1; indice<=100; indice++)
		if(numeroPrimo(indice))
			VstResulto+=indice.toString()+"|";
		
			
			document.formulario.campoTexto.value=VstResulto;
		
	
}
function numeroPrimo(numero) {
    for (let i = 2; i < numero; i++) {
        if (numero % i === 0) {
            return false;
        }
    }
    return true;
}