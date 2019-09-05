const slice = require("./helpers/slice");
const push = require("./helpers/push");

const chunk = function chunkMethod(arr, size = 1) {
  const cache = [];
  let array = [...arr];
  if (arr.length <= 0 || size <= 0) {
    return cache;
  }
  for (let i = 0; i < array.length; i += size) {
    let arrayValue = slice(array, i, i + size);
    push(cache, arrayValue);
  }
  return cache;
};

module.exports = chunk;
