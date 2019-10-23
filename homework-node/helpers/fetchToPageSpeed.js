const request = require('request-promise');
const { googleApi } = require('../config');

const fetchToPageSpeed = async function fetch(url) {
  const options = {
    method: 'GET',
    uri: 'https://www.googleapis.com/pagespeedonline/v4/runPagespeed',
    qs: {
      key: `${googleApi}`,
      url,
    },
    json: true,
  };
  const pageSpeedData = await request(options);
  return pageSpeedData;
};

module.exports = fetchToPageSpeed;
