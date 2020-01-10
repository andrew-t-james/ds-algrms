const { mergeSortedListsIterative } = require('.')

test('should merge two sorted link lists', () => {
  const listOne = {
    val: 1,
    next: {
      val: 2,
      next: {
        val: 4,
        next: null
      }
    }
  }

  const listTwo = {
    val: 1,
    next: {
      val: 3,
      next: {
        val: 4,
        next: null
      }
    }
  }

  const expected = {
    val: 1,
    next: {
      val: 1,
      next: {
        val: 2,
        next: {
          val: 3,
          next: {
            val: 4,
            next: {
              val: 4,
              next: null
            }
          }
        }
      }
    }
  }
  expect(mergeSortedListsIterative(listOne, listTwo)).toEqual(expected)
})

test('should merge two sorted link lists of different lengths', () => {
  const listOne = {
    val: 1,
    next: {
      val: 2,
      next: {
        val: 4,
        next: null
      }
    }
  }

  const listTwo = {
    val: 1,
    next: {
      val: 3,
      next: null
    }
  }

  const expected = {
    val: 1,
    next: {
      val: 1,
      next: {
        val: 2,
        next: {
          val: 3,
          next: {
            val: 4,
            next: null
          }
        }
      }
    }
  }
  expect(mergeSortedListsIterative(listOne, listTwo)).toEqual(expected)
})
