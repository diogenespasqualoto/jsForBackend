// animaisDoAquario = ['🐋', '🐙', '🐬', '🦈']

// animaisDoAquario.splice(1,0,'🐠')
// animaisDoAquario.splice(3,2,'🐟')

// console.log(animaisDoAquario)

// MATRIZES

// const nomes = ["Ana", "Juliana", "Leonardo"];
// const idades = [30, 35, 28];
// const faculdade = [false, true, true];

// const funcionarios = [nomes, idades, faculdade];
// console.log(funcionarios);

// Método concat

// const arrayOriginal = [50, 60, 70]
// const arrayConcat = arrayOriginal.concat([80, [90, 100]])

// console.log(arrayConcat)
// console.log(arrayOriginal)

// Acessando elementos
const funcionarios = [
    ["Ana", "Juliana", "Leonardo"],
    [30, 35, 28]
];

console.log(`${funcionarios[0][2]} tem idade ${funcionarios[1][2]}`)