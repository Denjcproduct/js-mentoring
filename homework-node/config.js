const dotenv = require('dotenv');

dotenv.config();

module.exports = {
  googleApi: process.env.GOOGLE_API_KEY,
};
