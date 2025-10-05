/*Escribir una función que reciba un texto y devuelva solo las vocales de ese texto.*/

function solo_vocales(texto){
    let texto_resultado = "";
    for(let i = 0; i <texto.length; i++){
        let letra = texto[i];
        if (letra == "a"|| letra == "e"|| letra == "i"|| letra == "o"|| letra =="u") {
          console.log("estas son las vocales " + texto[i]);
          texto_resultado+=texto[i];
        }

    }
    return texto_resultado;
}
console.log(solo_vocales("hola mundo"));