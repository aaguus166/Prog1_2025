/*Declare un nombre de función reverseArray. Toma una matriz como parámetro y devuelve
el reverso de la matriz (no use el método reverse).*/

function reverseArray(arr) {
  let nuevoArray = [];
  
  for (let i = arr.length - 1; i >= 0; i--) {
    nuevoArray[nuevoArray.length] = arr[i];
  }
  
  return nuevoArray;
}

let numeros = [1, 2, 3, 4, 5];
console.log(reverseArray(numeros));