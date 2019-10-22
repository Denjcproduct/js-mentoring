const getUrls = require('./helpers/readFile');
const deleteFile = require('./helpers/deleteFile');
const getDataAndWriteFile = require('./helpers/getPageSpeedAndWriteResults');

async function app(fileWithUrl, fileWithResult) {
  await deleteFile(fileWithResult);
  await deleteFile('./error.txt');
  const urls = await getUrls(fileWithUrl);
  urls.forEach((url) => {
    getDataAndWriteFile(url, fileWithResult, './error.txt');
  });

  // const start = Promise.resolve();
  // urls.reduce((prev, url) => {
  //   console.log(prev);
  //   return prev.then(getDataAndWriteFile(url, fileWithResult, './error.txt'));
  // }, start);
}

app('./urls.txt', './result.txt');
