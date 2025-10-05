/*La ecuación lineal se calcula de la siguiente manera: ax + by + c = 0. Escriba una función que calcule el valor de una ecuación lineal, solveLineEquation.*/

function solve_line_equation(ax, by){
      let c = 0;
    return ax + by + c;

}
let ecuacion = solve_line_equation(7,8);
console.log("el resultado de la ecuacion es: " + ecuacion);