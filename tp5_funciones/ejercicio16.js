//Escriba una función que genere una MacAddress aleatoria.//

function MacAddress(){
    const mac = "0123456789ABCDEF";
    mac_generada = "";

    for (let i = 0; i < 6; i++) {
        let caracter1 = mac [Math.floor(Math.random() * 16)];
        let caracter2 = mac[Math.floor(Math.random() * 16)];

        mac_generada += caracter1 + caracter2;
        if (i < 5) {
            mac_generada += ":"
            
        }
        
        
    }
    return mac_generada;
}
console.log(MacAddress());

