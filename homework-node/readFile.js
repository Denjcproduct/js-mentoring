const fs = require('fs');
const path = require('path');
const request = require('request');
const createUrlsMassive = require('./helpers/createUrlsMassive');
const { googleApi } = require('./config');

const pathToFile = path.join(__dirname, './url.txt');
const readable = fs.createReadStream(pathToFile);
console.log(googleApi);
readable.on('data', (data) => {
  const stringData = data.toString();
  const urlsArray = createUrlsMassive(stringData);
  urlsArray.forEach((url) => {
    if (url) {
      request(
        {
          method: 'GET',
          url: 'https://www.googleapis.com/pagespeedonline/v4/runPagespeed',
          qs: {
            key: `${googleApi}`,
            url,
          },
        },
        (error, response, body) => {
          console.log('body', body);
        },
      );
    }
  });
});

readable.on('end', () => {
  console.log('data was emitted');
});
