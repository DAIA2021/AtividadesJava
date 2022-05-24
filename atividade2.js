// Atividade 2 Entrega

//Ex 1

let arr = [];

let qtdN = parseInt(prompt('Quantos números desejas digitar'));

let soma = 0; 

for (let i = 0; i < qtdN; i++) {
    let n = parseFloat(prompt(`Informe o ${i+1} n°`));
    arr.push(n);
    soma += n
}


let raizQ = arr.map(x => x**(1/2))
let raizC = arr.map(x => x**(1/3))
let quad = arr.map(x => x**2)
let media = soma / qtdN


alert(`Sua soma total é ${soma}`)
alert(`Sua média é ${media}`)
alert(`O resultado da raiz é quadrada ${raizQ}`)
alert(`O resultado da raiz é cubica é ${raizC}`)
alert(`O resultado ao quadrado é ${quad}`)




//EX 2

/*var text =parseFloat(prompt("Digite seu primeiro nome"))
console.log(texto.toUpperCase())
console.log(texto)
console.log(texto.toLowerCase())
console.log(texto.split(''))*/


