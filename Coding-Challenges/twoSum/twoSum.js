#!/usr/bin/env node

// [1,2,3,4,5], 9 => [3,4]

const twoSum = (nums, target) => {
  let indexLookUp = {};
  for (let i = 0; i < nums.length; i++) {
    let num = nums[i];
    let found = indexLookUp[num];
    if (isFinite(found)) {
      return [found, i];
    } else {
      indexLookUp[target - num] = i;
    }
  }
  console.log("none found");
};

console.log(twoSum([2, 7, 11, 15], 9)); // [0, 1]
console.log(twoSum([1, 2, 3, 4, 5], 9));
