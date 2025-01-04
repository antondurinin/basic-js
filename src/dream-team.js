const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  if (!Array.isArray(members)) {
    return false;
  }
  
  let teamName = "";
  
  function isString(element) {
    return typeof element === "string";
  }
  function trimUppercase(string) {
    return string.trim().toUpperCase();
  }
  const filtred = members.filter((element) => isString(element));

  const sorted = Array.from(filtred, (string) => trimUppercase(string)).sort();

  for (let i = 0; i < sorted.length; i++) {
    teamName += sorted[i].charAt(0);
  }
  return teamName;
}

module.exports = {
  createDreamTeam
};