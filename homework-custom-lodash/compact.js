const push = require("./helpers/push.js");

const compact = function compactMethod(arr) {
  const resultArray = [];
  for (let i = 0; i <= arr.length; i++) {
    if (arr[i]) {
      push(resultArray, arr[i]);
    }
  }
  return resultArray;
};

module.exports = compact;
