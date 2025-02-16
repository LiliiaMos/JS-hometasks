function checkProbabilityTheory(count) {
    let evenNumberCount = 0;
    let oddNumberCount = 0;

    for (let i = 0; i < count; i++) {
        let randomNumber = Math.floor(Math.random() * (1000 - 100 + 1)) + 100;

        if (randomNumber % 2 === 0) {
            evenNumberCount++;
        } else {
            oddNumberCount++;
        }
    }

    let evenPercentage = (evenNumberCount / count) * 100;
    let oddPercentage = (oddNumberCount / count) * 100;

    console.log(`Кількість чисел: ${count}`);
    console.log(`Парних чисел: ${evenNumberCount}`);
    console.log(`Непарних чисел: ${oddNumberCount}`);
    console.log(`Відсоток парних: ${evenPercentage}%`);
    console.log(`Відсоток непарних: ${oddPercentage}%`);
}
checkProbabilityTheory(150);