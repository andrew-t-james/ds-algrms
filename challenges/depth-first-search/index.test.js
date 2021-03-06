const GraphOfNodes = require('./')

const test1 = new GraphOfNodes('A')
test1.addChild('B').addChild('C')
test1.children[0].addChild('D')

const test2 = new GraphOfNodes('A')
test2
  .addChild('B')
  .addChild('C')
  .addChild('D')
  .addChild('E')
test2.children[1].addChild('F')

const test3 = new GraphOfNodes('A')
test3.addChild('B')
test3.children[0].addChild('C')
test3.children[0].children[0].addChild('D').addChild('E')
test3.children[0].children[0].children[0].addChild('F')

const test4 = new GraphOfNodes('A')
test4
  .addChild('B')
  .addChild('C')
  .addChild('D')
test4.children[0].addChild('E').addChild('F')
test4.children[2].addChild('G').addChild('H')
test4.children[0].children[1].addChild('I').addChild('J')
test4.children[2].children[0].addChild('K')

const test5 = new GraphOfNodes('A')
test5
  .addChild('B')
  .addChild('C')
  .addChild('D')
  .addChild('L')
  .addChild('M')
test5.children[0]
  .addChild('E')
  .addChild('F')
  .addChild('O')
test5.children[1].addChild('P')
test5.children[2].addChild('G').addChild('H')
test5.children[0].children[0].addChild('Q').addChild('R')
test5.children[0].children[1].addChild('I').addChild('J')
test5.children[2].children[0].addChild('K')
test5.children[4]
  .addChild('S')
  .addChild('T')
  .addChild('U')
  .addChild('V')
test5.children[4].children[0].addChild('W').addChild('X')
test5.children[4].children[0].children[1].addChild('Y').addChild('Z')

test('Test Case #1', function() {
  expect(test1.depthFirstSearch([])).toMatchObject(['A', 'B', 'D', 'C'])
})

test('Test Case #2', function() {
  expect(test2.depthFirstSearch([])).toMatchObject([
    'A',
    'B',
    'C',
    'F',
    'D',
    'E'
  ])
})

test('Test Case #3', function() {
  expect(test3.depthFirstSearch([])).toMatchObject([
    'A',
    'B',
    'C',
    'D',
    'F',
    'E'
  ])
})

test('Test Case #4', function() {
  expect(test4.depthFirstSearch([])).toMatchObject([
    'A',
    'B',
    'E',
    'F',
    'I',
    'J',
    'C',
    'D',
    'G',
    'K',
    'H'
  ])
})

test('Test Case #5', function() {
  expect(test5.depthFirstSearch([])).toMatchObject([
    'A',
    'B',
    'E',
    'Q',
    'R',
    'F',
    'I',
    'J',
    'O',
    'C',
    'P',
    'D',
    'G',
    'K',
    'H',
    'L',
    'M',
    'S',
    'W',
    'X',
    'Y',
    'Z',
    'T',
    'U',
    'V'
  ])
})
