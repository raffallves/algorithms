// Merge Sort is a divide-and-conquer algorithm that relies on recursion (division into subproblems and establishment of base cases)
// The idea here is to divide the data to be sorted into smaller sets, sort the smallers sets (simpler operation) and combine them back again
// The process goes like: 1. Divide 2. Conquer 3. Combine

const mergeSort = (array, p, r) => {
    const merge = (array, p, q, r) => { // Function responsible for the combine step, where the sorting happens
        let lowHalf = [] // Array for containing the left half of the large array
        let highHalf = [] // Array for containing the right half of the large array

        let k = p // Variable for traversing large array
        let i // Variable for traversing left half
        let j // Variable for traversing right half

        for (i = 0; k <= q; k++, i++) {
            lowHalf[i] = array[k] // Copy left half values into its container
        }
        for (j = 0; k <= r; k++, j++) {
            highHalf[j] = array[k] // Copy right half values into its container
        }
        // Reset variables
        k = p
        i = 0
        j = 0

        while (i < lowHalf.length && j < highHalf.length) { // Loop through the subarrays, copying the smallest value back into the large array until one of them is done
            if (lowHalf[i] < highHalf[j]) {
                array[k] = lowHalf[i]
                i++
                k++
            } else {
                array[k] = highHalf[j]
                j++
                k++
            }
        }
        // Copy all the values from the remaining array, whichever one it is
        while (i < lowHalf.length) { 
            array[k] = lowHalf[i]
            i++
            k++
        }

        while (j < highHalf.length) {
            array[k] = highHalf[j]
            j++
            k++
        }
    }

    if (p >= r) { // Base case (0 or 1)
        return
    }

    const q = Math.floor((p + r) / 2) // Find the middle point (q) in the large array by getting the rounded down average of the indexes
    mergeSort(array, p, q) // Recursively merge first half of the array ([p ... q]) until it reaches the base case
    mergeSort(array, q+1, r) // Recursively merge second half of the array ([q+1 ... r]) until it reaches the base case
    merge(array, p, q, r) // Use merge function declared above to sort the divided array and combine it back into the sorted large array
}

let array = [5, 8, -1, 3, 22, 0, 4, 9, 11]
mergeSort(array, 0, array.length - 1)
console.log(array)

// Run 'node mergeSort.js' inside this directory to check that it does indeed work
// Test different kinds of (numbers) arrays