/*
En este desafío debes retornar el string "Hello, World!", con 2 segundos de demora usando setTimeout y está se debe ejecutar mediante una promesa.
*/

function runCode(){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Hello, World!")
        }, 2000);
    });
}

runCode()
    .then(response => console.log(response));