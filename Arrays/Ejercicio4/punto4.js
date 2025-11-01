const prompt = require("prompt-sync")();
let notas=[];
let dato="";
let Nnotas = Number(prompt("Cuantas notas va a ingresar? "));
let entrada = prompt("ingrese las notas ");
let suma=0;
//se recorre la arrau
for (let i = 0; i < entrada.length; i++) {
  let caracter=entrada[i]
//compara si tiene coma(separador) y se manda a la array
    if (caracter !== ",") {
    dato +=caracter; 
  } else {
    notas.push(Number(dato));
    dato = ""; 
}
}
// se inserta el numero q no tiene coma al finl
if (dato !== "") {
  notas.push(Number(dato));
}
function Promedio(){
    for (let i = 0; i < Nnotas; i++) {
    suma += notas[i];
  }  
    let promedio=suma/Nnotas
    promedio=Math.round(promedio*100)/100
    return promedio
}
let prom_f = Promedio(notas);
console.log(notas);
console.log("El promedio es:", prom_f);