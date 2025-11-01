const prompt = require("prompt-sync")();
let inventario=[
   {producto:"jeans",precio:30} ,
    {producto:"manzana",precio:13},
    {producto:"gorra", precio:35}
]
cont = 0;
cont2 = 0;
function buscar(entrada) {
    for (let i in inventario){
      if (inventario[i].producto==entrada){
        cont++;
      }else{
        cont2++;
      }
    };
    if (cont==1){
        console.log("el producto si existe");
    }else{
        return null
        
    };
}

let entrada = prompt("Ingrese el producto ");
console.log(buscar(entrada));

 




