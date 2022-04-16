// Counting Sort is fit for integer sorting, since it's function is to count the number of ocurrences of a certain value in a record
// and sort the record based on that count

const countingSort = (array) => {
    let count = []
    let max = Math.max(...array)
    let min = Math.min(...array)
    let j = 0

    for (let i = min; i <= max; i++) { // Loop from min to max value, creating indices for each value in the input array
        count[i] = 0 // Fill it with 0s for now
    }

    for (let i = 0; i < array.length; i++) {
        count[array[i]] += 1 // The input array's value is the index, and it's value is the number of times it appears on the input array (count)
    }

    for (let i = min; i <= max; i++) { // Loop through count array
        while (count[i] > 0) { // Loop through the same value until its count is over
            array[j++] = i
            count[i] -= 1 // Decrease count
        }
    }
}

const array = [2, 3, 2, 1, 5, 3, 2, 2, 1, 3, 1, 5]

countingSort(array)
console.log(array)