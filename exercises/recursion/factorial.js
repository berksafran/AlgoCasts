// Factorial by using recursion functions.

function factorial(num) {
    if (num === 0) return 1
    return num * factorial(num - 1)
    
    // Simulation of recursion:
    // f(2) => 2 * f(1)
    // f(2) => 2 * 1 * f(0)
    // f(2) => 2 * 1 * 1
}

console.log('factorial(2)', factorial(2))
console.log('factorial(4)', factorial(4))
console.log('factorial(5)', factorial(5))