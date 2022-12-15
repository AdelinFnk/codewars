// Given an array of strings, reverse them and their order in such way that their length stays the same as the length of the original inputs.

// Example:
// Input:  {"I", "like", "big", "butts", "and", "I", "cannot", "lie!"}
// Output: {"!", "eilt", "onn", "acIdn", "ast", "t", "ubgibe", "kilI"}
// Good luck!

const ultimateReverse = s =>
  (arr => s.map(val => arr.splice(0, val.length).join(``)))
  ([...s.join(``)].reverse());