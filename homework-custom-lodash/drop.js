const slice = require("./helpers/slice");

const drop = function dropMethod(array, number = 1) {
  if (array.length <= number) {
    return [];
  }
  if (number === 0) {
    return array;
  }
  if (array.length > number) {
    return slice(array, number);
  }
};

module.exports = drop;
