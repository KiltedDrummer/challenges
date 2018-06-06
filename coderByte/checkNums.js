function CheckNums (num1,num2) {
    // code goes here
    if (num1 < num2) {
        return 'true';
    } else if (num1 === num2) {
        return '-1';
    } else {
        return 'false';
    }

    return num1 + num2;
}

// keep this function call here
CheckNums(readline());
