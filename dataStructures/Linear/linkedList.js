// A linked list is a linear data structure where elements are not stored at contiguous location. Instead the elements are linked using pointers.
// In a linked list data is stored in nodes and each node is linked to the next and, optionally, to the previous.

import Node from '../node.js'

class LinkedList {
    constructor(value=null) {
        this.headNode = new Node(value)
    }

    get getHeadNode() {
        return this.headNode
    }

    set newHeadNode(value) {
        const newNode = new Node(value)
        newNode.setNextNode(this.headNode)
        this.headNode = newNode
    }

    /* Test below */

    // stringifyList() {
    //     const stringList = ''
    //     const currentNode = this.getHeadNode()
    //     while (currentNode) {
    //         if (currentNode.getValue() != null || currentNode.value != undefined) {
    //             stringList + currentNode.getValue().toString() + '/n'
    //         }
    //         currentNode = currentNode.getNextNode()
    //     }

    //     return stringList
    // }

    // removeNode(value) {
    //     const currentNode = this.getHeadNode()
    //     if (currentNode.getValue() === value) {
    //         this.headNode = currentNode.getNextNode()
    //     } else {
    //         while (currentNode) {
    //             const nextNode = currentNode.getNextNode()
    //             if (nextNode.getValue() === value) {
    //                 currentNode.setNextNode(nextNode.getNextNode())
    //                 currentNode = null
    //             } else {
    //                 currentNode = nextNode
    //             }
    //         }
    //     }
    // }
}