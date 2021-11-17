// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  let chars = {};
  let result = 0
  let resultKey = ""
  for (const char of str) {
    if (!chars[char]) {
      chars[char] = 1;
    } else {
      chars[char]++;
    }
  }

  Object.entries(chars).forEach(item => {
      if (item[1] > result) {
          result = item[1]
          resultKey = item[0]
      }
  })

  return resultKey
}

console.log(maxChar("apple 1231111"))

module.exports = maxChar;
