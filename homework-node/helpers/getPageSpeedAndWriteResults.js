const fetchToPageSpeed = require('./fetchToPageSpeed');
const writeFile = require('./writeFile');

const getDataAndWriteFile = async function dataForPageSpeed(
  url,
  pathToResultFile,
  pathToErrorsFile,
) {
  await fetchToPageSpeed(url)
    .then((response) => {
      if (response) {
        const string = `URL:${response.id}, speed:${
          response.ruleGroups ? response.ruleGroups.SPEED.score : 'Нету данных'
        } \n`;
        writeFile(string, pathToResultFile);
      }
    })
    .catch((error) => {
      writeFile(error, pathToErrorsFile);
    });
};

module.exports = getDataAndWriteFile;
