#!/usr/bin/env node

let makeFibSeq = () => {
  let prev = 0;
  let val = 1;
  return () => {
    let retVal = prev + val;
    prev = val;
    val = retVal;
    return retVal;
  };
};

const productFib = prod => {
  let getNextFib = makeFibSeq();
  let fibNum = getNextFib();
  let nextFib = getNextFib();
  console.log(prod);
  while (prod > fibNum * nextFib) {
    fibNum = nextFib;
    nextFib = getNextFib();
  }
  console.log(fibNum, nextFib, prod);
  return [fibNum, nextFib, prod === fibNum * nextFib];
};

let deepEqual = (val1, val2) => JSON.stringify(val1) === JSON.stringify(val2);
