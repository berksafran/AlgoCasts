// recursiveRange(6) // 21 --> 6 + 5 + 4 + 3 + 2 + 1
// recursiveRange(10) // 55 --> 10 + 9 + 8 + 7 + 6 + 5 + 4 + 3 + 2 + 1

function recursiveRange(num) {
  if (num === 1) return 1;
  return num + recursiveRange(num - 1);
}

console.log('recursiveRange(6)', recursiveRange(6))
console.log('recursiveRange(10)', recursiveRange(10))