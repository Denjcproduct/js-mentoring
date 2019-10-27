const getUrls = require('./helpers/readFile');
const deleteFile = require('./helpers/deleteFile');
const getDataAndWriteFile = require('./helpers/getPageSpeedAndWriteResults');
const chunk = require('../homework-custom-lodash/chunk');

async function app(fileWithUrl, fileWithResult) {
  try {
    await Promise.all([deleteFile(fileWithResult), deleteFile('./error.txt')]);
    const urls = await getUrls(fileWithUrl);
    const urlChunks = chunk(urls, 5);
    for (const urlChunk of urlChunks) {
      await Promise.all(
        urlChunk.map((url) => getDataAndWriteFile(url, fileWithResult, './error.txt'),),
      );
    }
  } catch (error) {
    console.log(error);
  }
}

app('./urls.txt', './result.txt');
