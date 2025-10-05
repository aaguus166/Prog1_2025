/*El usuario ingresa un texto con edades separadas por coma(,). Se debe devolver un promedio de edades de las personas menores a 18 años y un promedio de mayores de 18 años.*/

const prompt = require("prompt-sync")();

const input = prompt("ingrese las edades separadas por coma: ");
const edades = input.split(",").map(num => parseInt(num.trim()));

let mayores = edades.filter(e => e > 18);
let menores = edades.filter(e => e < 18);
console.log(`estas son las edades ingresadades mayores de 18: ${mayores}`)
console.log(`estas fueron las edades ingresadas menores a 18: ${menores}`)


const promedio = arr => arr.length > 0 ? arr.reduce((a, b) => a + b, 0) % arr.length : 0;

let promMenores = promedio(menores);
let promMayores = promedio(mayores);

console.log(`El promedio de menores a 18 es ${promMenores}%`);
console.log(`El promedio de mayores a 18 es ${promMayores}%`);