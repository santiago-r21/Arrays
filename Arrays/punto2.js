const prompt = require("prompt-sync")();

function ValContr(entrada) {
   let caracteres = entrada.length
   let numero = /\d/.test(entrada)
   let mayus = /[A-Z]/.test(entrada)
    if(caracteres>=8){
        if (numero&&mayus){
        return true
        }else{
            return false
        }
    }else{
    return false
    }
}

let entrada = prompt("Ingrese su contraseña ");
console.log("Su contraseña cumple? ",ValContr(entrada));

