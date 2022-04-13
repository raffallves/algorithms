// Nodes are a basic data structure which contain data and one or more links to other nodes. 
// Nodes can be used to represent a tree structure or a linked list. 
// In such structures where nodes are used, it is possible to traverse from one node to another node.

class Node {
    constructor(value, nextNode=null) {
        this.value = value
        this.nextNode = nextNode
    }

    set setNextNode(nextNode) {
        this.nextNode = nextNode
    }

    get getNextNode() {
        return this.nextNode
    }

    get getValue() {
        return this.value
    }
}

export default Node