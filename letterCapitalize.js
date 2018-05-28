function LetterCapitalize(str) { 

  // code goes here  
  // NO ARRAYS
  // crate var finalSTR
  // look up each character in str
  // push Capital version of first char
  // push cahracters until str pushes ' '
  // push next char as capital
  
  var finalStr = '';
  
  for (i=0; i<str.length; i++) {
      if (i === 0 || str[i-1] === ' ') {
          finalStr += str[i].toUpperCase();
      } else {
          finalStr += str[i];
      }
      
  }
  
  return finalStr;
  
}

// keep this function call here
LetterCapitalize(readline());
