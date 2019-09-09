const push = function pushMethod(array, value) {
  const nextElement = array.length;
  array[nextElement] = value;
};

module.exports = push;
