function FirstReverse (str) {
    // code goes here
    testArr = str.split('');
    reversed = testArr.reverse();

    return reversed.join('');
}

// keep this function call here
FirstReverse(readline());
