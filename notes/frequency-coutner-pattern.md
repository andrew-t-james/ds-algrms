# Frequency Counter Patterns

## Usually O(n) time

```js
//=================================================================
// Write a function called same which accepts two arrays as input
// the function return true if the corresponding value squared in
// the second array. The frequency musth be the same.
same([1, 2, 3], [4, 1, 9]) // true
same([1, 2, 3], [1, 9]) // false
same([1, 2, 1], [4, 4, 1]) // false must be the same frequency
//=================================================================
```
# NAIVE SOLUTION
```js
O(n²)
function same(arr1, arr2) {
  // if we don't have the same length we can immediately return
   if(arr1.length !== arr2.length) {
     return false
   }

   for(let i = 0; i < arr1.length; i++) {
     // when using indexOf it is basically the same as a second loop causing O(n²)
     let correspondingIndex = arr2.indexOf(arr1[i] ** 2)
     // check if arr[i] squared index is in the second array
     if(correspondingIndex === -1) { // correspondingIndex will be 0 if found
        return false
     }
     arr2.splice(arr1[i], 1) // remove the current index from the array to keep track of whe we have seen
     return true
   }
}

```

# MORE BETTER SOLUTION
```js
O(n)
function same(arr1, arr2) {
  // if we don't have the same length we can immediately return
   if(arr1.length !== arr2.length) {
     return false
   }
  let frequencyCount1 = {} // initialize empty object to keep track of count
  let frequencyCount2 = {}

  for(let val of arr1) {
    // if we have not seen frequencyCount1[val] initialize to zero and add 1
    // if we have seen frequencyCount1[val] add one to the value
    frequencyCount1[val] = (frequencyCount1[val] || 0) + 1
  }

  for(let val of arr2) {
    // if we have not seen frequencyCount2[val] initialize to zero and add 1
    // if we have seen frequencyCount2[val] add one to the value
    frequencyCount2[val] = (frequencyCount2[val] || 0) + 1
  }

  for(let key in frequencyCount1) {
    // if the current key squared is not present IN frequencyCount2 return false
    // another way of stating this doe frequencyCount2 have a key that equals 2 ** 2 || 4
    if(!(key ** 2 in frequencyCount2)) {
      return false
    }

    // check if the key squared matches frequencyCount1[key] || { 4: 1 }
    if(frequencyCount2[key ** 2] !== frequencyCount1[key]) {
      return false
    }
  }
  return true
}

same([2, 4], [16, 4]) // true
same([2], [8, 4]) // false

```

