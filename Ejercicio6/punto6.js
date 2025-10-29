const prompt = require("prompt-sync")();

let num = Number(prompt("Ingrese el numero "));
 
if (num == 0){
    console.log("Es cero ");
}
 else if(num>0) {
    console.log("Es Positivo ");
}
 else{
    console.log("Es negativo ");
}