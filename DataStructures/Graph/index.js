const LinkedList = require('../LinkedList')
const Queue = require('../Queue')
const Stack = require('../Stack')

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

  BFSearch(source) {
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

  DFSearch(source) {
    let result = ''
    let visited = []
    let stack = new Stack()
    let i = 0

    while (i < this.vertices) {
      visited.push(false)
      i++
    }

    stack.push(source)
    visited[source] = true

    while (stack.isEmpty === false) {
      let current = stack.pop()
      result += current
      let temp = this.list[current].head
      while (temp !== null) {
        if (visited[temp.data] === false) {
          stack.push(temp.data)
        }
        temp = temp.next
      }
      visited[current] = true
    }
    return result
  }

  detectCycle(source) {
    let visited = []
    let stack = new Stack()
    let i = 0

    while (i < this.vertices) {
      visited.push(false)
      i++
    }

    stack.push(source)
    visited[source] = true

    while (stack.isEmpty === false) {
      let current = stack.pop()
      let temp = this.list[current].head
      while (temp !== null) {
        if (visited[temp.data] === false) {
          stack.push(temp.data)
        } else {
          return true
        }
        temp = temp.next
      }
      visited[current] = true
    }
    return false
  }

  findMotherVertex(source) {
    const dfs = this.DFSearch(source)
    if (this.vertices === dfs.length) {
      return dfs.length
    }
    return -1
  }
}

module.exports = Graph
