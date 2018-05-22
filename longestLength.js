function LongestWord (sen) {
    // code goes here
    let arrLengths = [ ];
    let longest = [ ];
    let max = 0;

    let tester = sen.split(' ');

    for (i = 0; i < tester.length; i++) {
        let word = tester[i];
        arrLengths.push(word.length);
    }

    for (i = 0; i < arrLengths.length; i++) {
        if (arrLengths[i] > max) {
            max = arrLengths[i];
        }
    }

    for (i = 0; i < arrLengths.length; i++) {
        if (arrLengths[i] === max) {
            sen = tester[i];
        }
    }

    return sen;
}

// keep this function call here
LongestWord(readline());
