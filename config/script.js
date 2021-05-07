var visorResultado = document.querySelector(".visorResultado")

var numeros1 = [numberOne, numberTwo, numberThree, numberFour]
var numeros2 = [numberOne, numberTwo, numberThree, numberFour]

function numero1() {
    var numberOne = document.querySelector(".numero1-calculadora")

    numberOne = 1
    visorResultado.innerHTML = numberOne
    visorResultado.classList.remove("tiraResultadoVisor")
}

function numero2() {
    var numberTwo = document.querySelector(".numero2-calculadora")

    numberTwo = 2
    visorResultado.innerHTML = numberTwo
    visorResultado.classList.remove("tiraResultadoVisor")
}
function numero3() {
    var numberThree = document.querySelector(".numero3-calculadora")

    numberThree = 3
    visorResultado.innerHTML = numberThree
    visorResultado.classList.remove("tiraResultadoVisor")
}
function numero4() {
    var numberFour = document.querySelector(".numero4-calculadora")

    numberFour= 4
    visorResultado.innerHTML = numberFour
    visorResultado.classList.remove("tiraResultadoVisor")
}
function numero5() {}
function numero6() {}
function numero7() {}
function numero8() {}
function numero9() {}
function numero0() {}
function numeroMais() {
    var mais = document.querySelector(".sinais-mais")

}
function numeroMenos() {}
function numeroVezes() {}
function numeroDivisao() {}
function numeroSoma() {}
function numeroClear() {
    var c = document.querySelector(".sinais-clear")

    visorResultado.classList.add("tiraResultadoVisor")
}