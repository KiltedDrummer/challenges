var sortArrayByParity = function (A) {
    const even = [];
    const odd = [];
    A.forEach(ele => {
        if (ele % 2 === 0) {
            even.push(ele)
        } else {
            odd.push(ele)
        }
    });

    return even.concat(odd);
};