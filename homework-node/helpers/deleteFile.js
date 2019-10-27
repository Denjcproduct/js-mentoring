const fs = require('fs');
const { promisify } = require('util');

const deleteFileAsync = promisify(fs.unlink);

const deleteFile = async (pathToFile) => {
  try {
    await deleteFileAsync(pathToFile);
  } catch (error) {
    console.error(error);
  }
};

module.exports = deleteFile;
