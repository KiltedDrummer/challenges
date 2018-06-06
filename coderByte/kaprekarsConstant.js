function numToArray(num) {
    var numArr = String(num).split('');

    for (var i = 0; i < numArr.length; i++) {
        if (numArr.length < 4) {
            numArr.push(0);
        }
    }

    return numArr;
}

function arraysSubtract(numArr) {
    var lowHigh = numArr.sort(function (a, b) {
        return a - b;
    });
    var highLow = lowHigh.slice().reverse();

    return Number(highLow.join('')) - Number(lowHigh.join(''));
}


function kaprekarsConstant(num) {

    // code goes here  
    // break num into digits
    // add zero's to make length = 4
    // sort low- high and hight to low
    // subtract low-high from high-low
    // incriment count
    // return count
    var numArr;
    var numTemp = num;
    var lowHigh;
    var highLow;
    var count = 0;


    for (var i = 0; i < 50; i++) {
        if (numTemp === 6174) {
            return count;
        } else if (numTemp === 0) {
            return 'FAILED';
        } else {
            numArr = numToArray(numTemp);
            numTemp = arraysSubtract(numArr);
            count++;
        }
    }
}

// keep this function call here 
KaprekarsConstant(readline());
