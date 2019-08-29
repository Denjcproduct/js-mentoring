const slice = require("./helpers/slice.js");

const take = function takeMethod(array, number = 1) {
  if (number === 0) {
    return [];
  }
  if (array.length <= number) {
    return array;
  }
  if (array.length > 0) {
    return slice(array, 0, number);
  }
};

module.exports = take;
