const createUrlsMassive = (string) => {
  const stringArray = string.split(';');
  const resultArray = stringArray.map((url) => {
    const re = /\s+/g;
    return `${url.replace(re, '')}`;
  });
  return resultArray;
};

module.exports = createUrlsMassive;
