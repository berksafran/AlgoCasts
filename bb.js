// var calPoints = function (ops) {
//     let resultArr = [];
//     let result = 0;
//     if (ops.length < 2) return Number(ops[0])
//     ops.forEach(item => {
//         const lastItem = resultArr[resultArr.length - 1]
//         if (item === "C") {
//             resultArr.pop()
//             return
//         }
//         if (item === "D") {
//             resultArr.push(lastItem * 2)
//             return
//         }
//         if (item === "+") {
//             resultArr.push(lastItem + resultArr[resultArr.length - 2])
//             return;
//         }
//         resultArr.push(Number(item))
//     })

//     resultArr.forEach(item => result += item)
//     return result
// }

// console.log(calPoints(["5","2", "C", "D", "+"]))
// console.log(calPoints(["5","-2", "4", "C", "D", "9", "+", "+"]))

var longestCommonPrefix = function (strs) {
  let result = "";
  let shortestWord = "";

  if (strs.includes("")) return "";
  if (strs.length < 2) return strs[0];

  strs.forEach((str) => {
    if (str.length > shortestWord.length) {
      shortestWord = str;
    }
  });

  for (let i = 0; i < shortestWord.length; i++) {
    if (strs.every((str) => shortestWord[i] === str[i])) {
      result = result + shortestWord[i];
    } else {
      break;
    }
  }

  return result;
};

console.log(
  "longestCommonPrefix",
  longestCommonPrefix(["flower", "flower", "flower"])
);
