// En este desafío tienes un array de números positivos y negativos, tu reto es retornar un objeto con el número de veces que aparece un número.

// La solución debería tener un input y output como los siguientes:

// Input

// solution([1, 2, -3, -1, 2, 4, 4, 1, 45, -1]);

// Output

// {
//   '1': 2,
//   '2': 2,
//   '4': 3,
//   '45': 1,
//   '-3': 1,
//   '-1': 2
// }

function solution(array) {
  return array.reduce((obj, item) => {
    (!obj[item]) 
      ? obj[item] = 1
      : obj[item] += 1;
    return obj;
  }, {});
}

console.log(solution([1, 2, -3, -1, 2, 4, 4, 1, 45, -1]));