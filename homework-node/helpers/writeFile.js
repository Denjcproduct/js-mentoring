const fs = require('fs');
const { promisify } = require('util');

const writeFileAsync = promisify(fs.writeFile);

const writeFile = (data, pathToFile) => {
  writeFileAsync(pathToFile, data, { flag: 'a+' });
};

module.exports = writeFile;
