function digital_root(n) {
    var sum = n;
    var digits = String(sum).split('');

    while (digits.length > 1) {
        sum = digits.reduce((total, value) => {
            return total += Number(value);
        }, 0);
        digits = String(sum).split('');
    }

    return sum;
}