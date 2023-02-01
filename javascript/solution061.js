// Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

//PREP
//Parameters: string with with a-z char
//Returns: return true or false
//Examples:
// solution('abc', 'bc') // returns true
// solution('abc', 'd') // returns false

function solution(str, ending){
    //use string method
    return str.endsWith(ending);
  }


