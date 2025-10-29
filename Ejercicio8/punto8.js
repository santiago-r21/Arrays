const prompt = require("prompt-sync")();

let contra="1234";
let entrada
while (entrada!=contra){
    let entrada = prompt("Ingrese la contraseña ");
    if (entrada!=contra){
        console.log("Incorrecto, inetenta otra vez");
    }
    else{
        console.log("Contraseña correcta");
        break
    }
}

