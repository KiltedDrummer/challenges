const toLowerCase = function (str) {
    let lowerCase = '';
    const letters = {
        A: 'a',
        B: 'b',
        C: 'c',
        D: 'd',
        E: 'e',
        F: 'f',
        G: 'g',
        H: 'h',
        I: 'i',
        J: 'j',
        K: 'k',
        L: 'l',
        M: 'm',
        N: 'n',
        O: 'o',
        P: 'p',
        Q: 'q',
        R: 'r',
        S: 's',
        T: 't',
        U: 'u',
        V: 'v',
        W: 'w',
        X: 'x',
        Y: 'y',
        Z: 'z',
    }
    for (let i = 0; i < str.length; i += 1) {
        if (letters[str[i]]) {
            lowerCase += letters[str[i]];
        } else {
            lowerCase += str[i];
        }
    }

    return lowerCase;
};