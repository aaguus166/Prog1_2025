//Escriba una función que genere un randomUserIp.//

function UserIp() {
    let bloque1 = Math.floor(Math.random() * 256);
    let bloque2 = Math.floor(Math.random() * 256);
    let bloque3 = Math.floor(Math.random() * 256);
    let bloque4 = Math.floor(Math.random() * 256);

    let ip = (`${bloque1}. ${bloque2}. ${bloque3}. ${bloque4}`);
    return ip;

}
let resultado = UserIp();
console.log(`la ip generada es ${resultado}`);