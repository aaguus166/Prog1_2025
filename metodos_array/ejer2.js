/*dado el array ["sol", "luna", "estrella", "cometa"], crea un nuevo array que solo contenga las palabras que tengan más de 4 letras.*/

const array = ["sol", "luna", "estrella", "cometa"];
const largas = array.filter(array=> array.length > 4);

console.log(`esta son las palabras mayor a 4 letras ${largas}`); 

