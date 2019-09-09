const omitBy = function omitByMethod(object, predicate) {
  const resObj = {};
  for (let key in object) {
    if (!predicate(object[key])) {
      resObj[key] = object[key];
    }
  }
  return resObj;
};

module.exports = omitBy;
