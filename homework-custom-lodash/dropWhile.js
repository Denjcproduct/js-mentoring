const drop = require("./drop.js");

const dropWhile = function dropWhileMethod(array, predicate) {
  let dropNumber = {};
  let dropArray = {};
  for (let i = 0; i < array.length; i++) {
    let element = array[i];
    if (!predicate(element, i)) {
      dropNumber = i;
    }
    dropArray = drop(array, dropNumber);
  }
  return dropArray;
};

module.exports = dropWhile;
