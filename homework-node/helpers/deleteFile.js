const fs = require('fs');

const deleteFile = function fileDelete(pathToFile) {
  return new Promise((resolve, reject) => {
    resolve(fs.unlink(pathToFile, (err) => reject(err)));
  });
};

module.exports = deleteFile;
