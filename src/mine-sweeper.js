const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const result = Array.from(matrix, (x)=>x=Array.from(x, (y)=>0));
  const size = matrix.length;

  function indicateNeighbornCells(i, j) {

    for (let k = -1; k < 2; k++) {
      let indexRow = i - k;
      if (indexRow >= 0) {
        for (let p = -1; p < 2; p++) {
          let indexCol = j - p;
          if (indexCol >= 0 && result[indexRow][indexCol] !== "x"){
            result[indexRow][indexCol] += 1;
          }
          
        }
      }
  }
}

  for (let i = 0; i < size; i++) {
    const row = matrix[i];
    for (let j = 0; j < row.length; j++) {
      const cell = row[j];
      if (cell) {
        result[i][j] = "x";
        indicateNeighbornCells(i, j);
      }
    }
  }

for (let i = 0; i < size; i++) {
  const row = result[i];
  for (let j = 0; j < row.length; j++) {
    const cell = row[j];
    if (cell === "x") {
      row[j] = 1;
    }
  }
}
  return result;
}

module.exports = {
  minesweeper
};
