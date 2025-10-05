/*Declare un nombre de función addItem. Toma un parámetro de elemento y devuelve un
arreglo después de agregar el elemento (no utilice métodos de arreglos)*/

let items = [];

function addItem(elemento) {
    items[items.length] = elemento;
    return items;
    
}
console.log(addItem("manzana"));
console.log(addItem("pera"));
console.log(addItem("kiwi"));
console.log(addItem("sandia"));
console.log(addItem("melon"));