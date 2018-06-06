function LetterChanges(str) { 

    // code goes here  
    // find the first character
    // check to see if character is a letter
    // if it is a letter, find it's value, add 1, find new letter
    // if new letter is a vowel, capitalize it
    // if is not a letter, pass character through to final string
    // return finalized string from updated letters and character passed through
    
    var anum=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    var vowels = ['a','e','i','o','u'];
    var result = '';
    
    str = str.toLowerCase();
    
    for (i=0; i<str.length; i++) {
        if (anum.indexOf(str[i]) >= 0) {
            if(anum.indexOf(str[i]) === 25) {
                result += 'A';
            }
            var newLetter = anum[anum.indexOf(str[i])+1];
            if (vowels.indexOf(newLetter) >= 0) {
                result += '' + newLetter.toUpperCase();
            } else {
                result += newLetter;
            }
        } else {
            result += str[i];
        }
    }
    return result;
}
   
// keep this function call here 
LetterChanges(readline());
