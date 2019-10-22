const request = require('request-promise');
const { googleApi } = require('../config');

const fetchToPageSpeed = function fetch(url) {
  return new Promise((resolve, reject) => {
    const options = {
      method: 'GET',
      uri: 'https://www.googleapis.com/pagespeedonline/v4/runPagespeed',
      qs: {
        key: `${googleApi}`,
        url,
      },
      json: true,
    };
    if (url) {
      request(options)
        .then((response) => {
          resolve(response);
        })
        .catch((error) => {
          reject(error);
        });
    }
  });
};

module.exports = fetchToPageSpeed;
