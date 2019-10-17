#!/usr/bin/env node

const checkPermutation = (str1, str2) => {
  if (str1.length !== str2.length) return false;
  let dict = {};
  str1.split("").forEach(letter => {
    dict[letter] = dict[letter] ? dict[letter]++ : (dict[letter] = 0);
  });
  str2.split("").forEach(letter => {
    if (dict[letter] > 0) {
      dict[letter]--;
    } else {
      return false;
    }
  });
  return true;
};

console.log(checkPermutation("god", "dog")); // true
console.log(checkPermutation("hello", "goodbye")); // false
