/* Declare un nombre de función swapValues. Esta función intercambia el valor de x a y.*/

function swapValues(x,y){

    x = 9;
    y = 7;
    
console.log("x vale: " + x + " y vale:" + y);
    a = x;
    x = y;
    y = a;
    let resultado = [x, y];
return resultado;
}
let cambio = swapValues();
console.log("ahora x vale: " + cambio[0] + " ahora y vale: " + cambio[1]);