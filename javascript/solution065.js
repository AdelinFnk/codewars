// // Your task is to convert strings to how they would be written by Jaden Smith. The strings are actual quotes from Jaden Smith, but they are not capitalized in the same way he originally typed them.

// // Example:

// // Not Jaden-Cased: "How can mirrors be real if our eyes aren't real"
// // Jaden-Cased:     "How Can Mirrors Be Real If Our Eyes Aren'



String.prototype.toJadenCase = function() {
    return this.split(' ').map(item => item[0].toUpperCase() + item.slice(1)).join(' ')
  };


// HIGH LEVEL SUMMARY

// To capitalize every first letter of each word in the string.

// this.split(' ') to create an array of individual words
// .map(item => item[0].toUpperCase()) to create a new array with the results from applying the function on every element in the previous array.
// item.slice(1) concatenates back the remainder portion starting at index 1, aka the second letter of each word.
// .join(' ') to combine every element in the array back into a string with a space ' ' in between