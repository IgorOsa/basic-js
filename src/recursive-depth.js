const CustomError = require("../extensions/custom-error");

class DepthCalculator {
  constructor() {
    this.calculateDepth = this.calculateDepth.bind(this);
  }

  calculateDepth(arr) {

    return 1 + (Array.isArray(arr) ? arr.reduce((acc, el) => {
      return Math.max(acc, this.calculateDepth(el));
    }, 0) : -1);
  };
}
module.exports = DepthCalculator;
