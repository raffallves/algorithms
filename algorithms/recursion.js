// Recursion algorithms are basically functions that call itself in order to solve problems from the smallest scale upwards
// Usually you have a base case that you can solve directly, and more complex cases (recursive cases) that you need to break down first
// You use the solution of the smallest problem to solve the larger problem

// The function below illustrates it by calculating the factorial (n!) of a given number n

const factorial = (n) => {
    if (n === 0) { // Base case
        return 1
    }

    return factorial(n - 1) * n //  Recursive case
}

console.log(factorial(0))
console.log(factorial(5))
console.log(factorial(10))

// Run 'node recursion.js' inside this directory to check that it does indeed work for all positive integers
// Test different kinds of (positive) integers

// Another example, checking for if a string is a palindrome (spelled the same forwards and backwards)

const isPalindrome = (str) => {
    const firstCharacter = (str) => { // Utility function for getting the first character of the string
        return str.slice(0, 1)
    }

    const lastCharacter = (str) => { // Utility function for getting the last character of the string
        return str.slice(-1)
    }

    const middleCharacters = (str) => { // Utility function for getting the middle characters of the string
        return str.slice(1, -1)
    }

    if (str.length === 0 || str.length === 1) { // First base case (blank space or single letter is obviously read the same in either direction)
        return true
    } else if (firstCharacter(str) !== lastCharacter(str)) { // Second base case (check if first and last letters are the same)
        return false
    }

    return isPalindrome(middleCharacters(str)) // Recursive case (repeat for the middle characters until it reaches a base case)
}

console.log(isPalindrome("a"))
console.log(isPalindrome("rotor"))
console.log(isPalindrome("emerson"))

// Run 'node recursion.js' inside this directory to check that it does indeed work
// Test different kinds of strings

// One more example: power function using recursion (yes, I know Js has it's own version of the power operation)

const power = (x, n) => { // Warning: know your math before trying to understand this
    const isEven = (n) => {
        return n % 2 === 0
    }

    const isOdd = (n) => {
        return !isEven(n)
    }

    if (x === 1 || n === 0) { // Base case
        return 1
    } else if (n < 0) { // First recursive case
        return 1 / power(x, -n)
    } else if (isOdd(n)) { // Second recursive case
        return power(x, n - 1) * x
    } else if (isEven(n)) { // Third recursive case
        const result = power(x, n / 2)
        return result * result
    }
}

console.log(power(2, 1))
console.log(power(2, -2))
console.log(power(2, 2))
console.log(power(2, 3))

// Run 'node recursion.js' inside this directory to check that it does indeed work
// Test different kinds of numbers

// Use memoization to improve recursion algorithm's efficiency (memory space vs execution time trade-off)