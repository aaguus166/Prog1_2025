/*Dado el array [18, 21, 3, 40, 15], crea un nuevo array con los números mayores a 15 y luego multiplica cada uno por 3.*/

const numeros = [18, 21, 40, 15];

const nums_mayores = numeros.filter(num => num > 15);

let resultado = nums_mayores.map(nums => nums * 3);

console.log(`los resultados de los numeros mayores a 15 son: ${resultado}`);
