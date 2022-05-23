// Atividade 2 Entrega

//Ex 1

let qtdNumeros = parseFloat(prompt("Quantos numeros deseja digitar"))
let array = []

for (let i = 0; i < qtdNumeros; i++){
    let a = parseFloat(prompt(`Digite o ${i+1} º numero `))
    array.push(a)
}

let soma = 0

for( let total of array){
    soma += total
}

alert(`soma total dos numeros ${soma}`)

let media = soma / array.length

alert(`Sua média foi ${media.toFixed(2)}`)

//Consegui chegar até aqui tenho que utilizar o metodo map /(Math.pow(5, 4)) e Math.sqrt ( raiz quadrada), e raiz cubica (**)porém daqui em diante não consigo fazer a sisntaxe correta.





//EX 2

/*var text =parseFloat(prompt("Digite seu primeiro nome"))
console.log(texto.toUpperCase())
console.log(texto)
console.log(texto.toLowerCase())
console.log(texto.split(''))*/


