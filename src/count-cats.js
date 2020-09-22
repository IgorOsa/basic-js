const CustomError = require("../extensions/custom-error");

module.exports = function countCats(twoDimensionalArray) {
  if (!twoDimensionalArray) return;

  return twoDimensionalArray.reduce((prev, curr) => {
    return prev += curr.filter(x => x === '^^').length;
  }, 0);
};
