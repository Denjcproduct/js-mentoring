const request = require('request');
const { googleApi } = require('./config');

const fetchPageSpeed = function fetch(url) {
  request(
    {
      method: 'GET',
      uri: 'https://www.googleapis.com/pagespeedonline/v4/runPagespeed',
      qs: {
        key: `${googleApi}`,
        url,
      },
    },
    (error, response, body) => {
      if (error) {
        console.log('error', error);
      }
      if (response) {
        console.log('response', response);
      }
      if (body) {
        return body;
      }
    },
  );
};

module.exports = fetchPageSpeed;
