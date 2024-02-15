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