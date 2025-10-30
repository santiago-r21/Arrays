/*function saludar(){
    console.log("Hola")
    
};

function resta(a,b) {
    return a-b
};

let resul = resta(5,2);
console.log(`"el resultado es ${resul}"`);
*/


function EsMayoredad(edad) {
    let es_mayor = edad >= 18;
    
    return es_mayor;
}

if (EsMayoredad(18)){
    console.log("Puedes pasar ");
}else{
    console.log("No puedes pasar");
}
let puede_cond=EsMayoredad();
console.log("Puedes onducir?");



