/*Declare un nombre de función sumOfEven. Toma un parámetro numérico y suma todos los
números pares en ese rango.*/

function sumOfEven(n) {
    let suma = 0;
    let contador = 0;
    
    while (contador <= n) {
        if (contador % 2 === 0) {
            suma+=contador;
            
        }
        contador++;
    }
    return suma;
}
let resultado = sumOfEven(100);
console.log(`el resultado es ${resultado}`);