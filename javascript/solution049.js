// Is the string uppercase?
// Task
// Create a method to see whether the string is ALL CAPS.
// In this problem, a string is said to be in ALL CAPS whenever it does not contain any lowercase letter so any string containing no letters at all is trivially considered to be in ALL CAPS.

//prep
//P: string, number, siymbols
//R: just return 
//E: 

String.prototype.isUpperCase = function() {
    return this.toUpperCase() == this;
  }

  
//'a'- false
//'Hello WORLD' - false
//'HELLO WORLD!23' - TRUE
//'ABCd@4DD' - false


