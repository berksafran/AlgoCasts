// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

// function chunk(array, size) {
//   let chunksArray = []; // [[1]]

//   for (const element of array) {
//       const lastElement = chunksArray[chunksArray.length - 1]

//       if(!lastElement || lastElement.length === size) {
//           chunksArray.push([element])
//       } else {
//           lastElement.push(element)
//       }
//   }

//   return chunksArray
// }

function chunk(array, size) {
  let chunkedArray = [];
  let index = 0;

  while (index < array.length) {
    const chunk = array.slice(index, index + size);
    chunkedArray.push(chunk)
    index += size 
  }

  return chunkedArray
}

module.exports = chunk;
