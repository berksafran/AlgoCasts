// capitalizeFirst(['car','taco','banana']); // ['Car','Taco','Banana']

function capitalizeFirst(arr) {
  if (arr.length < 1) return [];
  let firstItem = arr.shift();
  firstItem = firstItem[0].toUpperCase() + firstItem.substring(1);
  return [firstItem, ...capitalizeFirst(arr)];
}

console.log(capitalizeFirst(["car", "taco", "banana"]));
console.log(capitalizeFirst(["car", "taco", "banana", "berk"]));
