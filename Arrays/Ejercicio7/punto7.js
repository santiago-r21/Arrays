const prompt = require("prompt-sync")();


function RetirarD(){
     let saldo=Number(prompt("Ingrese su saldo actual"))
     let monto =Number(prompt("Ingrese el monto que desea retirar"))
    if(monto<=saldo){
        console.log("bienvenido")
        if(monto<=saldo){
            let resta = saldo -monto;
            console.log(`Su saldo final es de $${resta} por el retiro de $${monto}`);
        }else{
             console.log("Fondos insuficinetes ;(");
         }
        
    }else{
        console.log("El monto ingresado no es valido para su saldo actual")
    }
}
RetirarD();