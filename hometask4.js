var services = {
    "стрижка": "60 грн",
    "гоління": "80 грн",
    "Миття голови": "100 грн"
};

let prices = [];
let sum = 0;

Object.values(services).forEach(value => {
    prices.push(parseInt(value));
});


prices.forEach(num => {
    sum += num;
});


let minPrice = Math.min(...prices);
let maxPrice = Math.max(...prices);

console.log("Загальна сума:", sum + " грн");
console.log("Мінімальна ціна:", minPrice + " грн");
console.log("Максимальна ціна:", maxPrice + " грн");