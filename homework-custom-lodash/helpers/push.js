const push = function(array, value) {
  const nextElement = array.length;
  array[nextElement] = value;
};

module.exports = push;
