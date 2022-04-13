// Quick Sort is yet another divide-and-conquer algorithm, the difference being that this one gets recursive at division time
// You choose a record of the data (usually the rightmost) and use it as a pivot, partitioning anything lower than it on to its left and higher to its right
// Then you recursively do that until you reach the base case (0 or 1 itens) and merge than all back up
// The process goes like: 1. Divide 2. Conquer 3. Combine

const quickSort = (array, p, r) => {
    const partition = (array, p, r) => { // Function responsible for the divide step, where the sorting happens
        const swap = (array, firstIndex, secondIndex) => { // Utility function for swapping places of two itens in an array
            let temp = array[firstIndex]
            array[firstIndex] = array[secondIndex]
            array[secondIndex] = temp
        }

        let i = p; // Variable for traversing the large array
        let q = p; // Variable for storing the place where the pivot will swapped to (exactly between elements smaller and bigger than it)

        for (i; i < r; i++) { // Loop through the large array, swapping elements smaller than the pivot so that they end behind q
            if (array[i] < array[r]) {
                swap(array, q, i)
                q++ // Bring q forward so that further elements fall into the right place (in front of the smaller one) and so that the pivot gets correctly placed
            }
        }
        swap(array, q, r) // Swapp pivot with value at index q, making it so that smaller elements are behind it and bigger elements in front of it
        return q // Return index where pivot is located
    }

    if (p >= r) { // Base case (0 or 1)
        return
    }

    const q = partition(array, p, r) // Use partition function declared above to divide the array into two and get the pivot's index
    quickSort(array, p, q-1) // Recursively sort first half
    quickSort(array, q+1, r) // Recursively sort second half
    // Notice that the pivot index itself is no utilised anymore, because it is already sorted, so by the end they'll all be sorted
}

const array = [7, -9, 6, 1, 0, -2, 3, 4, 11]
quickSort(array, 0, array.length - 1)
console.log(array)

// Run 'node quickSort.js' inside this directory to check that it does indeed work
// Test different kinds of (numbers) arrays