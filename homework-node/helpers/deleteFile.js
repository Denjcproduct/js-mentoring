const fs = require('fs');
const { promisify } = require('util');

const deleteFileAsync = promisify(fs.unlink);

const deleteFile = (pathToFile) => {
  deleteFileAsync(pathToFile);
};

module.exports = deleteFile;
