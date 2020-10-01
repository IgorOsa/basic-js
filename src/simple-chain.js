const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    this.chain.push(String(value) || '');
    return this;
  },
  removeLink(position) {
    const posInt = parseInt(position);

    if (isNaN(posInt) || posInt > this.getLength() || posInt < 0) {
      this.chain = [];
      throw new Error('Wrong position!');
    }

    this.chain.splice(position - 1, 1);

    return this;
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    const result = `( ${this.chain.join(' )~~( ')} )`;
    this.chain = [];
    return result;
  }
};

module.exports = chainMaker;
