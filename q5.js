let numbers = [3.5, -2.1, 5.7, -1.2, 4.3, -6.7, 8.9, -4.5, 2.6];
console.log("Положительные элементы массива:", positiveNumbers);
let countPositive = positiveNumbers.length;
console.log("Количество положительных элементов:", countPositive);
let negativeNumbers = numbers.filter(num => num < 0);
let productNegative = negativeNumbers.reduce((acc, num) => acc * num, 1);
console.log("Произведение отрицательных элементов:", productNegative);