const CustomError = require("../extensions/custom-error");

function repeater(str, options) {
  let result = [];

  for (let s = 0; s < (options["repeatTimes"] || 1); s++) {
    let addition = [];
    let resultStr = '';

    if ("addition" in options) {
      for (let i = 0; i < (options["additionRepeatTimes"] || 1); i++) {
        addition.push(String(options.addition));
      }
      resultStr = addition.join((options.additionSeparator || '|'));
    }

    result.push(String(str) + resultStr);
  }
  return result.join((options.separator || '+'))
};

module.exports = repeater;
