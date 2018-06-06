function FirstFactorial (num) {
    // code goes here
    let answer = 1;

    for (i = 1; i <= num; i++) {
        answer *= i;
    }

    return answer;
}

// keep this function call here
FirstFactorial(readline());
