// A Sorting algorithm is, as the name suggests, used to sort data in a specific order
// The Selection Sort, similar to a Linear Search, goes through each record in the data swapping them until it is all sorted out

const selectionSort = (array) => {
    const swap = (array, firstIndex, secondIndex) => { // Utility function for swapping the position of two itens 
        let temp = array[firstIndex] // Temporary variable for storing the first item in the operation (else it would be erased by the reassingment)
        array[firstIndex] = array[secondIndex]
        array[secondIndex] = temp
    }

    const indexOfMinimum = (array, startIndex) => { // Utility function for finding the index of the minimum value in an array
        let minIndex = startIndex // Start from the leftmost position
        let minValue = array[startIndex]

        for (let i = minIndex + 1; i < array.length; i++) { // Loop through array until the smallest value is found, and return its position
            if (array[i] < minValue) {
                minIndex = i;
                minValue = array[i]
            }
        }

        return minIndex
    }

    let minIndex

    for (let i = 0; i < array.length; i++) { // Swap the position of the current value with the smallest in the array (going forward)
        minIndex = indexOfMinimum(array, i)
        swap(array, i, minIndex)
    }
}

let array = [0, 5, -9, 8, -1, 20, 11, -6, 6]
selectionSort(array)
console.log(array)

// Run 'node selectionSort.js' inside this directory to check that it does indeed work
// Test different kinds of (numbers) arrays
// Maybe I'll add more sorting algorithms to this file in order to compare them, just like we did with binary and linear search