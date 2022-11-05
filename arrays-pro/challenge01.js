// En este desafío recibirás dos arrays de números como parámetros de entrada y debes retornar un array que tenga los dos arrays unidos.

// La solución debería tener un input y output como los siguientes:

// Input

// solution([1, 2, 3], [4, 5, 6]);
// solution(["A", "B", "C"], ["D", "E", "H"]);

// Output

// [1, 2, 3, 4, 5, 6]
// ["A", "B", "C", "D", "E", "H"]

function solution(arrayA, arrayB) {
  return [...arrayA, ...arrayB];

  // Another solution
  // const newArray = arrayA.concat(arrayB);
  // return newArray;
}

console.log(solution([1, 2, 3], [4, 5, 6]));
console.log(solution(["A", "B", "C"], ["D", "E", "H"]));