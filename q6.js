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