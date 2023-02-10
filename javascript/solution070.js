// Task:
// Given a list of integers, determine whether the sum of its elements is odd or even.

// Give your answer as a string matching "odd" or "even".

// If the input array is empty consider it as: [0] (array with a zero).



//PREP
//Parameters: list of numbers (array)
//Return: a string
// Examples:
// Input: [0]
// Output: "even"

// Input: [0, 1, 4]
// Output: "odd"

// Input: [0, -1, -5]
// Output: "even"

function oddOrEven(array) {
    //pseudo code:
    //we take the array and use the reduce method that calculates the sum and return it
    //we take the sum and use modulo to find if the number is even or odd
    //last stept we say if the sum of numbers is even to return string even and the ssame for odd
    return (array.reduce((acc, num) => acc + num, 0)) % 2 === 0 ? "even" : "odd";
  }