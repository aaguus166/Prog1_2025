/*5 plantas comienzan con 0 cm de altura, y cadacada dia crecen entre 1 y 5 cm.La primera que llegue a 30cm florece.*/

function crecer_plantas() {
    let plantas = [0,0,0,0,0];
    let dias = 0;
    let florecio = false;

    while (florecio === false) {
        dias++;
        for(let i = 0; i < plantas.length; i++){
            let aleatorio = Math.floor(Math.random()*5)+1;
            plantas[i] += aleatorio;
            if (plantas[i] >= 30) {
                florecio = true;
              console.log(`la planta numero ${i+1} florecio con ${plantas[i]}cm en el dia ${dias}`);  

              break;
                
            }

        }
        
    }

    
}
crecer_plantas();