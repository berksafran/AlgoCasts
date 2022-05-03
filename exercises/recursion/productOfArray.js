// productOfArray([1,2,3]) // 6
// productOfArray([1,2,3,10]) // 60

function productOfArray(arr) {
  const multiple = (index) => {
    if (index === 0) return arr[0];
    return arr[index] * multiple(index - 1);
  };

  return multiple(arr.length - 1);
}

console.log("productOfArray([1,2,3])", productOfArray([1, 2, 3]));
console.log("productOfArray([1,2,3,10])", productOfArray([1, 2, 3, 10]));