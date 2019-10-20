const createUrlsMassive = function createMassive(string) {
  const stringArray = string.split('http://');
  const resultArray = stringArray.map((url) => {
    const re = /\s+/g;
    return `http://${url.replace(re, '')}`;
  });
  return resultArray;
};

module.exports = createUrlsMassive;
