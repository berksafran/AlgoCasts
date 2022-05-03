// fib(4) = 3
// fib(10) = 55

// fibonacci => 1,1,2,3,5,8 ...

function fib(num) {
  const fibonacciArray = [1, 1];
  const fibonacciFunc = (index) => {
    if (fibonacciArray.length === num) return;
    fibonacciArray[index] =
      fibonacciArray[index - 2] + fibonacciArray[index - 1];
    fibonacciFunc(index + 1);
  };
  fibonacciFunc(2);
  return fibonacciArray[num - 1];
}

// Alternative Solution
function fibAlt(n){
    if (n <= 2) return 1;
    return fib(n-1) + fib(n-2);
}

console.log("fib(4)", fib(4));
console.log("fib(10)", fib(10));
console.log("fib(35)", fib(35));
