// Parametros de função



// console.log(soma(2, 2))

// Parâmetros X argumentos

// ordem dos parâmetros

function nomeIdade(nome, idade) {
    return `Meu nome é ${nome} e minha idade é ${idade}`
}
// console.log(nomeIdade(40, "Diógenes"))

function soma(num1, num2) {
    return num1 + num2;
}

function multiplica(numero1 = 1, numero2 = 1) {
    return numero1 * numero2;
}

console.log(multiplica(soma(4, 5)))
