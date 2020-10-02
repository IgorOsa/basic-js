const CustomError = require("../extensions/custom-error");

const controlSequences = [
  '--discard-next',
  '--discard-prev',
  '--double-next',
  '--double-prev',
];

function transform(arr) {
  if (!(Array.isArray(arr))) {
    throw new Error('No array provided!');
  }

  let result = [];

  for (let i = 0; i < arr.length; i++) {
    if (!controlSequences.includes(arr[i])) {
      result.push(arr[i]);
    } else if (arr[i] === controlSequences[0] && arr[i + 1] !== undefined) {
      i++;
    } else if (arr[i] === controlSequences[1] && arr[i - 2] !== controlSequences[0] && arr[i - 1] !== undefined) {
      result.pop(arr[i - 1]);
    } else if (arr[i] === controlSequences[2] && arr[i + 1] !== undefined) {
      result.push(arr[i + 1]);
    } else if (arr[i] === controlSequences[3] && arr[i - 2] !== controlSequences[0] && arr[i - 1] !== undefined) {
      result.push(arr[i - 1]);
    }
  }

  return result;
};

module.exports = transform;
