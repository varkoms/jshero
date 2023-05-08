// En este desafío tienes un código base el cual se aplica una mala práctica de programación que conocemos como el callback hell y tu reto es evitarlo usando async/await.

// Para solucionarlo vas a encontrar una función llamada runCode que no recibe parámetros de entrada que tiene el código base que tienes que refactorizar, además se tienen que generar 3 task que van a ser ejecutadas.

// Dentro del cuerpo de la función runCode debes escribir tu solución y además pasar y deberías pasar las funciones creadas a promesas.

// Ejemplo:

// Input:
// await runCode();

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

async function runCode() {
  const rta1 = await doTask1();
  const rta2 = await doTask2();
  const rta3 = await doTask3();
  return [rta1, rta2, rta3];
}

runCode().then((response) => console.log(response)); // [ 'Task 1', 'Task 2', 'Task 3' ]
