var findAndReplacePattern = function (words, pattern) {
    const result = [];
    const findPattern = (string) => {
        let stingArray = string.split('');
        let patternNum = [];

        for (let i = 0; i < string.length; i += 1) {
            patternNum.push(stingArray.indexOf(string[i]));
        }

        return patternNum.join('');
    }

    const givenPat = findPattern(pattern);

    words.forEach(word => {
        let wordPat = findPattern(word);
        if (givenPat === wordPat) {
            result.push(word);
        }
    });

    return result;
};