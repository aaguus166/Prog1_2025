/* La ecuación cuadrática se calcula de la siguiente manera: ax2 + bx + c = 0. Escriba una función que calcule el valor o los valores de una ecuación cuadrática, solveQuadEquation.*/

function solveQuadEquation (ax,bx){
    
    let c = 0;
    return ax**2 + bx + c;


}
let resultado = solveQuadEquation(5,1)
console.log("el resultado de la ecuacion es " + resultado)