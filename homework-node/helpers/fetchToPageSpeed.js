const request = require('request-promise');
const { googleApi, googleApiUrl } = require('../config');

const fetchToPageSpeed = async url => {
  const options = {
    method: 'GET',
    uri: `${googleApiUrl}`,
    qs: {
      key: `${googleApi}`,
      url
    },
    json: true
  };
  const pageSpeedData = await request(options);
  return pageSpeedData;
};

module.exports = fetchToPageSpeed;
