const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(direct = true) {
    this.direct = direct;
    this.alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    this.CHAR_ENCODE = 130;
    this.CHAR_DECODE = 104;
  }

  encrypt(message, key) {
    if (!message || !key) throw Error('provide all params!');

    const m = message.toUpperCase();
    const k = key.toUpperCase();
    const result = [];

    let step = 0;

    for (const i in m) {
      if (m[i].match(/[A-Z]/)) {
        result.push(this.alphabet.charAt((m[i].charCodeAt() +
          (k[step % k.length]).charCodeAt() - this.CHAR_ENCODE) % this.alphabet.length));
        step++;
      } else {
        result.push(m[i]);
      }
    }

    return !this.direct ? result.reverse().join('') : result.join('');
  }

  decrypt(message, key) {
    if (!message || !key) throw Error('provide all params!');

    const m = message.toUpperCase();
    const k = key.toUpperCase();
    const result = [];

    let step = 0;

    for (const i in m) {
      if (m[i].match(/[A-Z]/)) {
        result.push(this.alphabet.charAt((m[i].charCodeAt() -
          (k[step % k.length]).charCodeAt() + this.CHAR_DECODE) % this.alphabet.length));
        step++;
      } else {
        result.push(m[i]);
      }
    }

    return !this.direct ? result.reverse().join('') : result.join('');
  }
}

module.exports = VigenereCipheringMachine;
