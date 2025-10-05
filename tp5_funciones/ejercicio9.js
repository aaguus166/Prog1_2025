/*Declare un nombre de función removeItem. Toma un parámetro de índice y devuelve un
arreglo después de eliminar un elemento (no utilice métodos de arreglos)*/

function removeItem(array, index) {
  // Mover todos los elementos una posición hacia la izquierda
  for (let i = index; i < array.length - 1; i++) {
    array[i] = array[i + 1];
  }
  // Reducir el tamaño del array en 1
  array.length = array.length - 1;
  return array;
}

// Ejemplo de uso
let arr = [1, 2, 3, 4, 5];
console.log(removeItem(arr, 2)); // Elimina el elemento en índice 2 → [1, 2, 4, 5]
