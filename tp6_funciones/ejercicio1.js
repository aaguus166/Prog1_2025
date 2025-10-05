/*Modifique la función userIdGenerator. Declare un nombre de función
userIdGeneratedByUser. No toma ningún parámetro pero toma dos entradas
usando prompt(). Una de las entradas es la cantidad de caracteres y la
segunda entrada es la cantidad de ID que se supone que se generarán.*/

const prompt = require("prompt-sync")();

function userIdGeneratedByUser(){
const generar_caracter = "abcdefghijklmñopqrstwxyz1234567890";
let cantidad_ID = [];

let caracteres = Number(prompt("ingrese la cantidad de caracteres que quiera generar "));
let ID = Number(prompt("ingrese la cantidad de ID que quiera generar "));

for(let i = 0; i < ID; i++){
   let cantidad_caracteres = "";
   for(let j = 0; j < caracteres; j++){
        let random_caeracteres = Math.floor(Math.random() * generar_caracter.length);
        let caracter = generar_caracter[random_caeracteres];
        cantidad_caracteres += caracter;
    }
    cantidad_ID.push(cantidad_caracteres);
    }
return `las ID generada son: ${cantidad_ID}`;

}
console.log(userIdGeneratedByUser());