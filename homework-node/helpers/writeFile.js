const fs = require('fs');

const writeFile = function write(data, pathToFile) {
  return new Promise((resolve, reject) => {
    resolve(
      fs.writeFile(pathToFile, data, { flag: 'a+' }, (error) => reject(error)),
    );
  });
};

module.exports = writeFile;
