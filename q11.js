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