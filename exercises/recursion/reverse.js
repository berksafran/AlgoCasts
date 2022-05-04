// reverse("awesome") // "emosewa"

function reverseString(str, index) {
  if (str.length + 1 === index) return "";
  return str[str.length - index] + reverseString(str, index + 1);
}

function reverse(str) {
  const reversedStr = reverseString(str, 1);
  return reversedStr;
}

console.log('reverse("awesome")', reverse("awesome"));
console.log('reverse("berk")', reverse("berk"));
