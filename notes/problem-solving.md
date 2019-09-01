# Problem Solving

## Understanding the problem
 1. Can I restate the problem in my own way?
 1. What are the inputs that go into the problem?
 1. What are the outputs that should come from the solution to the problem?
 1. Can the outputs bet determined from the inputs? In other words do I have enough information to solve the problem?
 (Quite possible that you are not able to solve the problem at this point but worth considering at this point.)
 1. How should I label the important pieces of data that are part of the problem?

```js
//======================================================================
// Write a function that takes two numbers and returns their sum
//======================================================================

// 1. Restate the problem in my own words.
// Write a function that takes two numbers as inputs and returns their sum

// 2. What are the inputs?
// Are we dealing with two whole numbers, floating point numbers, strings, undefined inputs?

// 3. what are the outputs?
// Given the type of input what should the output be?

// 4. Given the inputs are both defined and they are of same type, potentially the return value would be of the same type.
// What if the inputs are undefined or not of the same type?

// 5. How should I label the important pieces?
function add(a, b) {
  return a + b
}
```

## Explore examples

```js
//==========================================================================================
// Write a function that takes a string and returns counts of each character in the string.
//==========================================================================================

charCount('aaaa') // { a: 4 }
charCount('aabb') // { a: 2, b: 2 }
charCount('abc')  // { a: 2, b: 2, c: 3 }
// more complex examples
charCount('Hello hi') // how should case be handled?
// what if nothing was passed?
charCount('') // what should we return when nothing is passed?
```


## Break it down

```js
// It was "decided" casing is not important for this problem and that numbers would be counted as well.
function charCount(str) {
  const sanitized = str.toLowerCase().replace(' ', '')
  // make object to return
  const charMap = {}
  // loop over string
  for (let char of sanitized) {
    // have we seen this char? if not add it to the map and set the count
    if (!charMap[char]) {
      charMap[char] = 1
    } else {
      // otherwise increment the count
      charMap[char] += 1
    }
  }

  return charMap
}
```


## Solve and simplify

```
Can't solve the problem at this point, solve the smallest portion of the problem you can then work your way out.
```


## Look back and refactor

```
Look for optimizations at this point. Can it be refactored to be more readable/written for better performance?
```