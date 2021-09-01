let inputnumber
let outputexpression
let operationexpression
let operation = ""
console.log(2)

operationexpression = document.getElementById("input-display")
operationexpression.innerHTML = ""

outputexpression = document.getElementById("output-display")
outputexpression.innerHTML = ""

let numberinputs = document.getElementsByClassName("numberinput")

let x
let operandchanger = 0
//Operand changer is 0 while entering numbers and 1 while entering operands

function numberinputfunction(x) {
    operation = operation + x.value
    operationexpression.innerHTML = operation
    operandchanger = 0
}

function operandinputfunction(x) {
    if (operandchanger == 0) {
        operation = operation + " " + x.value + " "
        operationexpression.innerHTML = operation
        operandchanger = 1
    }
    else {
        operation = operation.substr(0, operation.length-3)
        console.log (operation)
        operation = operation + " " + x.value + " "
        operationexpression.innerHTML = operation
    }
}

function evaluate() {
    operation = operation.trim();
    
}