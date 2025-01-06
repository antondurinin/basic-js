const { NotImplementedError } = require("../extensions/index.js");

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */
function getSeason(date) {
  if (date === null || date === undefined) {
    return "Unable to determine the time of year!";
  }
  try {
    if (
      Object.prototype.toString.call(date) !== "[object Date]" ||
      !(date instanceof Date) ||
      isNaN(date.getTime())
    ) {
      throw new Error();
    }
    const requiredMethods = [
      "getTime",
      "getTimezoneOffset",
      "getFullYear",
      "getMonth",
      "getDate",
      "getHours",
      "getMinutes",
      "getSeconds",
      "getMilliseconds",
      "getDay",
    ];
    const isRealDate = requiredMethods.every(
      (method) =>
        typeof date[method] === "function" &&
        date[method].toString() === Date.prototype[method].toString()
    );
    if (!isRealDate) {
      throw new Error();
    }
  } catch {
    throw new Error("Invalid date!");
  }
  const month = date.getMonth();
  if ((month >= 0 && month <= 1) || month === 11) {
    return "winter";
  } else if (month <= 4 && month >= 2) {
    return "spring";
  } else if (month <= 7 && month >= 5) {
    return "summer";
  } else if (month <= 10 && month >= 8) {
    return "autumn";
  }
}

module.exports = {
  getSeason,
};
