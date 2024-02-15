const element3 = (array) => {
    for (let i = 0; i < array.length; i+= 1) {
    if (i % 3 === 0) {
        console.log(`Index ${i}: ${array[i]}`);
    }
    }
};

const Even = (array) => {
for (let i = 0; i < array.length; i+= 1) {
    if (arr[i] % 2 === 0) {
    console.log(arr[i]);
    }
}
};

const letter = (array) => {
return arr.map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
};

const swap = (str) => {
return str.split(' ').map(word => {
    if (word.length > 1) {
    return word.charAt(word.length - 1) + word.slice(1, -1) + word.charAt(0);
    } else {
    return word;
    }
}).join(' ');
}
let s = "В лесу родилась елочка";
let s1 = swapFirstAndLastLetter(s);
console.log(s1);
let numbers = [3.5, -2.1, 5.7, -1.2, 4.3, -6.7, 8.9, -4.5, 2.6];
console.log("Положительные элементы массива:", positiveNumbers);
let countPositive = positiveNumbers.length;
console.log("Количество положительных элементов:", countPositive);
let negativeNumbers = numbers.filter(num => num < 0);
let productNegative = negativeNumbers.reduce((acc, num) => acc * num, 1);
console.log("Произведение отрицательных элементов:", productNegative);
const countInversions = (array) => {
let inversions = 0;
for (let i = 0; i < array.length; i++) {
for (let j = i + 1; j < array.length; j++) {
  if (array[i] > array[j]) {
    inversions++;
  }
}
}
return inversions;
}

let array = [24, 35, 29, 44, 8, 22, 4];
let inversions = countInversions(arr);
console.log("Число инверсий в массиве:", inversions);
const haveSameHeightPlayer = (team1, team2) => {
for (let height1 of team1) {
for (let height2 of team2) {
  if (height1 === height2) {
    return true;
  }
}
}
return false;
}

let team1 = [180, 185, 190, 175, 170];
let team2 = [172, 165, 190, 185, 168];

if (haveSameHeightPlayer(team1, team2)) {
console.log("В командах есть игроки одинакового роста");
} else {
console.log("В командах нет игроков одинакового роста");
}

const  hasDuplicate = (array) => {
let set = new Set();
for (let i = 0; i < arr.length; i++) {
if (set.has(arr[i])) {
  return true;
}
set.add(arr[i]);
}
return false;
}
let arr = [3, 8, 2, 5, 7, 3, 1, 6, 4, 8];
if (hasDuplicate(arr)) {
console.log("В массиве есть хотя бы одна пара совпадающих элементов");
} else {
console.log("В массиве нет пар совпадающих элементов");
}

const createMatrix = (rows, cols) => {
let matrix = [];
for (let i = 0; i < rows; i++) {
matrix[i] = [];
for (let j = 0; j < cols; j++) {
  matrix[i][j] = Math.floor(Math.random() * 10); // заполняем элемент случайным числом от 0 до 9
}
}
return matrix;
}

const sumOfElements = (matrix) => {
let sum = 0;
for (let row of matrix) {
for (let elem of row) {
  sum += elem;
}
}
return sum;
}

let = matrix = createMatrix(3, 3);
console.log("Двумерный массив:", matrix);
let totalSum = sumOfElements(matrix);
console.log("Сумма элементов двумерного массива:", totalSum);

const LessTen = (matrix) => {
let count = 0;
for (let row of matrix) {
for (let elem of row) {
  if (elem < 10) {
    count++;
  }
}
}
return count;
}

let = matrix = [
[8, 14, 5],
[20, 7, 12],
[9, 3, 15],
[6, 11, 18]
];

let result = LessTen(matrix);
console.log("Количество цифр, значение которых меньше 10:", result);

const findMaxIndex = (matrix) => {
let max = matrix[0][0];
let maxRow = 0;
let maxCol = 0;
for (let i = 0; i < matrix.length; i++) {
for (let j = 0; j < matrix[i].length; j++) {
  if (matrix[i][j] > max) {
    max = matrix[i][j];
    maxRow = i;
    maxCol = j;
  }
}
}
return [maxRow, maxCol];
}

let  matrix = [
[1, 2, 3, 4],
[5, 6, 7, 8],
[9, 10, 11, 12],
[13, 14, 15, 16]
];

let [maxRow, maxCol] = findMaxIndex(matrix);
console.log("Индексы максимального элемента:", maxRow, maxCol);