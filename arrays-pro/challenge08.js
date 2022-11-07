// En este desafío tienes un array de números positivos y negativos, tu reto es retornar un array ordenado de menor a mayor y dejando los valores sin que se repitan números.

// La solución debería tener un input y output como los siguientes:

// Input

// solution([1, 2, -3, -1, 2, 4, 4, 1, 45, -1]);

// Output

// [-3, -1, 1, 2, 4, 45]

function solution(array) {
  // return array.filter((item, index) => array.indexOf(item) === index).sort((a,b) => b - a);
  return array
        .sort((a, b) => a - b)
        .filter((item, index) => array.indexOf(item) === index);
}

console.log(solution([1, 2, -3, -1, 2, 4, 4, 1, 45, -1]));