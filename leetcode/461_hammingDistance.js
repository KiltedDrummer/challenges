var hammingDistance = function (x, y) {
    // convert both digits to binary
    let binaryX = x.toString(2).padStart(32, "0");
    let binaryY = y.toString(2).padStart(32, "0");
    let result = 0;
    for (let i = 0; i < 32; i += 1) {
        if (binaryX[i] !== binaryY[i]) {
            result += 1;
        }
    }

    return result;
};