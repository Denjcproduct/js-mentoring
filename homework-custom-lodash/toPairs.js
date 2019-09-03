const push = require("./helpers/push");

const toPairs = function toPairsMethod(object) {
  let resArr = [];
  for (let key in object) {
    if (object.hasOwnProperty(key)) {
      let objArr = [];
      push(objArr, key);
      push(objArr, object[key]);
      push(resArr, objArr);
    }
  }
  return resArr;
};

module.exports = toPairs;
