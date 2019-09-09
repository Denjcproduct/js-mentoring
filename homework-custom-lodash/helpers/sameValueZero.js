const sameValueZero = function sameValueZeroMethod(x, y) {
  return (
    x === y
    || (typeof x === 'number' && typeof y === 'number' && isNaN(x) && isNaN(y))
  );
};

module.exports = sameValueZero;
