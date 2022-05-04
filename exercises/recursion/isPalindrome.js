// isPalindrome("awesome") = false
// isPalindrome("foobar") = false
// isPalindrome("ada") = true

function isPalindrome(str) {
  if (!str) return false;
  if (str.length === 1) return true;
  if (str.length === 2) return str[0] === str[1];
  if (
    str[0] === str[str.length - 1] &&
    isPalindrome(str.slice(1, str.length - 1))
  )
    return true;
  return false;
}

console.log('isPalindrome("ada")', isPalindrome("ada"));
console.log('isPalindrome("adda")', isPalindrome("adda"));
console.log('isPalindrome("awesome")', isPalindrome("awesome"));
console.log('isPalindrome("foobar")', isPalindrome("foobar"));
