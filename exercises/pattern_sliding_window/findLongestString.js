/**
 * Sliding Window Exercise
 *
 * Write a function called findLongestSubstring,
 * which accepts a string and returns the length of the longest substring with all distinct characters.
 */

// findLongestSubstring("") // 0
// findLongestSubstring("rithmschool") // 7

// O(N)
function findLongestSubstring(str) {
  if (!str.length) return 0;

  let charMap = {};
  let counter = 0;

  // first order all chars
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (!charMap[char]) counter++;
  }
}

console.log(findLongestSubstring("rithmschool"));
console.log(""["".length - 1]);
