const prompt = require("prompt-sync")();

let num = prompt("Ingrese el numero ");
 
if (num %2 == 0){
    console.log("Es par ");
}
else{
    console.log("No es par ");
    
}