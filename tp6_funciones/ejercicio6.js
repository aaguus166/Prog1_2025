/*Escriba una función convertRgbToHexa que convierta rgb a color hexa y
devuelva un color hexa.*/ 

function convertRgbToHexa(r, g, b) {
    // Convierte cada valor a hexadecimal y asegura que tenga 2 dígitos
    let hexR = r.toString(16);
    if (hexR.length < 2) hexR = "0" + hexR;

    let hexG = g.toString(16);
    if (hexG.length < 2) hexG = "0" + hexG;

    let hexB = b.toString(16);
    if (hexB.length < 2) hexB = "0" + hexB;

    // Une los valores y retorna el color hexadecimal
    return "#" + hexR + hexG + hexB;
}

// Ejemplo de uso:
console.log(convertRgbToHexa(255, 100, 50)); // 