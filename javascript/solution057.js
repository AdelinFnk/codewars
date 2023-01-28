// Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.

//PREP
//PARAMETER: all values are integers
//RETURNS: just return
//EXEMPLE:
// invert([1,2,3,4,5]) == [-1,-2,-3,-4,-5]
// invert([1,-2,3,-4,5]) == [-1,2,-3,4,-5]
// invert([]) == []
//PSEUDO CODE:
//create a function
function invert(array){
    //array method
    return array.map(num => -num)
}