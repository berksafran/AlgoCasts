// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

// ALTERNATIVE SOLUTION:
// 1) Convert string to Array
// 2) Check all elements with its symmetric in the string. ("abba")
// index 0 should be equal with index str.length
function palindrome(str) {
  return str
    .split("")
    .every((item, index, arr) => arr[arr.length - index - 1] === item);
}

module.exports = palindrome;
