const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }
  if (arr.length <= 0) {
    return [];
  }
  const transformed = [];
  let delNext = false;
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    if (element === "--double-next") {
      if (i < arr.length - 1) {
        transformed.push(arr[i + 1]);
      }
    } else if (element === "--double-prev") {
      if (i > 0 && !disableNext) {
        transformed.push(arr[i - 1]);
      }
      disableNext = false;
    } else if (element === "--discard-next") {
      if (i < arr.length - 1) {
        delNext = true;
        disableNext = true;
      }
    } else if (element === "--discard-prev") {
      if (i > 0 && !disableNext) {
        transformed.splice(i - 1, 1);
      }
      disableNext = false;
    } else {
      if (!delNext) {
        transformed.push(element);
      } else {
        delNext = false;
      }
    }
  }
  return transformed;
}

module.exports = {
  transform
};
