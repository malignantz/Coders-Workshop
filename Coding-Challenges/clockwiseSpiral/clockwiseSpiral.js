#!/usr/bin/env node

let alternatingGetRowMaker = () => {
  let top = false;
  return matrix => {
    if (matrix.length === 0) return null;
    top = !top;
    return top ? matrix.shift() : matrix.pop().reverse();
  };
};

let alternatingGetColMaker = () => {
  let right = false;
  return matrix => {
    if (matrix.length === 0) return null;
    right = !right;
    let retVal = [];
    if (right) {
      // get farthest right col
      for (let i = 0; i < matrix.length; i++) {
        retVal.push(matrix[i].pop());
      }
    } else {
      // get farthest left col
      for (let i = 0; i < matrix.length; i++) {
        retVal.push(matrix[i].shift());
      }
    }
    return right ? retVal : retVal.reverse();
  };
};

const clockwiseSpiral = matrix => {
  let newMat = matrix.slice(0);
  let getRow = alternatingGetRowMaker();
  let getCol = alternatingGetColMaker();

  let bufferRow = getRow(newMat);
  let colNext = true;
  let spiral = [];

  while (bufferRow && bufferRow.length > 0) {
    spiral.push(...bufferRow);
    if (colNext) {
      bufferRow = getCol(newMat);
    } else {
      bufferRow = getRow(newMat);
    }
    colNext = !colNext;
  }
  return spiral;
};

console.log(
  clockwiseSpiral([
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15],
    [16, 17, 18, 19, 20]
  ])
);
