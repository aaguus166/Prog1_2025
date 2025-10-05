/*Escribir otra que reciba dos frases y diga cuál tiene más vocales.*/

function mas_vocales(frase1,frase2){
   let  resultado_frase1 = "";
   let resultado_frase2 = "";
   let contador1 = 0;
   let contador2 = 0;

    for(let i = 0; i < frase1.length; i++){
        let letra = frase1[i];
        if (letra == "a"|| letra == "e"|| letra == "i"|| letra == "o"|| letra =="u") {
             if (resultado_frase1.length > 0) {
                resultado_frase1 += "-";
            }
            resultado_frase1 += letra;
            contador1++;
            }
            
        }
            for(let j = 0; j < frase2.length; j++){
                let letra = frase2[j];
                if (letra == "a"|| letra == "e"|| letra == "i"|| letra == "o"|| letra =="u") {
                    if (resultado_frase2.length > 0) {
                resultado_frase2 += "-";
        }
        resultado_frase2 += letra;
            contador2++;
            }
    
    }
    
    console.log(`Estas son las vocales de "${frase1}": ${resultado_frase1}`);
    console.log(`Estas son las vocales de "${frase2}": ${resultado_frase2}`);

    if (contador1 > contador2) {
        return `La frase "${frase1}" tiene más vocales  que "${frase2}" `;
    } else if (contador2 > contador1) {
        return `La frase "${frase2}" tiene más vocales  que "${frase1}" `;
}
}
console.log(mas_vocales("no se que poner", "hola mundo"));