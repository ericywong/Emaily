// This is Keys.js - Figure out what set of credientials to s return!
if (process.env.NODE_ENV === 'production') {
  // we are in production - return the prod set of keys
  module.exports = require('./prod.js');
} else {
  // we are in development - return the dev.js set of keys
  module.exports = require('./dev');
}
