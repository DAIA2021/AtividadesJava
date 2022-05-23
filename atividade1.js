
//atividade 1

var medida1 = parseFloat(prompt('Informe o primeiro valor'))
var medida2 = parseFloat(prompt('Informe o segundo valor'))
var medida3 = parseFloat(prompt('Informe o terceiro valor'))


if (medida1 === medida2 === medida3 ) {
    alert('Triangulo Equilatero')   
}else if (medida1 != medida2 != medida3){
    alert("Triângulo Escaleno")
}else {
    alert('Triângulo Isoceles')
}


//atividade 2

var n1 =parseFloat(prompt("Digite o primeiro numero"))
var n2 =parseFloat(prompt("Digite o segundo numero"))
var n3 =parseFloat(prompt("Digite o terceiro numero"))


if(n1 > n2 && n1 > n3){
    alert(`O maior numero inteiro é o primeiro, ${n1}.`);
} else if(n2 > n1 && n2 > n3){
    alert(`O maior numero inteiro é o segundo, ${n2}.`);
} else {
    alert(`O maior numero inteiro é o terceiro, ${n3}.`)
}

  





//atividade 3

let x = parseFloat(prompt('Informe o valor de X'))
let y = parseFloat(prompt('Informe o valor de Y'))
let z = x
let a = y
document.write(`O valor de y é ${y} e x é ${x}`)
x=a
y=z


document.write(` e o valor invertido de y é ${y} e x é ${x}`)
