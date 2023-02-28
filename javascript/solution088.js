// This time no story, no theory. The examples below show you how to write function accum:

// Examples:
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"
// The parameter of accum is a string which includes only letters from a..z and A..Z.

function accum(s) {
	return s.split('').map((char, idx) => char.toUpperCase() + char.toLowerCase().repeat(idx)).join('-')
}


// 'abcd'.split('') // ["a", "b", "c", "d"]

// .map((char,idx) => char.toUpperCase() + char * idx)

// .map((b,1) => b.toUpperCase() + b * 1) = Bb

// .map((c,2) => c.toUpperCase() + c * 2) = Ccc