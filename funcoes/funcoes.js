// let x = '';
// console.log(x);
// x = "oi"


function imprimeTexto(texto) {
    console.log(texto);
}

imprimeTexto(soma())
// imprimeTexto("Outro texto")

//  Três formas de escrever funcções

function soma() {
    return resultado = 2 + 2;
}
// console.log(soma())

function cumprimentar() {
    console.log('oi gente!')
}
cumprimentar()


function cumprimentaPessoa(pessoa) {
    console.log(`oi, ${pessoa}!`)
}

cumprimentaPessoa('Diógenes')

function cumprimentar() {
    return 'Oi gente!'
}

function cumprimentaPessoa(nomePessoa) {
    console.log(`${cumprimentar()} Meu nome é ${nomePessoa}`)
}

cumprimentaPessoa('Diógenes')

function operacaoMatematica(numero1, numero2, numero3) {
    return numero1 + numero2 + numero3
}

console.log(operacaoMatematica(15, 30, 45))


function comParametro(param) {
    console.log(param)
}
comParametro()