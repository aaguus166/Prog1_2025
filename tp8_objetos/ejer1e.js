/*Realiza una función que permita descontar un importe dado (mantenimiento de cuenta) a
todas las cuentas en la lista.*/

function descuento_cuentas(descuento) {
    const cuenta1 = {
    "nombre_del_titular" : "Duki",
    "tipo_de_cuenta" : "caja corriente",
    "importe" : "4000",
    "tipo_de_moneda" : "euro",
    "plazo fijo" : [{
        "estado" :"activo",
        "importe" : "2000",
        "fecha_creacion" : "01-06-2006",
        "plazo" : "15",
    },
    ],

};
 const cuenta2 = {
    "nombre_del_titular" : "Ysy a",
    "tipo_de_cuenta" : "caja corriente",
    "importe" : "5000",
    "tipo_de_moneda" : "euro",
    "plazo fijo" : [{
        "estado" :"activo",
        "importe" : "1000",
        "fecha_creacion" : "01-06-2006",
        "plazo" : "15",
    },
    ],

};   

const cuenta3 = {
    "nombre_del_titular" : "Neo pistea",
    "tipo_de_cuenta" : "caja corriente",
    "importe" : "6000",
    "tipo_de_moneda" : "euro",
    "plazo fijo" : [{
        "estado" :"activo",
        "importe" : "1550",
        "fecha_creacion" : "01-06-2006",
        "plazo" : "15",
    },
    ],

};

const descuento_de_cuentas = [];
const cuentas = [cuenta1, cuenta2, cuenta3];

cuentas.forEach((cuenta) => {
cuenta["importe"] = Number(cuenta["importe"]) - descuento

descuento_de_cuentas.push(cuenta)

});



return descuento_de_cuentas;

}
console. log ("estos fueron los descuentos de las cuentas");
console.log(descuento_cuentas(250));