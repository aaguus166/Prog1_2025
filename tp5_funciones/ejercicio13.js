/*Declare un nombre de función evensAndOdds . Toma un entero positivo como parámetro y
cuenta el número de pares e impares en el número.*/

function evensAndOdds(n) {
    let pares = 0;
    let impares = 0;
    let contador = 0;
    
    
    while (contador <= n) {
        if (contador % 2 === 0) {
            pares++;
        } else {
            impares++;
        }
        contador++;
}
return [pares,impares];
}
let resultado = evensAndOdds(200);
console.log(resultado);