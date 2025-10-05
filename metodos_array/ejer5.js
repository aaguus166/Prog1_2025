/*Dado el array [12, 25, 34, 48, 51], encuentra el primer número mayor a 30.*/

const numeros = [12, 25, 34, 48, 51];

const num_mayor = numeros.find(num => num > 30);
console.log(`el primer numero mayor encontrado es ${num_mayor}`);


