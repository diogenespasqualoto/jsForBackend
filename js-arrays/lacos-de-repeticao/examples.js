// igual a dez
// for (let indice = 0; indice <= 10; indice++) {
//     console.log(indice);
//   }
//    Cai no loop sem passar a expressao
//   for (let indice = 0; indice <= 10; ) {
//     console.log(indice);
//   }

// Para saber mais: possibilidades do for

// const numeros = [100, 200, 300, 400, 500, 600];

// for (let i = numeros.length - 1; i >= 0; i--) {
//   console.log(numeros[i]);
// }

const numeros = [100, 200, 300, 400, 500, 600];

for (let i = numeros.length - 1; i >= 0; i -= 2) {
  console.log(numeros[i]);
}