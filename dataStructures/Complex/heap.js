// Heaps are typically implemented with a data structure such as an array or Python list. These sequential structures allow access to elements in a particular order which is key to efficient use of heaps.
// Although binary trees are helpful for understanding the relationships between nodes of a heap, implementation using a tree is less efficient for storage and retrieval of elements.

// When a new element is added to a heap, if heap properties are violated, the new child must swap with its parent until both child and root properties are restored.
// This process is called heapifying up, because of the upwards movement of the new element in this restorative process.

// A proper representation of a heap is a complete binary tree, which is a tree whose nodes have at most two children, and whose levels are filled completely from left to right (with no gaps in children).
// It’s possible for the last level to be semi-completely filled, but all of its nodes are as far left as possible.

// The basis of a Heap class in Python is the implementation of a heap with a list, based on the parent-child relationships that a binary tree structure portrays.
// The class also consists of multiple methods that provide the functionality to construct these parent-child relationships in the list, add elements, remove the root element, and heapify in both directions when necessary.

class MinHeap {
    constructor() {
        this.heapList = [null]
        this.count = 0
    }

    heapifyUp() {
        // Implements heapify up
    }

    heapifyDown() {
        // Implements heapify down
    }

    retrieveMin() {
        // Replaces root with last child, calls .heapify-down()
    }

    add() {
        // Adds new element to heap_list, calls heapify_up()
    }

    getSmallerChildIdx(idx) {
        // Returns the child a parent should swap with
    }
}