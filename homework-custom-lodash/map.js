const push = require("./helpers/push.js");

const map = function mapMethod(array, iteratee) {
  let index = -1;
  let isArray = Array.from(array);
  let data = [];
  /*если array это object */
  if (isArray.length === 0) {
    for (let key in array) {
      push(data, array[key]);
    }
  }
  /*если array это массив */
  if (isArray.length > 0) {
    data = array;
  }
  if (typeof iteratee !== "function") {
    let values = [];
    for (let i = 0; i < array.length; i++) {
      for (let key in array[i]) {
        push(values, array[i][key]);
      }
    }
    return values;
  }
  const length = data == null ? 0 : data.length;
  const result = new Array(length);
  while (++index < length) {
    result[index] = iteratee(data[index], index, data);
  }
  return result;
};

module.exports = map;
