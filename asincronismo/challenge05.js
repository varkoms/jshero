// En este desafío tienes un código base el cual se aplica una mala práctica de programación que conocemos como el callback hell y tu reto es evitarlo usando promesas.

// Nota: No usar async/await, ya que este reto se trata de resolverlo mediante promesas con la función then.

// Para solucionarlo vas a encontrar una función llamada runCode que no recibe parámetros de entrada que tiene el código base que tienes que refactorizar, además el archivo tasks.js con las funciones que tienes que ejecutar.

// Dentro del cuerpo de la función runCode debes escribir tu solución y además pasar y deberías pasar las funciones del archivo tasks.js a promesas.

// Ejemplo:

// Input:
// runCode()
// .then(response => console.log(response));

// Output:
// ["Task 1", "Task 2", "Task 3"]

function doTask1() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Task 1");
    }, 300);
  });
}

function doTask2() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Task 2");
    }, 300);
  });
}

function doTask3() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Task 3");
    }, 300);
  });
}

function runCode() {
  const strings = [];
  return doTask1()
    .then((rta1) => {
      strings.push(rta1);
      return doTask2();
    })
    .then((rta2) => {
      strings.push(rta2);
      return doTask3();
    })
    .then((rta3) => {
      strings.push(rta3);
      return strings;
    });
}

runCode().then((response) => console.log(response)); // ["Task 1", "Task 2", "Task 3"]
