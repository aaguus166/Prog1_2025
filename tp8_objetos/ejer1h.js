/*Realiza una función que permita ordenar la lista según el importe de cada cuenta.*/

function ordenar (){

    const cuenta1 = {
        nombre : "lisa",
        saldo : "2000",
        importe : "500",
    };

    const cuenta2 = {
        nombre : "venus",
        saldo : "40000",
        importe : "25",
    };

    const cuenta3 = {
        nombre : "pochita",
        saldo : "60000",
        importe : "12000",
    };

    const cuentas = [cuenta1, cuenta2, cuenta3];
    let cuentasOrdenadas = [];

    cuentas.sort((a,b) => a.importe - b.importe);
    cuentasOrdenadas.push(cuentas);

    return cuentasOrdenadas;
    
};
console.log("estas son las cuentas ordenadas segun el importe");
console.log(ordenar());

