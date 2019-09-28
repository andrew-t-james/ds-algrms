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

  return Number(closest) // convert key from string to int
}

function findClosestValueInBstTwo(tree, target, closest = Infinity) {
  if (tree === null) return closest

  if (Math.abs(target - closest) > Math.abs(target - tree.value)) {
    closest = tree.value
  }

  if (target < tree.value) {
    return findClosestValueInBstTwo(tree.left, target, closest)
  } else if (target > tree.value) {
    return findClosestValueInBstTwo(tree.right, target, closest)
  } else {
    return closest
  }
}

}

function findClosestValueInBstTwo(tree, target) {
  // check if tree/
}

module.exports = { findClosestValueInBst, findClosestValueInBstTwo }
