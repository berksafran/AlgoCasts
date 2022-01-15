/* 
    Frequency Pattern or Multiple Pattern Example
    
    areThereDuplicates -> Implement a function called, areThereDuplicates which accepts a variable number of arguments, 
    and checks whether there are any duplicates among the arguments passed in.
*/

// Solution - O(N)
function areThereDuplicates(...args) {
  let charMap = {};

  for (let val of args) {
    charMap[val] = (charMap[val] || 0) + 1;
  }

  for (let key in charMap) {
    if (charMap[key] > 1) return true;
  }

  return false;
}

console.log(areThereDuplicates(1, 2, "a", "b", 3, "a"));

// Other Solution - O(N)
// function areThereDuplicates() {
//   return new Set(arguments).size !== arguments.length;
// }

// Multiple Pattern Solution - O(N)
// function areThereDuplicates(...args) {
//     // Two pointers
//     args.sort((a,b) => a > b);
//     let start = 0;
//     let next = 1;
//     while(next < args.length){
//       if(args[start] === args[next]){
//           return true
//       }
//       start++
//       next++
//     }
//     return false
//   }

