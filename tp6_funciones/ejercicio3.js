/*Escriba una función arrayOfHexaColors que devuelva cualquier cantidad de
colores hexadecimales en una matriz.*/

function arrayOfHexaColors(cantidad) {
    const colores = [];
    const caracteres = "0123456789ABCDEF";
    for (let i = 0; i < cantidad; i++) {
        let color = "#";
        for (let j = 0; j < 6; j++) {
            
            color += caracteres[Math.floor(Math.random() * 16)];
        }
        colores[i] = color;
    }
    return colores;
}
console.log(arrayOfHexaColors(4));