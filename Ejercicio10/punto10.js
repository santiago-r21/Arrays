const prompt = require("prompt-sync")();
let num = Number(prompt("Ingrese el numero "));

for (let index = 1; index < 12; index++) {
    resul=num*index
    console.log(num," * ",index," = ",resul);
    
}