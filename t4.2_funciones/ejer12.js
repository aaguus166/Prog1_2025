/*12. Escribe una función llamada checkSeason, toma un parámetro de mes y devuelve la
estación: Otoño, Invierno, Primavera o Verano.*/

function checkSeason(mes) {
    if(mes == "diciembre" || mes == "enero" || mes == febrero){
        return "verano";

    } else if(mes == "marzo"|| mes == "abril"|| mes == "mayo"){
        return "otoño";

    } else if(mes == "junio"|| mes == "julio"|| mes == "agosto"){
        return "invierno";

    } else if(mes == "septiembre"|| mes == "octubre"|| mes == "noviembre" ){
        return "primavera";

    }
}
checkSeason(diciembre);
