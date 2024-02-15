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