const prompt = require("prompt-sync")();
function CalPro(total,porcentaje) {
   let suma=total*(porcentaje/100)
   let MontoF=total+suma
    return MontoF
}

let total = Number(prompt("Ingrese el total de la cuenta "));
let porcentaje = Number(prompt("Ingrese el porcentaje de la propina "));
console.log("el monto final con propina es: ", CalPro(total,porcentaje));
