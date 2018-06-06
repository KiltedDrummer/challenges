function pigIt(str) {
    //Code here
    var words = str.replace(/\s+/g, ' ').split(' ');

    if (typeof str !== 'string' || str.length === 0) {
        return null;
    }

    words.forEach((value, index) => {
        var letters = value.split('');
        var temp = letters.shift();
        console.log(value);
        if (!(temp.match(/[a-z]/ig))) {
            letters.push(temp);
        } else if (letters.length === 0 || letters[letters.length - 1].match(/[a-z]/ig)) {
            letters.push(temp, 'a', 'y');
            words[index] = letters.join('');
        } else {
            letters.splice(-1, 0, temp, 'a', 'y');
            words[index] = letters.join('');
        }
    });

    return words.join(' ');
}
