const isPartialEqual = function(a, b) {
  if (!Array.isArray(a)) {
    for (let key in a) {
      if (a[key] !== b[key]) {
        return false;
      }
    }
    return true;
  }
  if (Array.isArray(a)) {
    for (let i = 0; i < a.length; i++) {
      for (let key in b) {
        if (key === a[i] && b[key] === a[i + 1]) {
          return true;
        }
      }
    }
    return false;
  }
};

module.exports = isPartialEqual;
