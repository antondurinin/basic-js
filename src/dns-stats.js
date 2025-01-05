const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const DNS = {};

  for (let i = 0; i < domains.length; i++) {
    const elementDomain = domains[i].split(".").reverse();
    let extendetDomain = "";
    for (let j = 0; j < elementDomain.length; j++) {
      const domain = elementDomain[j];
      extendetDomain = `${extendetDomain}.${domain}`;
      if (!Object.hasOwn(DNS, extendetDomain)) {
        DNS[extendetDomain] = 1;
      } else {
        DNS[extendetDomain] = DNS[extendetDomain] + 1;
      }
    }
  }
  return DNS;
}

module.exports = {
  getDNSStats
};
