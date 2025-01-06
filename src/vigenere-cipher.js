const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */

class VigenereCipheringMachine {
  constructor(direct = true) {
    this.direct = direct;
  }
  matrix() {
    const matrix = Array.from({ length: 26 }, (_, i) => new Array(27));
    const cryptoArr = Array.from({ length: 26 }, (_, i) =>
      String.fromCharCode(65 + i)
    );
    cryptoArr.splice(0, 0, "");
    const msgArr = Array.from({ length: 26 }, (_, i) =>
      String.fromCharCode(97 + i)
    );
    msgArr.splice(0, 0, "");
    matrix.splice(0, 0, msgArr);

    for (let i = 1; i < matrix.length; i++) {
      matrix[i][0] = cryptoArr[i];
      for (let j = 1; j < matrix[i].length; j++) {
        let n = i + j - 1;
        if (n >= matrix[i].length) {
          n = n - matrix[i].length + 1;
        }
        matrix[i][j] = cryptoArr[n];
      }
    }
    return matrix;
  }
  encrypt(msg, codeWord) {
    let encrMsg = "";
    if (!msg || !codeWord) {
      throw new Error("Incorrect arguments!");
    }
    const matrixCrypto = this.matrix();
    let n = 0;
    for (let i = 0; i < msg.length; i++) {
      let letterToMsg = msg[i];

      let regex = /[a-zA-Z]/g;
      if (regex.test(letterToMsg)) {
        let x;
        let y;

        if (n === codeWord.length) {
          n = 0;
        }
        const codLetter = codeWord[n];
        let letterToFind = codLetter.toLowerCase();
        letterToMsg = letterToMsg.toLowerCase();

        x = matrixCrypto[0].indexOf(letterToFind);

        y = matrixCrypto[0].indexOf(letterToMsg);

        n++;

        letterToMsg = matrixCrypto[x][y];
      }
      encrMsg += letterToMsg;
    }
    return encrMsg;
  }

  decrypt(msg, codeWord) {
    let encrMsg = "";
    if (!msg || !codeWord) {
      throw new Error("Incorrect arguments!");
    }
    const matrixCrypto = this.matrix();
    let n = 0;
    for (let i = 0; i < msg.length; i++) {
      let letterToMsg = msg[i];

      let regex = /[a-zA-Z]/g;
      if (regex.test(letterToMsg)) {
        let x;
        let y;

        if (n === codeWord.length) {
          n = 0;
        }
        const codLetter = codeWord[n];
        let letterToFind = codLetter.toLowerCase();
        letterToMsg = letterToMsg;
        x = matrixCrypto[0].indexOf(letterToFind);
        for (let j = 1; j <= matrixCrypto[0].length - 1; j++) {
          let letterToEncr = matrixCrypto[j][x];
          if (letterToEncr === letterToMsg.toUpperCase()) {
            y = j;
            break;
          }
        }

        n++;

        letterToMsg = matrixCrypto[y][0];
      }
      encrMsg += letterToMsg;
    }
    return encrMsg;
  }
}

module.exports = {
  VigenereCipheringMachine,
};
