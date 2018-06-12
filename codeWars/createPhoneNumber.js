function createPhoneNumber(numbers) {
    var result = '';

    result += parenthesize(areaCode(numbers)) + ' ' + firstThree(numbers) + '-' + lastFour(numbers);
    return result;
}

function areaCode(arr) {
    return arr.slice(0, 3).join('');
}

function parenthesize(str) {
    return '(' + str + ')';
}

function firstThree(arr) {
    return arr.slice(3, 6).join('');
}

function lastFour(arr) {
    return arr.slice(6).join('');
}
