/*Escriba una función que tome cualquier número de argumentos y devuelva la suma de los
argumentos*/

function SumasDeN(...numeros) {
    let suma = 0;
    for(let num of numeros){
        suma+=num;

    }
    return suma;
}
let resultado = SumasDeN(5,5);
console.log(`el resultado de la suma es ${resultado}`);