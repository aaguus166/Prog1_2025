/*Dado el array [2, 5, 7], crea un nuevo array con los valores al cuadrado y luego suma todos los elementos.*/

const numeros = [2, 5, 7];

const resultado = numeros.map(nums => nums ** 2);
console.log(`el resulado de los numeros ${numeros} elevado al cadrado es ${resultado}`);

console.log("----------------");

const suma = resultado.reduce((acum, num) => acum + num, 0);
console.log(`la suma total de los numeros elevado al cuadrado es ${suma}`);


