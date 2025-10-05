/*Dado el array [7, 12, 4, 9, 20], ordénalo de menor a mayor y encuentra el primer número mayor a 10.*/

const numeros = [7, 12, 4, 9, 20];

const resultado = numeros.sort((a,b) => a-b)
console.log(`los numeros ${numeros} ordenado de menor a mayor son ${resultado}`);

let num_mayor = resultado.find(num => num > 10);
console.log(`el primer numero mayor a 10 es: ${num_mayor}`);
