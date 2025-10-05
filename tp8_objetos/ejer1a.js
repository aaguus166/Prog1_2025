/*Realiza una función que devuelva todos las cuentas con plazos fijos activos a partir de una
fecha dada.*/

function plazoFijo() {
  const cuenta1 = {
    tipo: "corriete",
    importe: "500",
    tipo_moneda: "dolares",
    plazofijo: [
      {
        estado: "activo",
        importe: "200",
        fecha_creacion: "12-09-1999",
        plazo: 40,
      },
    ],
  };

  const cuenta2 = {
    tipo: "corriete",
    importe: "900",
    tipo_moneda: "peso",
    plazofijo: [
      {
        estado: "activo",
        importe: "200",
        fecha_creacion: "07-12-2006",
        plazo: 30,
      },
    ],
  };

  const cuenta3 = {
    tipo: "corriete",
    importe: "300",
    tipo_moneda: "euro",
    plazofijo: [
      {
        estado: "inactivo",
        importe: "200",
        fecha_creacion: "01-06-2006",
        plazo: 20,
      },
    ],
  };

  const cuenta4 = {
    tipo: "corriete",
    importe: "2400",
    tipo_moneda: "euro",
    plazofijo: [
      {
        estado: "activo",
        importe: "800",
        fecha_creacion: "05-09-2010",
        plazo: 15,
      },
    ],
  };
  const cuentas_activas = [];
  const cuentas = [cuenta1, cuenta2, cuenta3, cuenta4];

  cuentas.forEach((cuenta) => {
    cuenta.plazofijo.forEach((plazo) => {
      if (plazo.estado == "activo") {
        cuentas_activas.push(cuenta);
      }
    });
  });

  return cuentas_activas;
}

console.log("Estas son las cuentas con plazo fijo activas:");
// console.log(cuentas_activas);

console.log(plazoFijo());
