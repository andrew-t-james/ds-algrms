// Implement the function reverseK(queue, k) which takes a queue and a number “k” as input and reverses the first “k” elements of the queue.
function reverseK(queue, n) {
  let count = 1
  const listToReverse = []
  const rest = []

  if (queue.isEmpty) return 'Empty queue'

  while (queue.items.length) {
    if (count > n) {
      rest.push(queue.dequeue())
    } else {
      listToReverse.push(queue.dequeue())
    }
    count++
  }

  const itemsToQueue = [...listToReverse.reverse(), ...rest]

  for (let q of itemsToQueue) {
    queue.enqueue(q)
  }

  return queue.items
}

module.exports = { reverseK }
