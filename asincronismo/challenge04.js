// En este desafío debes ejecutar el resultado de 3 tareas asíncronas en orden y retornar el resultado en un array.

// Para solucionarlo vas a encontrar una función llamada runCode que no recibe parámetros de entrada y el archivo tasks.js con las funciones que tienes que ejecutar, dentro del cuerpo de la función runCode debes escribir tu solución.

// Ejemplo:

// Input:
// runCode()
// .then(response => console.log(response));

// Output:
// ["Task 1", "Tasks 2", "Task 3"]

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
  return Promise.all([doTask1(), doTask2(), doTask3()]);
}

runCode().then((response) => console.log(response)); // [ 'Task 1', 'Task 2', 'Task 3' ]
