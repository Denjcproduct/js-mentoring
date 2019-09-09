const isPartialEqual = function isPartialEqualMethod(a, b) {
  if (!Array.isArray(a)) {
    for (const key in a) {
      if (a[key] !== b[key]) {
        return false;
      }
    }
    return true;
  }
  if (Array.isArray(a)) {
    for (let i = 0; i < a.length; i += 1) {
      for (const key in b) {
        if (key === a[i] && b[key] === a[i + 1]) {
          return true;
        }
      }
    }
    return false;
  }
  return false;
};

module.exports = isPartialEqual;
