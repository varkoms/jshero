// Tienes un array de números y debes retornar la suma de todos los valores en él.

// La solución debería tener un input y output como los siguientes:

// solution([1, 1, 1]);
// solution([2, 4, 8]);

// Output

// 3
// 14

function solution(numbers) {
  return numbers.reduce((prev, curr) => prev + curr, 0);
}

console.log(solution([1, 1, 1]));
console.log(solution([2, 4, 8]));