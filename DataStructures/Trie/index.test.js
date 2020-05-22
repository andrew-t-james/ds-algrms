const Trie = require('./index.js')

describe('Trie', () => {
  let trie

  beforeEach(() => {
    trie = new Trie()
  })

  describe('New Trie', () => {
    it('should insatiate a new Trie', () => {
      const actual = trie
      expect(actual).toMatchSnapshot()
    })
  })

  describe('Insert', () => {
    it('should insert a new word', () => {
      // setup
      const word = 'car'

      trie.insert(word)
      const actual = trie
      // expectation

      expect(actual).toMatchSnapshot()
    })

    it('should insert duplicate wordCount once', () => {
      // setup
      const word = 'car'

      trie.insert(word)
      trie.insert(word.toUpperCase())
      const actual = trie
      // expectation

      expect(actual).toMatchSnapshot()
    })

    it('should insert multiple wordCount', () => {
      // setup
      const word1 = 'car'
      const word2 = 'shoe'

      // expectation

      trie.insert(word1)
      trie.insert(word2)
      const actual = trie
      // expectation

      expect(actual).toMatchSnapshot()
    })

    it('should only insert letters as children when previous letter exists', () => {
      // setup
      const word1 = 'car'
      const word2 = 'cat'
      const word3 = 'cut'

      const expected = {
        root: {
          key: null,
          fullWord: null,
          child: {
            c: {
              key: 'c',
              fullWord: null,
              child: {
                a: {
                  key: 'a',
                  fullWord: null,
                  child: {
                    r: {
                      key: 'r',
                      fullWord: 'car',
                      child: {}
                    },
                    t: {
                      key: 't',
                      fullWord: 'cat',
                      child: {}
                    }
                  }
                },
                u: {
                  key: 'u',
                  fullWord: null,
                  child: {
                    t: {
                      key: 't',
                      fullWord: 'cut',
                      child: {}
                    }
                  }
                }
              }
            }
          }
        },
        wordCount: 3
      }

      trie.insert(word1)
      trie.insert(word2)
      trie.insert(word3)
      const actual = trie
      // expectation

      expect(actual).toEqual(expected)
    })
  })

  describe('Count', () => {
    it('should return a number of wordCount in trie', () => {
      // setup
      const word = 'car'

      const expected = 1

      trie.insert(word)
      trie.count()
      const actual = trie.wordCount
      // expectation

      expect(actual).toEqual(expected)
    })

    it('should return a number of wordCount when multiple wordCount are in trie', () => {
      const word1 = 'car'
      const word2 = 'dog'

      const expected = 2

      trie.insert(word1)
      trie.insert(word2)
      trie.count()
      const actual = trie.wordCount
      // expectation

      expect(actual).toEqual(expected)
    })
  })

  describe('Suggest', () => {
    it('should return an array based on a passed prefix', () => {
      // setup
      const wordList = ['cat', 'mat', 'bat', 'car', 'const']
      const prefix = 'ca'

      for (let word of wordList) {
        trie.insert(word)
      }

      const searchOne = trie.suggest(prefix)

      expect(searchOne).toEqual(['cat', 'car'])
      const searchTwo = trie.suggest('trash')
      expect(searchTwo).toEqual(null)
    })
  })

  describe('Delete', () => {
    it('should delete a whole word from the trie', () => {
      // setup
      const word = 'car'

      trie.insert(word)
      trie.delete(word)
      const actual = trie
      // expectation

      expect(actual).toMatchSnapshot()
    })

    it('should delete correct child nodes', () => {
      // setup
      const word1 = 'car'
      const word2 = 'cut'

      trie.insert(word1)
      trie.insert(word2)
      trie.delete(word2)
      const actual = trie
      // expectation

      expect(actual).toMatchSnapshot()
    })
  })

  describe('Populate', () => {
    it('should populate trie', () => {
      // setup
      const wordList = ['cat', 'mat', 'bat', 'car', 'const']

      trie.populate(wordList)

      expect(trie.count()).toEqual(5)
    })
  })
})
