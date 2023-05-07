/*
Tienes la función execCallback que recibirá un callback es decir una función como parámetro, tu reto es ejecutar esa función con un tiempo de demora de 2 segundos.
*/

function execCallback(callback){
    setTimeout(() => {
       callback() 
    }, 2000);
}

const myFunc = () => console.log("Log after 2 seconds")
execCallback(myFunc) // Log after 2 seconds