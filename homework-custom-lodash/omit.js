const includes = require("./includes");

const omit = function omitMethod(object, paths) {
  const resObject = {};
  for (let key in object) {
    if (!paths.includes(key)) {
      resObject[key] = object[key];
    }
  }
  return resObject;
};

module.exports = omit;
