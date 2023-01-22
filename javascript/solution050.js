// Given a string str, reverse it and omit all non-alphabetic characters.

//PREP
//P: all sorts of characters
//R: return 
//E: 

function reverseAndRemoveChar(str){
    //string methods and regexp
    return str.match(/[a-z]/gi).reverse().join('');
}

//input-output
//str = 'monday' output=  'yadnom'
//str = 'frid45a@y' output = 'yadirf'