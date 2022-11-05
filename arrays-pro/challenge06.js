// Tienes un array de objetos que representan personas con los siguientes atributos:

// name: string
// dateOfBirth: Date
// El reto es retornar una lista de los nombres de las personas ordenadas por la fecha de nacimiento de la más reciente a la más antigua.

// La solución debería tener un input y output como los siguientes:

// Input

// solution([
//   {
//     name: "Nicolas",
//     dateOfBirth: new Date(1993, 6, 9),
//   },
//   {
//     name: "Santiago",
//     dateOfBirth: new Date(2018, 6, 11),
//   },
//   {
//     name: "Zulema",
//     dateOfBirth: new Date(1994, 10, 7),
//   },
//   ...
// ]);

// Output

// ["Santiago", "Zulema", "Nicolas"]

function solution(array) {
  return array
         .sort((a, b) => b.dateOfBirth.getTime() - a.dateOfBirth.getTime())
         .map(item => item.name);
}

console.log(solution([
  {
    name: "Nicolas",
    dateOfBirth: new Date(1993, 6, 9),
  },
  {
    name: "Santiago",
    dateOfBirth: new Date(2018, 6, 11),
  },
  {
    name: "Zulema",
    dateOfBirth: new Date(1994, 10, 7),
  }
]));