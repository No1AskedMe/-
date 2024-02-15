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