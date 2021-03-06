const push = require('./helpers/push');
const isArrayLike = require('./helpers/isArrayLike');
const isObjectLike = require('./helpers/isObjectLike');
const forEach = require('./helpers/forEach');

const map = function mapMethod(array, iteratee) {
  let index = -1;
  let data = [];
  if (typeof iteratee !== 'function') {
    const values = [];
    forEach(array, (element) => {
      for (const key in element) {
        push(values, element[key]);
      }
    });
    return values;
  }
  if (isObjectLike(array)) {
    for (const key in array) {
      push(data, array[key]);
    }
  }
  if (isArrayLike(array)) {
    data = array;
  }
  const length = data == null ? 0 : data.length;
  const result = new Array(length);
  while (++index < length) {
    result[index] = iteratee(data[index], index, data);
  }
  return result;
};

module.exports = map;
