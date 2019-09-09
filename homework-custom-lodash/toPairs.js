const push = require('./helpers/push');

const toPairs = function toPairsMethod(object) {
  const resArr = [];
  for (const key in object) {
    if (object.hasOwnProperty(key)) {
      const objArr = [];
      push(objArr, key);
      push(objArr, object[key]);
      push(resArr, objArr);
    }
  }
  return resArr;
};

module.exports = toPairs;
