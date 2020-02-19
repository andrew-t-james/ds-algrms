const LinkedList = require('../LinkedList')

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
}

module.exports = Graph
