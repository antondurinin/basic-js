const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  function isMatrix() {
    if (!Array.isArray(matrix)) {
      return false;
    }

    for (let index = 0; index < matrix.length; index++) {
     if (!Array.isArray(matrix[index])) {
       return false;
     }
    }
    return true;
  }

  if (!isMatrix()) {
    return false;
  }

  let sum = 0;
  for (let i = 0; i < matrix[0].length; i++) {
    for (let j = 0; j < matrix.length; j++) {
      const element = matrix[j][i];
      if ((element === 0)) {
        break;
      }
      sum += element;
    }
  }
  return sum;
}

module.exports = {
  getMatrixElementsSum
};
