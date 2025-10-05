/*El usuario ingresa un string de palabras, las cuales se deben revisar y eliminar las palabras prohibidas. Las palabras prohibidas se tendrán en un arreglo de palabras prohibidas.*/

const prompt = require('prompt-sync')();


const palabras_prohibidas = ["puto", "sapo parado", "trola"];
let palabras_validas = [];

while (true) {
    let palabra = prompt("Ingrese una palabra (o escriba 'salir' para terminar): ");
    
    if (palabra === "salir") {
        break;
    }

    if (palabras_prohibidas.includes(palabra)) {
        console.log(`la palabra "${palabra}" no esta permitida`);
    } else {
        palabras_validas.push(palabra);
        console.log(`palabra aceptada: "${palabra}"`);
    }
}

console.log("\npalabras ingresadas válidas:");
console.log(palabras_validas.join("-"));

