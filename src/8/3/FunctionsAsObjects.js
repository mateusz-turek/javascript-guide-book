const operators = {
    add: (x, y) => {
        return x + y
    },
    subtract: (x, y) => {
        return x - y
    },
    multiply: (x, y) => {
        return x * y
    },
    divide: (x, y) => {
        return x / y
    },
    pow: Math.pow
}


function add(x, y) {
    return x + y
}

function subtract(x, y) {
    return x - y
}

function multiply(x, y) {
    return x * y
}

function divide(x, y) {
    return x / y
}

function operate(operator, operand1, operand2) {
    return operator(operand1, operand2);
}

function operate2(operation, operand1, operand2) {
    if (typeof operators[operation] === 'function') {
        return operators[operation](operand1,operand2)
    }
    else throw "unknown operator";
}

const showOperateAndOperate2 = () => {
    let operate1 = operate(add, operate(add, 2, 3), operate(multiply, 4, 5))
    console.log(operate1)
    let operateTwo = operate2("add", "Hello,",operate2("add"," ", "world"))
    console.log(operateTwo);
}

module.exports.showFunctionAsObject = showOperateAndOperate2;