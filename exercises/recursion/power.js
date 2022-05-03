// Simulate Math.Pow(a,b) by using recursion functions.

function Power(a,b) {
    if (b === 0) return 1
    if (b === 1) return a
    return a * Power(a, b - 1)
}

console.log('Power(2,2)', Power(2,0))
console.log('Power(2,2)', Power(2,1))
console.log('Power(2,2)', Power(2,2))
console.log('Power(2,2)', Power(2,10))