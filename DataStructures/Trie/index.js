class Node {
  constructor(key = null) {
    this.key = key
    this.child = {}
    this.fullWord = null
  }
}

class Trie {
  constructor() {
    this.root = new Node()
    this.wordCount = 0
  }

  insert(word) {
    const lowerCasedString = this.lowerCaseString(word)
    const letters = [...lowerCasedString]
    let currNode = this.root

    while (letters.length) {
      let currentLetter = letters.shift()
      if (currNode.child[currentLetter]) {
        currNode = currNode.child[currentLetter]
      } else {
        let newNode = new Node(currentLetter)
        currNode.child[currentLetter] = newNode
        currNode = newNode
      }
    }

    if (!currNode.fullWord) {
      this.wordCount++
    }

    currNode.fullWord = lowerCasedString
  }

  suggest(prefix) {
    const lowerCasedString = this.lowerCaseString(prefix)
    const letters = [...lowerCasedString]
    let suggestions = []
    let currNode = this.root

    for (let currentLetter of letters) {
      if (!currNode.child[currentLetter]) {
        return null
      } else {
        currNode = currNode.child[currentLetter]
      }
    }

    const searchWords = node => {
      if (node.fullWord) {
        suggestions.push(node.fullWord)
      }

      for (let childNode in node.child) {
        searchWords(node.child[childNode])
      }
    }

    searchWords(currNode)
    return suggestions
  }

  lowerCaseString(word) {
    return word.toLowerCase()
  }

  delete(word) {
    let currNode = this.root
    const lowerCasedWord = this.lowerCaseString(word)
    const charList = [...lowerCasedWord]

    while (charList.length) {
      currNode = currNode.child[charList.shift()]
    }

    currNode.fullWord = null
    this.wordCount--
  }

  populate(wordList) {
    for (let word of wordList) {
      this.insert(word)
    }
  }

  count() {
    return this.wordCount
  }
}

module.exports = Trie
