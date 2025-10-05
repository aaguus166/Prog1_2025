/*Dado el array [4, 8, 16, 32], comprueba si todos los números son múltiplos de 4.*/

const numeros = [4, 8, 16, 32];

const multiplos = numeros.every(num => num % 4 === 0);
console.log(multiplos);
