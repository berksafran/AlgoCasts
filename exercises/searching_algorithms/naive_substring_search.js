// Naive Substring Searching

function substringSearch(longer, shorter) {
  let counter = 0;

  for (let i = 0; i < longer.length; i++) {
    for (let k = 0; k < shorter.length; k++) {
      const charLonger = longer[i + k];
      const charShorter = shorter[k];

      if (charLonger !== charShorter) break;
      if (k === shorter.length - 1) counter++;
    }
  }
  return counter;
}

console.log(substringSearch("lolie loled", "lol"));
console.log(substringSearch("lolie loled", "pop"));
