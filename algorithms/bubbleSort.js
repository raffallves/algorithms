// Bubble Sort is a very simple sorting algorithm, where the data record is iterated over, swapping bigger and smaller values until it is sorted

const bubbleSort = (array) => {
    let checked // Variable for exiting the loop
    do {
        checked = false // If this remains false after whole iteration, loop ends (i.e. array is sorted)
        for (let i = 0; i < array.length; i++) { // Iterate over every value in the array
            if (array[i] > array[i+1]) { // Check which side is bigger, and swap if left is bigger than right
                let temp = array[i]
                array[i] = array[i+1]
                array[i+1] = temp
                checked = true // Always set to true after a swap, so that the loop keeps running until every value is sorted
            }
        }
    } while (checked)
}

const array = [8, 9, 6, -1, 0, 7, 5, 2]

bubbleSort(array)
console.log(array)

// Run 'node bubbleSort.js' inside this directory to see that it works indeed
// Test different (numbers) arrays