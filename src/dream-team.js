const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(arr) {
  if (!Array.isArray(arr)) return false;
  return arr.map(x => (typeof x !== 'string') ? ('') : (x.trim().split('')[0].toUpperCase())).sort().join('');
};
