const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let encoded = [];
  let countStr = 1;
  for (let i = 0; i < str.length; i++) {
    const element = str[i];
    if (element === str[i+1]) {
      countStr++;
    } else {
      if (countStr > 1) {
        encoded.push(countStr);
        countStr = 1;
      }
      encoded.push(element);
    }
  }
  return encoded.join("");
}

module.exports = {
  encodeLine
};
