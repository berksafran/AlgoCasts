// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
  const reversed = n.toString().split("").reverse().join("");
  console.log(`reversed`, reversed);
  console.log(`reversed`, parseInt(reversed));
  return parseInt(reversed) * Math.sign(n);
}

reverseInt(-10)

module.exports = reverseInt;
