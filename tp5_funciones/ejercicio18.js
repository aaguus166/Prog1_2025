/*Declare un nombre de función userIdGenerator. Cuando se llama a esta función, genera
una identificación de siete caracteres. La función devuelve el id.*/

function userIdGenerator() {
    let chars = "abcdefghijk0123456789";
    let user_id = "";

    for (let i = 0; i < 7; i++) {
        let random = Math.floor(Math.random() * chars.length);
        user_id+=chars[random];
        
    }
    return user_id;
}
console.log("el id del usuario generado es:")
console.log(userIdGenerator());
