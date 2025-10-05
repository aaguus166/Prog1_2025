/*Crear un arreglo de 10 números y mostrar solo los mayores a 5.*/

function mayores_de_cinco(){
    let numeros = [1,2,3,4,5,6,7,8,9,10];
    for(let i = 0; i < numeros.length; i++){
        if (numeros[i] > 5){
            console.log(`este numero es mayor a 5: ${numeros[i]}`);
        }
    }
}
mayores_de_cinco();


