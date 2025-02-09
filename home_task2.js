function pow(x, y) {
    if (y === 0) {
        return 1;
    }

    let result = 1;

    if (y > 0) {
        for (let i = 1; i <= y; i++) {
            result *= x;
        }
    } else {
        for (let i = 1; i <= -y; i++) {
            result *= x;
        }
        result = 1 / result;
    }

    return result;
}

console.log(pow(1, 0));
console.log(pow(2, 2));
console.log(pow(2, -2));