/*Realiza una función que devuelva todos las cuentas con plazos fijos con plazo mayor a 30
días.*/


function plazoFijo() {
  const cuenta1 = {
    tipo: "corriete",
    importe: "500",
    tipo_moneda: "dolares",
    plazofijo: [
      {
        estado: "activo",
        importe: "200",
        fechacreacion: "12-09-1999",
        dias: 40,
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
        fechacreacion: "07-12-2006",
        dias: 30,
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
        fechacreacion: "01-06-2006",
        dias: 20,
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
        fechacreacion: "05-09-2010",
        dias: 15,
      },
    ],
  };
  const cuentas_mayor30 = [];
  const cuentas = [cuenta1, cuenta2, cuenta3, cuenta4];

  cuentas.forEach((cuenta) => {
    cuenta.plazofijo.forEach((plazo) => {
      if (plazo.dias > 30) {
        cuentas_mayor30.push(cuenta);
      }
    });
  });

  return cuentas_mayor30;
}

console.log("Estas son las cuentas de plazo activo mayor a 30 dias:");


console.log(plazoFijo());
