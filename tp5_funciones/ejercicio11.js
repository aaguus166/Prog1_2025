/*Declare un nombre de función sumOfOdds. Toma un parámetro numérico y agrega todos
los números impares en ese rango.*/

function sumOfOdds(n) {
    let suma = 0;
    let contador = 1;
    while (contador <= n) {
        if (contador % 2  !== 0) {
            suma+=contador;
        } 
        contador++;
    }
    return suma;
}
let resultado = sumOfOdds(10);
console.log(`la suma en el rango 20 es ${resultado}`);