const prompt = require("prompt-sync")();

let num = Number(prompt("Ingrese el numero "));
let i=1;
while(i<=num){
    console.log(i);
    i++;
}