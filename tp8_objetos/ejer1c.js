/*Realiza una función que devuelva todos las cuentas del tipo corriente.*/

const cuenta1 = {
    "tipo_de_cuenta" : "caja de ahorro",
    "importe" : "300",
    "tipo_de_moneda" : "euro",
    "plazo fijo" : [{
        "estado" :"activo",
        "importe" : "150",
        "fecha_creacion" : "01-06-2006",
        "plazo" : "15",
    },
    ],
};

const cuenta2 = {
    "tipo_de_cuenta" : "corriente",
    "importe" : "2000",
    "tipo_de_moneda" : "dolar",
    "plazo fijo" : [{
        "estado" :"activo",
        "importe" : "900",
        "fecha_creacion" : "17-05-2024",
        "plazo" : "20",
    },
    ],

}

const cuenta3 = {
    "tipo_de_cuenta" : "corriente",
    "importe" : "50000",
    "tipo_de_moneda" : "pesos",
    "plazo fijo" : [{
        "estado" :"activo",
        "importe" : "20000",
        "fecha_creacion" : "31-10-2023",
        "plazo" : "30",
    },
    ],
}

const cuentas = [cuenta1, cuenta2, cuenta3];
const cuentas_corrientes = cuentas.filter(cuenta => cuenta.tipo_de_cuenta === "corriente");

console.log(cuentas_corrientes);