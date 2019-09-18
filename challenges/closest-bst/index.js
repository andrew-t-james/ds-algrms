const possibleClosest = {}

function findClosestValueInBst(tree, target) {
  const value = tree.value
  const left = tree.left
  const right = tree.right
  if (value === target) return value

  if (left) {
    findClosestValueInBst(left, target)
    possibleClosest[left.value] = Math.abs(target - left.value)
  }

  if (right) {
    findClosestValueInBst(right, target)
    possibleClosest[right.value] = Math.abs(target - right.value)
  }

  let min = Infinity
  let closest
  Object.keys(possibleClosest).forEach(entry => {
    if (possibleClosest[entry] < min) {
      min = possibleClosest[entry]
      closest = entry
    }
  })

  return Number(closest) // convert key from string to Num
}
