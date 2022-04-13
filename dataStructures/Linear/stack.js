// A stack is a data structure that follows a last in, first out (LIFO) protocol. 
// The latest node added to a stack is the node which is eligible to be removed first.

import Node from '../node.js'

class Stack {
    constructor(limit=1000) {
        this.topItem = null
        this.size = 0
        this.limit = limit
    }

    hasSpace() {
        return this.limit > this.size
    }

    isEmpty() {
        return this.size === 0
    }

    push(value) {
        if  (this.hasSpace()) {
            const item = new Node(value)
            item.setNextNode(this.topItem)
            this.topItem = item
            this.size += 1
        } else {
            console.log('Out of space')
        }
    }

    pop() {
        if (this.size > 0) {
            const itemToRemove = this.topItem
            this.topItem = itemToRemove.getNextNode()
            this.size -= 1
        } else {
            console.log('This stack is totally empty')
        }
    }

    peek() {
        if (this.size > 0) {
            return this.topItem.getValue()
        } else {
            console.log('Empty stack, bro')
        }
    }
}