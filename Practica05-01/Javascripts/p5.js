function comprobar() {

    let cadena = document.forms["formulario"]["cadena"].value;

    let intContadorA = 0;
    let intContadorE = 0;
    let intContadorI = 0;
    let intContadorO = 0;
    let intContadorU = 0;
    let intContadorConsonante = 0;
 
    for (let i = 0; i < cadena.length; i++) {
        let caracter = cadena.charAt(i); 

        if(caracter=='A' || caracter=='a')
            intContadorA++;
        else if(caracter=='E' || caracter=='e')
            intContadorE++;
        else if(caracter=='I' || caracter=='i')
            intContadorI++;
        else if(caracter=='O' || caracter=='o')
            intContadorO++;
        else if(caracter=='U' || caracter=='u')
            intContadorU++;
        else{
            intContadorConsonante++;
        }
       
    }
    let intTotalVocal = intContadorA+intContadorE+intContadorI+intContadorO+intContadorU;

    document.formulario.intVocal.value=intTotalVocal;
    document.formulario.intVocalA.value=intContadorA;
    document.formulario.intVocalE.value=intContadorE;
    document.formulario.intVocalI.value=intContadorI;
    document.formulario.intVocalO.value=intContadorO;
    document.formulario.intVocalU.value=intContadorU;
    document.formulario.intConsonante.value=intContadorConsonante;
}
