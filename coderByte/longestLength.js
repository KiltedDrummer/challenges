function LongestWord (sen) {
    // code goes here
    let arrLengths = [ ];
    let longest = [ ];
    let max = 0;

    let tester = sen.split(' ');

    for (i = 0; i < tester.length; i++) {
        let word = tester[i];
        arrLengths.push(word.length);
    }

    for (i = 0; i < arrLengths.length; i++) {
        if (arrLengths[i] > max) {
            max = arrLengths[i];
        }
    }

    for (i = 0; i < arrLengths.length; i++) {
        if (arrLengths[i] === max) {
            sen = tester[i];
        }
    }

    return sen;
}

// keep this function call here
LongestWord(readline());


//***********************************************************

// alternate solution using .forEach

function LongestWord(sen) { 

  // code goes here  
  // break sen into an array of each word
  // check length of each element in new array
  // return element with longest length
  
  var words = sen.split(' ');
  var length = 0;
  var longest = '';
  
  words.forEach((element) => {
      var word = element.replace(/[^a-zA-z]+/g, '');
      if (word.length > length) {
          length = word.length
          longest = word;
      }
  })
  
  return longest; 
         
}
   
// keep this function call here 
LongestWord(readline());
