/*Dado el array [3, 6, 1, 8], obtiene la suma total de los números.*/

const numeros = [3, 6, 1, 8];

function sumaFn(acum, num) {
    return acum + num
    
}

const suma = numeros.reduce(sumaFn, 0);

console.log(`esta son las sumas del arreglo: ${suma}`);

