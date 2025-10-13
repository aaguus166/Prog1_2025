/*Realiza una función que devuelva todas las cuentas de un tipo de moneda especificado.*/

function tipoMoneda(moneda) {
   const cuenta1 = {
    "nombre_del_titular" : "ricky martin",
    "tipo_de_cuenta" : "caja corriente",
    "importe" : "400",
    "tipo_de_moneda" : "euro",
    "plazo fijo" : [{
        "estado" :"activo",
        "importe" : "150",
        "fecha_creacion" : "01-06-2006",
        "plazo" : "15",
    },
    ],

}
const cuenta2= {
    "nombre_del_titular" : "Chayane",
    "tipo_de_cuenta" : "caja de ahorro",
    "importe" : "400",
    "tipo_de_moneda" : "euro",
    "plazo fijo" : [{
        "estado" :"activo",
        "importe" : "150",
        "fecha_creacion" : "01-06-2006",
        "plazo" : "15",
    },
    ],

}
const cuenta3 = {
    "nombre_del_titular" : "daddy yankee",
    "tipo_de_cuenta" : "caja de ahorro",
    "importe" : "400",
    "tipo_de_moneda" : "dolar",
    "plazo fijo" : [{
        "estado" :"activo",
        "importe" : "150",
        "fecha_creacion" : "01-06-2006",
        "plazo" : "15",
    },
    ],

}

const tipo_moneda = [];
let cuentas = [cuenta1, cuenta2, cuenta3];
cuentas.forEach((cuenta) => {
    if (cuenta["tipo_de_moneda"] === moneda) {
        tipo_moneda.push(cuenta);
    }
});



return tipo_moneda;


    
}
console.log("estas son las cuentas de tipo euro");
console.log(tipoMoneda("euro"));

