const uniqueMorseRepresentations = function (words) {
    const morseCode = [".-", "-...", "-.-.", "-..", ".", "..-.", "--.", "....", "..", ".---", "-.-", ".-..", "--", "-.", "---", ".--.", "--.-", ".-.", "...", "-", "..-", "...-", ".--", "-..-", "-.--", "--.."];
    const transformations = new Set();
    const index = (letter) => letter.charCodeAt(0) - 97;

    words.forEach(word => {
        let transformation = '';
        for (let i = 0; i < word.length; i += 1) {
            transformation += morseCode[index(word[i])];
        }
        transformations.add(transformation)
    });

    return transformations.size;
};