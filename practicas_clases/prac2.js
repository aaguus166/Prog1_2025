/*Escribir otra función que cuente cuántas vocales tiene una texto.*/

function contar_vocales(texto){
    let texto_resultado = "";
    let contador = 0;

    for(let i = 0; i < texto.length; i++){
        let letra = texto[i];
        if (letra == "a"|| letra == "e"|| letra == "i"|| letra == "o"|| letra =="u") {
            if (texto_resultado.length > 0) {
                texto_resultado += "-";
            }
            texto_resultado += letra;
            contador++;
        }
    }

    console.log(`estas son las vocales de ${texto}`);
    console.log(texto_resultado);
    return `y tiene ${contador} vocales en total`;
}

console.log(contar_vocales("hola mundo"));