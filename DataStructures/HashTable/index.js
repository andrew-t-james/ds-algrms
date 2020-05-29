/* eslint-disable no-unused-vars */
/* eslint-disable */
const { LimitedArray, getIndexBelowMax } = require("./hash-table-helpers");

class HashTable {
  constructor(limit = 8) {
    this.limit = limit;
    this.storage = new LimitedArray(this.limit);
    // Do not modify anything inside of the constructor
  }

  // Adds the given key, value pair to the hash table
  // Fetch the bucket associated with the given key using the getIndexBelowMax function
  // If no bucket has been created for that index, instantiate a new bucket and add the key, value pair to that new bucket
  // If the key already exists in the bucket, the newer value should overwrite the older value associated with that key
  insert(key, value) {
    if (typeof key === "number") {
      key = String(key);
    }

    const idx = getIndexBelowMax(key, this.limit);
    let bucket = this.storage.get(idx);
    //does a bucket exist or do we get undefined when trying to retrieve said index?
    if (!bucket) {
      //create the bucket
      bucket = [];
      //insert the bucket into our hashTable
      this.storage.set(idx, bucket);
    }
    let overwrite = false;



    if (bucket.length) {
      for (let i = 0; i < bucket.length; i++) {
        const current = bucket[i];
        if (current[0] === key) {
          current[1] = value;
        }
      }
    }

    if (!overwrite) {
      bucket.push([key, value]);
    }

    if(this.length > this.limit * 0.75) {
      this.resize(this.limit * 2);
    }

    this.storage.set(idx, bucket);
  }
  // Removes the key, value pair from the hash table
  // Fetch the bucket associated with the given key using the getIndexBelowMax function
  // Remove the key, value pair from the bucket
  remove(key) {
    const idx = getIndexBelowMax(key, this.limit);
    const bucket = this.storage.get(idx);

    if (!bucket) return;

    for (let k in bucket) {
      const current = bucket[Number(k)]
      if (current[0] === key) {
        bucket.splice(Number(k), 1);
      }
    }

  }

  // Fetches the value associated with the given key from the hash table
  // Fetch the bucket associated with the given key using the getIndexBelowMax function
  // Find the key, value pair inside the bucket and return the value
  retrieve(key) {
    if (typeof key === "number") {
      key = String(key);
    }

  const idx = getIndexBelowMax(key, this.limit);
    const bucket = this.storage.get(idx);

    if (!bucket) return;

    for (let k in bucket) {
      const current = bucket[Number(k)];
      if (current[0] === key) {
        return current[1]
      }
    }

    return;
  }

  resize(newLimit) {
    const oldStorage = this.storage.storage;

    this.limit = newLimit;
    this.storage = new LimitedArray(this.limit);

    for(let bucket of oldStorage) {
      if(typeof bucket !== 'undefined') {
        for(let [key, value] of bucket) {
          this.insert(key, value);
        }

      }
    }
  }

  get length() {
    return this.storage.length
  }
}

module.exports = HashTable;
