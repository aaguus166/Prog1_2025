/*Mostrar los elementos de un arreglo y al mismo tiempo indicar si son pares o
impares.*/

function pares_impares(){
    let numeros = [1,2,3,4,5,6,7,8,9,10];
    for(let i = 0; i < numeros.length; i++){
        if (numeros[i] % 2 == 0) {
            console.log(`el numero ${numeros[i]} es par`);
            
        } else {
            console.log(`el numero ${numeros[i]} es impar `);
            
        }

    }
    
      
}
console.log(pares_impares());


