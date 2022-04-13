// The basis of a Graph class in Python is the implementation of two classes, Graph and Vertex, which establish the essential functionality to create a variety of graphs.
// The Vertex class allows for storage of connecting vertices with a dictionary and adjustment of their edges as well.
// The Graph class builds upon the Vertex methods and allows addition of vertices and edges, setting the directionality of edges, and determining if a path exists between two vertices.

class Vertex {
    constructor(value) {

    }

    addEdge(vertex, weight=0) {

    }

    getEdges() {

    }
}

class Graph {
    constructor(directed = false) {

    }

    addVertex(vertex) {

    }

    addEdge(fromVertex, toVertex, weight=0) {

    }

    findPath(startVertex, endVertex) {
        
    }
}

// Other ways of representing graphs:

// Edge List
// Each inner array represents two vertices and the edge between them
// In undirected graphs the order of the vertices don't matter, but in directed graphs they do
// Caveat: you have to search the whole list (linear search) to find a single value
const edgeList = [[0,2], [1, 3], [2, 3], [2, 4], [3, 5], [4, 5]]

// Adjacency Matrix
// Value is 1 if there is an edge between row and column vertices, 0 if there's not
// Has a faster running time, but takes a disproportional amount of space
const adjMatrix = [
    [0, 0, 1, 0, 0, 0],
    [0, 0, 0, 1, 0, 0],
    [0, 0, 0, 1, 1, 0],
    [0, 0, 0, 0, 0, 1],
    [0, 0, 0, 0, 0, 1],
    [0, 0, 0, 0, 0, 0]
]

// Adjacency List
// Each value represents a vertex in list i, and list j represents the vertices it has edges with
// Takes more space (less than matrix though) and runs faster than edge list
const adjList = [
    [0, 1, 2, 3, 4, 5], // i
    [[2],[3],[3,4],[5],[5],[]] // j
]