const fetchToPageSpeed = require('./fetchToPageSpeed');
const writeFile = require('./writeFile');

const getDataAndWriteFile = async (url, pathToResultFile, pathToErrorsFile) => {
  try {
    console.log('fetchToPageSpeed start');
    const response = await fetchToPageSpeed(url);
    if (response) {
      const string = `URL:${response.id}, speed:${
        response.ruleGroups ? response.ruleGroups.SPEED.score : 'Нету данных'
      } \n`;
      console.log('fetchToPageSpeed end');
      writeFile(string, pathToResultFile);
    }
  } catch (error) {
    writeFile(error, pathToErrorsFile);
  }
};

module.exports = getDataAndWriteFile;
