const fs = require('fs');
const createUrlsMassive = require('./helpers/createUrlsMassive');

const getUrls = function urls(pathToFile) {
  return new Promise((resolve, reject) => {
    const readable = fs.createReadStream(pathToFile);
    readable.on('error', (err) => reject(err));
    readable.on('data', (data) => resolve(createUrlsMassive(data.toString())));
    readable.on('end', () => {
      console.log('data was emitted');
    });
  });
};

module.exports = getUrls;
