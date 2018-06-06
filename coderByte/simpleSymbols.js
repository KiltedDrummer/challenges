/**
 * This solved with forEach
 * @param {*} str 
 */
function SimpleSymbols(str) {

    // code goes here
    var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    var arr = str.split('');
    var result;

    arr.forEach((value, index) => {
        if (letters.indexOf(value) >= 0) {
            if (arr[index - 1] === '+' && arr[index + 1] === '+') {
                result = true;
            } else {
                result = false;
            }
        }
    })

    return result;

}

// keep this function call here 
SimpleSymbols(readline());                            


/**
 * solved with arr.reduce
 */

function SimpleSymbols(str) {

    // code goes here
    var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    var arr = str.split('');

    return arr.reduce((result, value, index) => {
        if (letters.indexOf(value) >= 0) {
            if (arr[index - 1] === '+' && arr[index + 1] === '+') {
                result = true;
            } else {
                result = false;
            }
        }
        return result;
    });
}

/**
 * solved with arr.map
 */
function SimpleSymbols(str) {

    // code goes here
    var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    var arr = str.split('');
    var result;

    arr.map((value, index) => {
        if (letters.indexOf(value) >= 0) {
            if (arr[index - 1] === '+' && arr[index + 1] === '+') {
                result = true;
            } else {
                result = false;
            }
        }
    });
    return result;
}
