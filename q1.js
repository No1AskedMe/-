const element3 = (array) => {
    for (let i = 0; i < array.length; i+= 1) {
    if (i % 3 === 0) {
        console.log(`Index ${i}: ${array[i]}`);
    }
    }
};