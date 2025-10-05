/*Escriba un nombre de función showDateTime que muestre la hora en este formato:
01/08/2020 04:08 usando el objeto Date (para esto debes importar datetime).*/

function showDateTime() {
    const now = new Date();

    let dia = now.getDate();
    let mes = now.getMonth();
    let año = now.getFullYear();
    let hora = now.getHours();
    let minutos = now.getMinutes();
    let segundos = now.getSeconds();


console.log(`la fecha es: ${dia}/${mes}/${año} y la hora es: ${hora}:${minutos} con ${segundos} segundos`);
}
showDateTime();