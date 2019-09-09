const baseProperty = function basePropertyMethod(key) {
  return (object) => (object == null ? undefined : object[key]);
};
module.exports = baseProperty;
