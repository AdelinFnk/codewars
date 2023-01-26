// Given a string, you have to return a string in which each character (case-sensitive) is repeated once.
//PREP - PARAMETERS, RETURNS, EXAMPLES, PSEUDO CODE

function doubleChar(str) {
    //use string and array methods
    //loop
    return str.split('').map(e => e+e ).join('')
  }
  
// Examples (Input -> Output):
// * "String"      -> "SSttrriinngg"
// * "Hello World" -> "HHeelllloo  WWoorrlldd"
// * "1234!_ "     -> "11223344!!__  "


