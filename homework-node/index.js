const getUrls = require('./helpers/readFile');
const deleteFile = require('./helpers/deleteFile');
const getDataAndWriteFile = require('./helpers/getPageSpeedAndWriteResults');

async function app(fileWithUrl, fileWithResult) {
  try {
    await Promise.all([deleteFile(fileWithResult), deleteFile('./error.txt')]);
    const urls = await getUrls(fileWithUrl);
    for (const url of urls) {
      await getDataAndWriteFile(url, fileWithResult, './error.txt');
    }
  } catch (error) {
    console.log(error);
  }
}

app('./urls.txt', './result.txt');
