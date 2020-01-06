function convertToRoman(num) {
  let total = ''

  const map = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1
  }

  for (let i in map) {
    while (num >= map[i]) {
      total += i
      num -= map[i]
    }
  }

  return total
}

module.exports = { convertToRoman }
