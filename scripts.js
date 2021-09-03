let inputnumber
let outputexpression
let operationexpression
let operation = ""
let x
let operandchanger = 0
//Operand changer is 0 while entering numbers, 1 while entering operands and 2 when result has already been evaluated

operationexpression = document.getElementById("input-display")
operationexpression.innerHTML = ""

outputexpression = document.getElementById("output-display")
outputexpression.innerHTML = ""

// Function that registers when a new number is input 
function numberinputfunction(x) {
    if (operandchanger != 2) {
        operation = operation + x.value
        operationexpression.innerHTML = operation
        operandchanger = 0
    }
}

// Function that registers when user clicks an operator
function operandinputfunction(x) {
    if (operandchanger == 0) {
        operation = operation + " " + x.value + " "
        operationexpression.innerHTML = operation
        operandchanger = 1
    }
    else if (operandchanger == 1) {
        operation = operation.substr(0, operation.length-3)
        operation = operation + " " + x.value + " "
        operationexpression.innerHTML = operation
    }
}

function evalfunction() {
    operation = operation.trim()
    let EvArray = operation.split(" ")

    // Edge-case scenario 1: When first operand is preceded by + or -, add 0 to beginning of array
    if (EvArray[0] == "-" || EvArray[0] == "+") {
        for (let i=EvArray.length; i>0; i--) {
            EvArray[i] = EvArray[i-1]
        }
        EvArray[0] = "0"
    }

    // Edge-case scenario 2: When user types operator at end, remove it
    if (EvArray[EvArray.length-1] == "/" || EvArray[EvArray.length-1] == "x" || EvArray[EvArray.length-1] == "-" || EvArray[EvArray.length-1] == "+") {
        EvArray.pop()
    }

    // Evaluating division first
    for (let i=0; i<EvArray.length; i++) {
        if (EvArray[i] == "/") {
            EvArray[i-1] = EvArray[i-1] / EvArray [i+1]
            for (let j=i; j<EvArray.length; j++) {
                EvArray[j] = EvArray [j+2]
            }
            EvArray.splice(EvArray.length-2, 2)
            i = i-2
        }
    }

    // Evaluating multiplication
    for (let i=0; i<EvArray.length; i++) {
        if (EvArray[i] == "x") {
            EvArray[i-1] = EvArray[i-1] * EvArray [i+1]
            for (let j=i; j<EvArray.length; j++) {
                EvArray[j] = EvArray [j+2]
            }
            EvArray.splice(EvArray.length-2, 2)
            i = i-2
        }
    }

    // Evaluating subtraction
    for (let i=0; i<EvArray.length; i++) {
        if (EvArray[i] == "-") {
            EvArray[i-1] = EvArray[i-1] - EvArray [i+1]
            for (let j=i; j<EvArray.length; j++) {
                EvArray[j] = EvArray [j+2]
            }
            EvArray.splice(EvArray.length-2, 2)
            i = i-2
        }
    }

    // Evaluating addition
    for (let i=0; i<EvArray.length; i++) {
        if (EvArray[i] == "+") {
            EvArray[i-1] = parseFloat(EvArray[i-1]) + parseFloat(EvArray [i+1])
            for (let j=i; j<EvArray.length; j++) {
                EvArray[j] = EvArray [j+2]
            }
            EvArray.splice(EvArray.length-2, 2)
            i = i-2
        }
    }

    //Displaying Answer
    let finaloutput = EvArray[0]
    outputexpression.innerHTML = +finaloutput.toFixed(2)
    operandchanger = 2
}

function clearmemory() {
    operationexpression.innerHTML = ""
    operation = ""
    outputexpression.innerHTML = ""
    operandchanger = 0
}

let y
// Keyboard Inputs
window.onkeydown = function (e) {
    y = e.key
    console.log (y)

    // If number is pressed
    if (y>=0 || y<=9) {
        numberinputfunctionkeyboard(y)
    }

    // If operand is pressed
    if (y=="+" || y=="-" || y=="*" || y=="/") {
        operandinputfunctionkeyboard(y)
    }

    // If enter is pressed
    if (y=="Enter") {
        evalfunction()
    }
}

function numberinputfunctionkeyboard(z) {
    if (operandchanger != 2) {
        operation = operation + z
        operationexpression.innerHTML = operation
        operandchanger = 0
    }
}

function operandinputfunctionkeyboard(z) {
    if (operandchanger == 0) {
        operation = operation + " " + z + " "
        operationexpression.innerHTML = operation
        operandchanger = 1
    }
    else if (operandchanger == 1) {
        operation = operation.substr(0, operation.length-3)
        operation = operation + " " + z + " "
        operationexpression.innerHTML = operation
    }
}