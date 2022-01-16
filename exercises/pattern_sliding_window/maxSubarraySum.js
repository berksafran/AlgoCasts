/**
 * Sliding Window Pattern Exercise
 *
 * maxSubArraySum - You are given a one dimensional array that may contain both positive and negative integers,
 * find the sum of contiguous subarray of numbers which has the largest sum.
 */

// consecutive elements!!! it's important.

// maxSubArraySum([100,200,300,400], 2) // 700
// maxSubArraySum([2,3], 2) // null
// maxSubArraySum([-3,4,0,-2,6,-1], 2) // 5
//                    ----  
//                       j    ----  --> sliding window

function maxSubArraySum(arr, num) {
  let maxSum = 0;
  let tempSum = 0;
  if (num > arr.length || !arr.length) return null;

  // calculate the first sum of subarray.
  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }

  tempSum = maxSum

  // subarrays must be consecutive
  for (let j = num; j < arr.length; j++) {
    tempSum = tempSum - arr[j-num] + arr[j]
    maxSum = Math.max(tempSum,maxSum)
  }
  return maxSum
}

console.log(maxSubArraySum([100,200,300,400], 2))
