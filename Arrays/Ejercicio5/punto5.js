const prompt = require("prompt-sync")();
let usuarios=[{nombre:"Santiago",edad:21},
    {nombre:"Martina",edad:34},
    {nombre:"Jose",edad:64}];

let minedad=Number(prompt("Ingrese la edad minima"))

function ListarS(usuarios,minedad){
    for(let i=0;i<usuarios.length;i++){
        let guardar=usuarios[i]
        if (guardar.edad>minedad){
            console.log(` ${guardar.nombre}`);
        }  
    }
}
ListarS(usuarios,minedad);