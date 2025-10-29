const prompt = require("prompt-sync")();

let edad = prompt("Ingrese su edad ");
 
if (edad >=18){
    console.log("Puedes pasar");
}
else{
    console.log("No puedes pasar ");
    
}