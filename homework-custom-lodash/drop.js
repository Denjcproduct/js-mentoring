const shift = require("./helpers/shift.js");

const drop = function dropMethod(array, number = 1) {
  let result = [];
  if (array.length <= number) {
    return [];
  }
  if (number === 0) {
    return array;
  }
  if (array.length > number) {
    for (let j = 0; j < number; j++) {
      if (result.length > 0) {
        result = shift(result);
      }
      if (result.length === 0) {
        result = shift(array);
      }
    }
  }
  return result;
};

module.exports = drop;
