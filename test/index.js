'use strict';

const test = require('tape');
window.trackasiagl = require('trackasia-gl');
require('../src/index');

trackasiagl.accessToken = process.env.TrackAsiaAccessToken;

if (!trackasiagl.accessToken) {
  throw new Error('No TrackAsiaAccessToken environment variable set. Please run `export TrackAsiaAccessToken=<your token> && npm test`');
  window.close();
  process.exit(0);
}

// Tests
require('./test.directions');
// require('./test.options');
require('./test.inputs');
require('./test.instructions');
require('./test.geocoder');
require('./test.utils');

// close the smokestack window once tests are complete
test('shutdown', (t) => {
  t.end();
  setTimeout(() => {
    window.close();
  });
});
