// linearSearch([10,15,20,30], 15) // 1

function linearSearch(arr, num) {
  if (!arr.length || !arr) return -1;

  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    if (element === num) return i;
  }
  return -1;
}

console.log(linearSearch([10, 2, 3, 4, 81, 90, 15, 20, 30], 15));
console.log(linearSearch([100],200))
console.log(linearSearch([],200))

// Time comp. -> O(N)
// Space comp. -> O(1)