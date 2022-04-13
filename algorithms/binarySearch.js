// Binary Search is an algorithm used for finding targets in sorted lists of itens with the lowest possible number of tries (high efficiency)
// I'll think of other examples later, but let's implement it now
// It contrasts with linear search, which is an algorithm that goes trough each record in order before finding the right value

const linearSearch = (array, target) => {
    let count = 0

    for (let i = 0; i < array.length; i++) {
        count++;
        if (array[i] === target) {
            if (count > 1) {
                console.log('It took ' + count + ' tries with binary search') // Check how long it took to finish
            } else {
                console.log('It took ' + count + ' try with binary search')
            }
            return array[i]
        } else {
            continue; // If current index is not where target is located, simply move to the next item until target is found
        }
    }
    return -1 // Return if value is not present in the array
}

const binarySearch = (array, target) => {
    let min = 0
    let max = array.length - 1
    let guess
    let count = 0

    while (max >= min) {
        count++
        guess = Math.floor((max + min) / 2) // The guess is the min/max average rounded down

        if (array[guess] === target) {
            if (count > 1) {
                console.log('It took ' + count + ' tries with binary search') // Check how long it took to finish
            } else {
                console.log('It took ' + count + ' try with binary search')
            }
            return guess
        } else if (array[guess] < target) {
            min = guess + 1 // Guess was lower than target, so exclude every number below it from search
        } else {
            max = guess - 1 // Guess was higher than target, so exclude every number above it from search
        }
    }
    return -1 // Return if the value is not present in the array
}

const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

console.log('The target is at index ' + linearSearch(array, 10))
console.log('The target is at index ' + binarySearch(array, 10))

// Run 'node binarySearch.js' inside this directory to compare how many tries it takes to find the target in either algorithm
// Test different targets and array sizes