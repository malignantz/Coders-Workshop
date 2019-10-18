#!/usr/bin/env node

let MAP = {
  "2": ["a", "b", "c"],
  "3": ["d", "e", "f"],
  "4": ["g", "h", "i"],
  "5": ["j", "k", "l"],
  "6": ["m", "n", "o"],
  "7": ["p", "q", "r", "s"],
  "8": ["t", "u", "v"],
  "9": ["w", "x", "y", "z"]
};

const keyMap = (map, keys) => {
  let words = [];
  for (let key of String(keys).split("")) {
    if (words.length === 0) {
      words = map[key];
    } else {
      let letters = map[key];
      let newWords = [];
      for (let letter of letters) {
        newWords.push(...words.map(word => word + letter));
      }
      words = newWords;
    }
  }
  return words;
};

console.log(keyMap(MAP, 23)); // ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"]
console.log(keyMap(MAP, 5337).includes("keep"));
