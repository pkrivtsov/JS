function power(val, pow) {

    if (pow == 0) {
        return 1
    } else if (pow < 0) {
        return power(1 / val, -pow);
    } else if (pow % 2) {
        return val * power(val, pow - 1);
    }
    return power(val * val, pow / 2)
}

console.log(power(4, -3))