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