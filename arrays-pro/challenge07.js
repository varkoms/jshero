// En este desafío tienes un array con una lista de strings que representan el nombre y apellido de varios usuarios, el reto es retornar ese array ordenado alfabéticamente por el apellido.

// La solución debería tener un input y output como los siguientes:

// Input

// solution([
//   "Nicolas Molina",
//   "Andrea Perez",
//   "Zulema Vicente",
//   "Juan Amador"
// ]);

// Output

// [
//   "Juan Amador",
//   "Nicolas Molina",
//   "Andrea Perez",
//   "Zulema Vicente"
// ]

function solution(array) {
  return array.sort((a, b) => {
    const lastNameA = a.split(' ')[1];
    const lastNameB = b.split(' ')[1];
    return lastNameA.localeCompare(lastNameB);
  });
}

// solution([
//   "Nicolas Molina",
//   "Andrea Perez",
//   "Zulema Vicente",
//   "Juan Amador"
// ]);

console.log(solution(["Nicolas Molina","Andrea Perez","Zulema Vicente","Juan Amador"]));