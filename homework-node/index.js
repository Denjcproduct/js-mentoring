const fs = require('fs');
const request = require('request');
const getUrls = require('./readFile');
const { googleApi } = require('./config');

async function app(fileWithUrl, fileWithResult) {
  fs.unlink(fileWithResult, (err) => {
    if (err) {
      console.error(err);
      return false;
    }
  });
  const result = await getUrls(fileWithUrl);
  result.forEach((url) => {
    const options = {
      method: 'GET',
      uri: 'https://www.googleapis.com/pagespeedonline/v4/runPagespeed',
      qs: {
        key: `${googleApi}`,
        url,
      },
    };
    if (url) {
      request(options, (err, res, body) => {
        if (err) {
          console.log('err', err);
        }
        if (body) {
          const data = JSON.parse(body);
          const string = `URL:${data.id}, speed:${
            data.ruleGroups ? data.ruleGroups.SPEED.score : 'Нету данных'
          } \n`;
          fs.writeFile(fileWithResult, string, { flag: 'a+' }, (error) => {
            if (error) {
              console.log('err', error);
            }
          });
        }
      });
    }
  });
}

app('./urls.txt', './result.txt');
