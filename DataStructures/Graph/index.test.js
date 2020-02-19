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
})
