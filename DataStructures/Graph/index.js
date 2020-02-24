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

    // Traverse while queue is not empty
    while (queue.isEmpty == false) {
      // Dequeue a vertex/node from queue and add it to result
      let currentNode = queue.dequeue()
      result += currentNode
      // Get adjacent vertices to the current_node from the list,
      // and if they are not already visited then enqueue them in the Queue
      let temp = this.list[currentNode].getHeadNode
      while (temp !== null) {
        if (visited[temp.data] === false) {
          queue.enqueue(temp.data)
          visited[temp.data] = true
        }
        temp = temp.next
      }
    }

    return result
  }
}

module.exports = Graph
