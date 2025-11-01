const prompt = require("prompt-sync")();
let palabra=false;

function Cont_Pal(entrada){
    let cont=0
for (let i = 0; i < entrada.length; i++) {
  let caracter=entrada[i];
    if (caracter != " " && palabra==false) {
        palabra=true;
     cont++;
    }else if(caracter===" "){
        palabra=false
    }
}
return cont
}
let entrada=prompt("Ingrese la frase ")
console.log(`la cantidad de palabras es: ${Cont_Pal(entrada)}`);


