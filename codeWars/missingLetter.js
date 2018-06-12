function findMissingLetter(array) {
    var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    var result = '';
    var start = letters.indexOf(array[0]);

    if (start < 0) {
        var capitalize = true;
        array = array.map((value) => {
            return value.toLowerCase();
        });
        start = letters.indexOf(array[0]);

    }

    for (var i = start; i < start + array.length; i++) {
        array.forEach((value, index) => {
            if (letters[i] !== value && letters[i + 1] === array[index + 1]) {
                result = letters[i];
            }
        });
    }

    if (capitalize === true) {
        return result.toUpperCase();
    }

    return result;
}
