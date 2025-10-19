/*Realiza una función que permita incrementar un porcentaje dado (por veneficios
exclusivos) a todas las cuentas con plazo fijo con importe mayor a 500000.*/

function beneficio (porcentaje) {
    
    const cuenta1 = {
        "nombre_titular" : "ricardo fort",
        "tipo_de_cuenta" : "caja de ahorro",
        "importe" : "500000",
        "tipo_de_moneda" : "dolares",
        "plazoFijo" : [{
            "estado" : "inactivo",
            "importe" : "2000",
            "fechaCreacion" : "20-09-2010",
            "plazo" : "40",

        },
        ],
    };

    const cuenta2 = {
        "nombre_titular" : "moria casan",
        "tipo_de_cuenta" : "caja de ahorro",
        "importe" : "600000",
        "tipo_de_moneda" : "euro",
        "plazoFijo" : [{
            "estado" : "activo",
            "importe" : "2000",
            "fechaCreacion" : "20-07-2000",
            "plazo" : "30",

        },
        ],
    };

    const cuenta3 = {
        "nombre_titular" : "mirtha legrand",
        "tipo_de_cuenta" : "caja de ahorro",
        "importe" : "300000",
        "tipo_de_moneda" : "pesos",
        "plazoFijo" : [{
            "estado" : "inactivo",
            "importe" : "2000",
            "fechaCreacion" : "10-09-2018",
            "plazo" : "40"

        },
        ],
    };

    const cuenta4 = {
        "nombre_titular" : "susana gimenez",
        "tipo_de_cuenta" : "caja de ahorro",
        "importe" : "500000",
        "tipo_de_moneda" : "dolares",
        "plazoFijo" : [{
            "estado" : "inactivo",
            "importe" : "2000",
            "fechaCreacion" : "20-09-2010",
            "plazo" : "40",

        },
        ],
    };

    const cuentas = [cuenta1, cuenta2, cuenta3, cuenta4];
    let nuevoValor = [];

    cuentas.forEach((cuenta) => {
        if (cuenta ["importe"] >= 500000) {
            cuenta ["importe"] = cuenta ["importe"] * (1 + porcentaje / 100);
            nuevoValor.push(cuenta);
        }
        
    })

return nuevoValor;
}
console.log("estas son las cuentas que reciebieron el beneficio");
console.log(beneficio(15));