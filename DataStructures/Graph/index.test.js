const Graph = require('.')

describe('Graph', () => {
  test('should add edges to graph', () => {
    const graph = new Graph(4)
    expect(graph.vertices).toBe(4)
    graph.addEdge(0, 1)
    graph.addEdge(0, 2)
    graph.addEdge(1, 3)
    graph.addEdge(2, 4)
    const expected = [
      {
        head: {
          data: 2,
          next: {
            data: 1,
            next: null
          }
        }
      },
      {
        head: {
          data: 3,
          next: null
        }
      },
      {
        head: {
          data: 4,
          next: null
        }
      },
      { head: null }
    ]

    expect(graph.list).toEqual(expected)
  })

  test('should search using BFS traversal technique', () => {
    const graph = new Graph(5)
    graph.addEdge(0, 1)
    graph.addEdge(0, 2)
    graph.addEdge(1, 3)
    graph.addEdge(1, 4)

    expect(graph.BFSearch(0)).toBe('02143')
  })

  test('should search using DFS traversal technique', () => {
    const graph = new Graph(5)
    graph.addEdge(0, 1)
    graph.addEdge(0, 2)
    graph.addEdge(1, 3)
    graph.addEdge(1, 4)

    expect(graph.DFSearch(0)).toBe('01342')
  })

  test('should detect cycle in Graph', () => {
    const graph = new Graph(5)
    graph.addEdge(0, 1)
    graph.addEdge(0, 2)
    graph.addEdge(1, 3)
    graph.addEdge(1, 4)

    expect(graph.detectCycle(0)).toBe(false)

    graph.addEdge(1, 0)

    expect(graph.detectCycle(0)).toBe(true)
  })
  test('should search using DFS traversal technique', () => {
    const graph = new Graph(5)
    graph.addEdge(0, 1)
    graph.addEdge(0, 2)
    graph.addEdge(1, 3)
    graph.addEdge(1, 4)

    expect(graph.DFSearch(0)).toBe('01342')
  })

  test.only('should find mother vertex in Graph', () => {
    const graph = new Graph(5)
    expect(graph.findMotherVertex(0)).toBe(-1)

    graph.addEdge(0, 1)
    graph.addEdge(0, 2)
    graph.addEdge(1, 3)
    graph.addEdge(1, 4)

    expect(graph.findMotherVertex(0)).toBe(5)

    const graph2 = new Graph(3)
    expect(graph2.findMotherVertex(0)).toBe(-1)

    graph2.addEdge(0, 1)
    graph2.addEdge(1, 2)
    graph2.addEdge(0, 1)

    expect(graph2.findMotherVertex(0)).toBe(-1)
  })
})

/**
 list: [
  {
    head: {
      data: 2,
      next: {
        data: 1,
        next: null
      }
    }
  },
  {
    head: {
      data: 4,
      next: {
        data: 3,
        next: null
      }
    }
  },
  {
    "head": {
      data: 8,
      next: {
        null
      }
    }
  },
  {
    head: null
  }
]
*/
