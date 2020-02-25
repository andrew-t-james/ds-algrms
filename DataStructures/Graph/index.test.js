const Graph = require('.')

describe('Graph', () => {
  test('should add edges to graph', () => {
    const graph = new Graph(4)
    expect(graph.vertices).toBe(4)
    graph.addEdge(0, 1)
    graph.addEdge(0, 2)
    graph.addEdge(1, 3)
    graph.addEdge(2, 4)
    // console.log('graph:', graph.list[0].head)
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
