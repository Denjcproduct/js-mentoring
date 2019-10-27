const fs = require('fs');
const { promisify } = require('util');
const createUrlsMassive = require('./createUrlsMassive');

const readFileAsync = promisify(fs.readFile);

const getUrls = async (pathToFile) => {
  const urls = await readFileAsync(pathToFile);
  return createUrlsMassive(urls.toString());
};

module.exports = getUrls;
