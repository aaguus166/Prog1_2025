/*Escriba una función arrayOfRgbColors que devuelva cualquier cantidad de
colores RGB en una matriz.*/

function arrayOfRgbColors(cantidad){
let rgb = [];
for(let i = 0; i < cantidad; i++){
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    rgb[i] = `rgb ${r}, ${g}, ${b}`;

    }
    

return rgb;
}
console.log(arrayOfRgbColors(4));