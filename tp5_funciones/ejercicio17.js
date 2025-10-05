/*Declare un nombre de función randomHexaNumberGenerator. Cuando se llama a esta fun-
ción, genera un número hexadecimal aleatorio. La función devuelve el número hexadeci-
mal.*/

function randomHexaNumberGenerator(){
    const hexa = "0123456789ABCDEF";
    hexa_generada = ""

    for (let i = 0; i < 6; i++) {
        let hexa1 = hexa [Math.floor(Math.random() * 16)];
        let hexa2 = hexa[Math.floor(Math.random() * 16)];

        hexa_generada += hexa1 + hexa2;
        if (i < 5) {
            break;
        }

        
    }
    return hexa_generada;
}
console.log("#" + randomHexaNumberGenerator());








