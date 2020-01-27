// Implement a function, reArrange(arr), which sorts the elements so that all the negative elements appear on the left and all positive elements appear at the right.

function reArrange(arr) {
  return [...arr.filter(n => n < 0), ...arr.filter(n => n >= 0)]
}

module.exports = { reArrange }
