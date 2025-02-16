function pow(x, y) {
    if (y === 0) {
        return 1; // Якщо y == 0, повертаємо 1
    }

    let result = 1;

    // Якщо y додатне, множимо x на себе y разів
    if (y > 0) {
        for (let i = 1; i <= y; i++) {
            result *= x;
        }
    }

    // Якщо y від'ємне, спочатку обчислюємо x в степені |y|, а потім робимо 1 / result
    else {
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