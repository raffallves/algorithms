// Trees are a data structure composed of nodes used for storing hierarchical data. Each tree node typically stores a value and references to its child nodes.
// A tree node contains a value, and can also include references to one or more additional tree nodes which are known as “children”.

// Trees can be wide, meaning that each node has many children.
// And trees can be deep, meaning that there are many parent-child connections with few siblings per node.

// In a binary search tree, parent nodes can have a maximum of two children. These children are called the “left child” and the “right child”.
// A binary search tree requires that the values stored by the left child are less than the value of the parent, and the values stored by the right child are greater than that of the parent.

// The topmost node of a tree is called the “root”, and each node (with the exception of the root node) is associated with one parent node.
// Likewise, each node can have an arbitrary number of child nodes.

class TreeNode {
    constructor(value) {
        this.value = value // data
        this.children = [] // references to other nodes
    }

    addChild(childNode) {
        // Creates parent-child relationship
        console.log('Adding ' + childNode.value)
        this.children.append(childNode)
    }

    removeChild(childNode) {
        // Removes parent-child relationship
        console.log('Removing ' + childNode.value + ' from ' + this.value)
        this.children = [/* child for child in self.children 
        if child is not child_node */] // -> this is python, figure out how to convert to javascript
    }

    traverse() {
        // Moves through each node referenced from self downwards
        const nodesToVisit = [this] // also figure if this works on js
        while (nodesToVisit.length > 0) {
            currentNode = nodesToVisit.pop()
            console.log(currentNode.value)
            nodesToVisit += currentNode.children
        }
    }
}