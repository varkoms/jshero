// En este desafío tienes que consumir la API de Rick And Morthy y en un array retornar solo los nombres de los personajes.

// Específicamente debes consumir el endpoint [GET] https://rickandmortyapi.com/api/character el cual retorna toda la información de los personajes, pero tú debes retornar un array con los nombres.

async function runCode() {
  const response = await fetch("https://rickandmortyapi.com/api/character");
  const data = await response.json();
  return data.results.map((item) => item.name);
}

runCode().then((response) => console.log(response));

// [
//     'Rick Sanchez',
//     'Morty Smith',
//     'Summer Smith',
//     ...
// ]
