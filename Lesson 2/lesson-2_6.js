function sum(a, b) {
    return a + b
}
function sub(a, b) {
    return a - b
}
function mul(a, b) {
    return a * b
}
function div(a, b) {
    return a / b
}
function mathOperation(arg1, arg2, operation) {
    console.log(operation(arg1, arg2))
}

mathOperation(3, 7, sum);
mathOperation(3, 7, mul);
