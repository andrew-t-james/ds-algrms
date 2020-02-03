const Queue = require('../../DataStructures/Queue')

function genBinNumbers(number) {
  let s1 = ''
  let s2 = ''
  const results = []
  const queue = new Queue()
  queue.enqueue('1')

  for (let i = 0; i < number; i++) {
    results.push(queue.dequeue())
    s1 = `${results[i]}0`
    s2 = `${results[i]}1`
    queue.enqueue(s1)
    queue.enqueue(s2)
  }

  return results
}

module.exports = { genBinNumbers }
