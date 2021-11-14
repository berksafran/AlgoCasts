// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// SOLUTION:
function reverse(str) {
  // 1) Convert string to Array - split()
  // 2) Reverse Array items - reverse()
  // 3) Convert Array to string - join()
  // HINT! You can write the methods as chain.

  debugger;
  return str.split("").reverse().join("");
}

reverse("asdf")

// ALTERNATIVE SOLUTION - 1 / "for" loop
function reverseAlt1(str) {
  // 1) Create an empty string called "reversed"
  // 2) Build a "for" loop for each chars.
  //    - Take the char and add it to the beginning of "reversed" var.
  // 3) Return the variable "reversed"

  let reversed = "";

  // FOR LOOP - 1
  for (const char of str) {
    reversed = char + reversed;
  }

  // FOR LOOP - 2
  //   for (let i = 0; i < str.length; i++) {
  //     reversed = str[i] + reversed
  //   }

  return reversed;
}

// ALTERNATIVE SOLUTION - 2 / Array.reduce()
function reverseAlt2(str) {
  // 1) Convert string to Array
  // 2) Return Array.reduce() method that allows to give output as a string.
  // HINT! No need to add "initial value" on reduce() method.

  return str.split("").reduce((reversed, char) => char + reversed);
}

module.exports = reverse;
