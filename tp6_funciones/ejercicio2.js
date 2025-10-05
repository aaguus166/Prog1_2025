/*Escribe un nombre de función rgbColorGenerator y genera colores rgb.*/

function rgbColorGenerator() {
rgb = [];
for(let i = 0; i < 3; i++){
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
   rgb = [r,g,b]
   
}

return `el color rgb es: ${rgb}`;

}
console.log(rgbColorGenerator());
