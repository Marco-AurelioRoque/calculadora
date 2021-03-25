


//Valor 1
var primeiroValor = parseInt(prompt("Digite o primeiro valor: "))
//Valor 2
var segundoValor = parseInt(prompt("Digite o segundo valor: "))

//Operação
var operacao = prompt("Digite 1 para fazer uma divisão, 2 para multiplicação, 3 para soma e 4 para subtração")

if (operacao == 1) {

    var resultado = primeiroValor / segundoValor
    document.write("<p>" + primeiroValor + " / " + segundoValor + " = " + resultado + "</p")

} else if (operacao == 2){

    var resultado = primeiroValor * segundoValor
    document.write("<p>" + primeiroValor + " x " + segundoValor + " = " + resultado + "</p")

} else if (operacao == 3){

    var resultado = primeiroValor + segundoValor
    document.write("<p>" + primeiroValor + " + " + segundoValor + " = " + resultado + "</p")

} else if (operacao == 4){

    var resultado = primeiroValor - segundoValor
    document.write("<p>" + primeiroValor + " - " + segundoValor + " = " + resultado + "</p>")

} else {
    document.write("<p>Opção invalida.</p>")
}















//Comentarios

//if = se 
//else = senão
//else if = senão se

// == é uma operação para comparar algo
// = é uma operação que usamos para atribuir coisas

//document.write é uma função para escrever algo direto na tela da pessoa