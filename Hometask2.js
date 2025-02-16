function pow(x, y) {
    if (y === 0) {
        return 1;
    }

    let result = x;

    for (let i = 1; i < y; i++) {
        result *= x;
    }

    if (y < 0) {
        result = 1 / result;
    }

    return result;
}
console.log(pow(2, 3)); // 8
console.log(pow(5, 0)); // 1
console.log(pow(3, 2)); // 9
console.log(pow(2, -3)); // 0.125