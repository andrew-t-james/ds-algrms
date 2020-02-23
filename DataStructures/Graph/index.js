const LinkedList = require('../LinkedList')
const Queue = require('../Queue')

class Graph {
  constructor(vertices) {
    // Total number of vertices in the graph
    this.vertices = vertices
    // Defining a list which can hold LinkedLists equal to the number of vertices in the graph
    this.list = []
    // Creating a new LinkedList for each vertex/index of the list
    let i = 0
    while (i < vertices) {
      let temp = new LinkedList()
      this.list.push(temp)
      i++
    }
  }

  addEdge(source, destination) {
    this.list[source].insertAtHead(destination)
  }

  bfsSearch(source) {
    let result = ''
    let visited = []
    let queue = new Queue()
    let i = 0

    while (i < this.vertices) {
      visited.push(false)
      i++
    }

    queue.enqueue(source)
    visited[source] = true

    while (queue.isEmpty === false) {
      let currentNode = queue.dequeue()
      console.log('currentNode:', currentNode)

      while () {
        if () {
      // Visit the children
        }
      }
    }

    return result
  }
}

module.exports = Graph
