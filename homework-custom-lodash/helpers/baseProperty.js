const baseProperty = function(key) {
  return object => (object == null ? undefined : object[key]);
};
module.exports = baseProperty;
