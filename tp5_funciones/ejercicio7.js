/*Declare un nombre de función capitalizeArray. Toma array como parámetro y devuelve el –
array capitalize.*/

function capitalizeArray(array) {
  let resultado = [];

  for (let i = 0; i < array.length; i++) {
    let palabra = array[i];
    let capitalizada = palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase();
    resultado.push(capitalizada);
  }

  return resultado;
}


let palabras = ["hola", "como", "estas"];
let palabrasCapitalizadas = capitalizeArray(palabras);
console.log(palabrasCapitalizadas);  
