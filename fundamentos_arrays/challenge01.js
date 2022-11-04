// En este desafío tienes un array de números, usando la función map debes retornar todos los números del array multiplicados por dos.

// La solución debería tener un input y output como los siguientes:

// Input

// solution([2, 4, 5, 6]);

// Output

// [4, 8, 10, 12]

function solution(array) {
  return array.map(a => a * 2);
}

// Tests
console.log(solution([2, 4, 6, 8, 10, 12, 16, 18]));
console.log(solution([]));
console.log(solution([-2, -14, -18]));