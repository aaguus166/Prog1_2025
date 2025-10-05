/*Declare un nombre de función sumOfNumbers. Toma un parámetro numérico y suma todos
los números en ese rango.*/

function sumOfNumbers(n){
    let suma = 0;
    for (let i = 1; i<= n; i++) {
        suma+=i;
       
        
    }
    return suma;
}
let resultado = sumOfNumbers(5);
console.log(`el resultado de la suma es: ${resultado}`)