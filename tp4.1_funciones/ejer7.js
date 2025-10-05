/*Mostrar el mayor número de un arreglo definido dentro de la función.*/

function num_mayor(){
    let numeros = [60,23,10,12];
    let num_mayor = numeros[0];
    for(let i = 0; i < numeros.length; i++){
        if (numeros[i] > num_mayor) {
            num_mayor = numeros[i];
        }
    }
    console.log("El número mayor es: " + num_mayor);
}
num_mayor();


