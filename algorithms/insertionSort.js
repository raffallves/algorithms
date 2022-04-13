// While another sorting algorithm (providing the same practical use as the others), this works a little differently
// Instead of swapping each record, you actually slide them around and insert the smallest values to the left until it is all sorted out

// The algorithm sorts the subarray on the right, relative to the one on the left
// It starts with the smallest subarray possible, which is the first index of the large array (obviously already sorted relative to itself)
// Then it moves on to the next index, and if the value there is smaller than the ones on previous indexes, it is inserted behind all the ones bigger than it to left
// For this to be possible, the values to the left of it have to slide to the right (by way of copying them to next position, starting from right to left)

const insertionSort = (array) => {
    const insert = (array, rightIndex, value) => { // Function that sorts the subarray on the right, relative to the one on the left
        let insertionIndex // Index where the value will inserted (position where it is bigger than the ones on the left and smaller than the ones on the right)
        for (let i = rightIndex; i >= 0 && array[i] > value; i--) { // Loop from right to left, comparing the value to be inserted to the current index
            array[i + 1] = array[i] // If the value to the left is bigger, slide it one position to the right (by copying it)
            insertionIndex = i
        }
        
        array[insertionIndex] = value; // The value then gets inserted in the place where the last copying took place (to the left of the last value bigger than it)
    }

    for (let i = 0; i < array.length - 1; i++) { // Loops through the entire array until it is sorted
        if (array[i+1] === undefined) { // Figure this out
            break;
        }

        insert(array, i, array[i+1])
    }
}

const array = [1, 0, -6, 5, 7, 8, 11, 3]
const array2 = [5, 2, 1, 3, 2, 6, 4, 0, -6, -5, -1]

insertionSort(array)
insertionSort(array2)

console.log(array)
console.log(array2)

// Run 'node insertionSort.js' inside this directory to check that it does indeed work
// Test different kinds of (numbers) arrays
// Try to figure out why there is an undefined number always to the right of it by the end