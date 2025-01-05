const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  if (Number.isNaN(n)) {
    return false;
  }
  const array = Array.from(n.toString(), (cur) => cur);
  const length = array.length;

  function deleteIdx() {
    for (let i = 0; i < length; i++) {
      const element = array[i];
      if (i === length - 1) {
        return length - 1;
      }
      if (+element < +array[i + 1]) {
        return i;
      }
    }
    return 0;
  }
  array.splice(deleteIdx(), 1);
  
  return +array.join("");;
}

module.exports = {
  deleteDigit
};
