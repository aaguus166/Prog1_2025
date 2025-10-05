/* Declare un nombre de función printArray. Toma matriz como parámetro e imprime cada valor de la matriz*/

function printArray(matriz) {
    for (let i = 0; i < matriz.length; i++) {
        console.log(matriz[i]);
    }
}

let array = ["banana", "manzana", "kiwi", "rosa", "negro", "azul"];
printArray(array);
