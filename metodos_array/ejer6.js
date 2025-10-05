/*Dado el array ["perro", "gato", "conejo"], verifica si existe algún elemento que sea igual a "gato".*/

const animales = ["perro", "gato", "conejo"];

const encontrar = animales.some(function(animal) {
  return animal === "gato";
})

console.log(encontrar);