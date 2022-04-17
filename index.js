function add(a, b) {
    return a + b
}

function subtract(a, b) {
    return a - b
}

function multiply(a, b) {
    return a * b
}

function divide(a, b) {
    return a / b
}

function increment(n) {
    return n += 1
}

function decrement(n) {
    return n -= 1
}


function makeInt(n){
    return parseInt(n, 10)
}

function preserveDecimal(n){
    return parseFloat(n)
}

makeInt("20")

console.log(add(800, 75))
console.log(subtract(800, 75))
console.log(multiply(800, 75))
console.log(divide(800, 75))