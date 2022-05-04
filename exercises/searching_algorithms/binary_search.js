// BinarySearch basic function implementation

function BinarySearch(arr, elem) {
  let start = 0;
  let end = arr.length - 1;
  let middle = Math.floor((start + end) / 2); // Save from comma.

  // Eğer istenilen sayı loop dışındaysa, start, end'in sağına geçer.
  // Bu durumda, aşağıdaki while loop sonsuz kez döner. Bu sebeple aşağıdaki condition'a
  // start <= end 'i ekledik.
  while (arr[middle] !== elem && start <= end) {
    if (elem < arr[middle]) end = middle - 1;
    else start = middle + 1;

    middle = Math.floor((start + end) / 2);
  }
  return arr[middle] === elem ? middle : -1;
}

console.log(BinarySearch([2, 5, 6, 9, 13, 15, 28], 15));
console.log(BinarySearch([2, 5, 6, 9, 13, 15, 28], 6));
console.log(BinarySearch([2, 5, 6, 9, 13, 15, 28], 50));
