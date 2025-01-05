const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {

 function extendet(
   str,
   {
     repeatTimes = 1,
     separator = "+",
     addition = "",
     additionRepeatTimes = 1,
     additionSeparator = "|",
   }
 ) {
   function repeat(str, repeatX, separat, addition) {
     let repeated = "";
     for (let i = 0; i < repeatX; i++) {
       if (addition !== undefined) {
         repeated += `${i === 0 ? "" : separat}${str}${addition}`;
       } else {
         repeated += `${i === 0 ? "" : separat}${str}`;
       }
     }
     return repeated;
   }

   return repeat(
     str,
     repeatTimes,
     separator,
     repeat(addition, additionRepeatTimes, additionSeparator)
   );
 }
   return extendet(str, options);

}

module.exports = {
  repeater
};
