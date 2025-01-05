const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  if (typeof s1 !== "string" || typeof s2 !== "string") {
    return false;
  }
  let maxString = s1;
  let minString = s2;
  if (s2.length > s1.length) {
    maxString = s2;
    minString = s1;
  }
  let num = 0;
  for (let i = 0; i < maxString.length; i++) {
    const char = maxString[i];
    const charMin = minString.indexOf(char);
    if (charMin > -1) {
      num++;
      minString = minString.replace(char, "");
    }
  }
  return num;
}

module.exports = {
  getCommonCharacterCount
};
