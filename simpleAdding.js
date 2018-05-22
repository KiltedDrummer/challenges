function SimpleAdding (num) {
    // code goes here
    let product = 0;
    for (i = 0; i <= num; i++) {
        product += i;
    }

    return product;
}

// keep this function call here
SimpleAdding(readline());
