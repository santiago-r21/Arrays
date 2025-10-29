const prompt = require("prompt-sync")();

let AñoNac = prompt("Ingrese su año de nacimiento ");
let AñoAct = prompt("Ingrese el año actual ");
let resul = AñoAct-AñoNac;
console.log("Tu edad es de: ", resul);
