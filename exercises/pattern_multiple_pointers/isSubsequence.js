/**
 * Multiple Pointers Exercise
 *
 * isSubsequence - Given two strings str1 and str2, find if str1 is a subsequence of str2.
 * A subsequence is a sequence that can be derived from another sequence by deleting some elements
 * without changing the order of the remaining elements (source: wiki). The expected time complexity is linear.
 */

// "sing", "sting" = true
// "hello", "hello world" = true
// "abc", "acb" = false (order matters)

function isSubsequence(str1, str2) {
  if (!str1.length || !str2.length) return false
    let i = 0;
  for (let j = 0; j < str2.length; j++) {
    if (str1[i] === str2[j]) {
      // increase i and j
      i++;
    }
  }

  return str1.length === i;
}

console.log(isSubsequence("hello", "hello world"));
console.log(isSubsequence("abc", "acb"));
console.log(isSubsequence("sing", "string"));
console.log(isSubsequence("sing", ""));
console.log(isSubsequence("", "sting"));
