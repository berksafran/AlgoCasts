/* 
    Multiple Pointers Exercise

    Given a sorted array of integers and a target average, determine if there is a pair of values in the array where the average of the pair equals the target average. 
    There may be more than one pair that matches the average target, but we just want the first pair.
*/

// Result => sumOfPairValues / 2 = targetAve

function averagePair(arr, targetAve) {
  if (!arr.length) return false;

  let start = 0;
  let end = arr.length - 1;

  // [---> <---]
  // [1,3,3,5,6,7,10,12,19], 8 
  //  x                  y => 10
  //  x               y    => 6,5

  while (start < end) {
    let ave = (arr[start] + arr[end]) / 2;
    if (targetAve === ave) {
      return true;
    } else if (ave < targetAve) {
      start++;
    } else {
      end--;
    }
  }

  return false;
}

console.log(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8));
