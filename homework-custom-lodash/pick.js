const pick = function pickMethod(object, paths) {
  const resObject = {};
  for (let i = 0; i < paths.length; i++) {
    if (object[paths[i]]) {
      resObject[paths[i]] = object[paths[i]];
    }
  }
  return resObject;
};

module.exports = pick;
