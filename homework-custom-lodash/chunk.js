const slice = require("./helpers/slice.js");
const push = require("./helpers/push.js");

const chunk = function chunkMethod(arr, size = 1) {
  const cache = [];
  let arrayValues = [...arr];
  if (arr.length <= 0 || size <= 0) {
    return cache;
  }
  for (let i = 0; i < arrayValues.length; i += size) {
    let arrayValue = slice(arrayValues, i, i + size);
    push(cache, arrayValue);
  }
  return cache;
};

module.exports = chunk;
