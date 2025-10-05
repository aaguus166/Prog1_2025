/*Dado el array ["manzana", "banana", "pera", "uva"], filtra las frutas que tengan 5 letras y verifica si alguna es "banana".*/

const frutas = ["manzana", "banana", "pera", "uva"];

const mayores5 = frutas.filter(frutas => frutas.length > 5);
console.log(`estas son las frutas que tienen 5 letras ${mayores5}`);

let contiene = frutas.some(function(fruta){
    return fruta === "banana";

})
console.log(contiene)
