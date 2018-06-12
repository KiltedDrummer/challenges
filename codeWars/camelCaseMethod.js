String.prototype.camelCase = function () {
    //your code here
    var words = this.split(' ');

    if (this.length === 0) {
        return '';
    }

    return words.reduce((result, value) => {
        value = value.trim();
        if (value.length === 0) {
            return result;
        }
        var letters = value.split('');
        letters[0] = letters[0].toUpperCase();
        result += letters.join('');
        return result;
    }, '');
}
