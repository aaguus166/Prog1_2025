/*Realiza una función que permita cargar una nueva cuenta al final de la lista.*/

const cuenta1 = {
    "nombre" : "lilo",
    "saldo" : "$300",
};

const cuenta2 = {
    "nombre" : "bart",
    "saldo" : "$900",
};

const cuentas = [cuenta1, cuenta2];

function cuentaNueva() {

    const cuenta_nueva = {
        "nombre" : "marge",
        "saldo" : "$600",
    }

    cuentas.push(cuenta_nueva);
    

return cuentas;
}
console.log("esta fue la cuenta nueva que se agrego");
console.log(cuentaNueva());
