/*Dada una lista con cuentas bancarias con la siguiente información, donde plazoFijo indica si la cuenta tiene asociado un plazo fijo o no.*/

const cuenta = {
tipo: "corriente", // "ahorro"
importe: 200,
tipoMoneda: "peso", // "euro", // "dolar",
plazoFijo: [{
estado: "activo", // "inactivo"
importe: 100,
fechaCreacion: "2020-01-01",
plazo: 30, // en dias
}],
}

console.log(`la cuenta tiene un plazo fijo ${cuenta.plazoFijo[0].estado}`); 