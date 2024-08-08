'use strict';
var trackasiagl = require('trackasia-gl');
var insertCss = require('insert-css');
var fs = require('fs');
trackasiagl.accessToken = window.localStorage.getItem('TrackAsiaAccessToken');

// var directionsDiv = document.body.appendChild(document.createElement('div'));
// directionsDiv.id = 'directions';

insertCss(fs.readFileSync('./src/trackasia-gl-directions.css', 'utf8'));
insertCss(fs.readFileSync('./node_modules/trackasia-gl/dist/trackasia-gl.css', 'utf8'));
var mapDiv = document.body.appendChild(document.createElement('div'));
mapDiv.style = 'position:absolute;top:0;right:0;left:0;bottom:0;';

var map = new trackasiagl.Map({
  hash: true,
  container: mapDiv,
  style: 'https://maps.track-asia.com/styles/v1/streets.json?key=public_key',
  center: [106.66, 10.76],
  zoom: 5
});

// remove control
var button = document.body.appendChild(document.createElement('button'));
button.style = 'z-index:10;position:absolute;top:10px;right:10px;';
button.textContent = 'Remove directions control';

// remove all waypoints
var removeWaypointsButton = document.body.appendChild(document.createElement('button'));
removeWaypointsButton.style = 'z-index:10;position:absolute;top:30px;right:10px;';
removeWaypointsButton.textContent = 'Remove all waypoints';

// directions
var TrackAsiaDirections = require('../src/index');
var directions = new TrackAsiaDirections({
  api: 'https://maps.track-asia.vn/route/v1/',
  apiKey: 'public_key',
  unit: 'metric',
  profile: 'car',
  geocoder: {
    api: 'https://maps.track-asia.vn/api/v1',
    key: 'public_key',
  },
});
window.directions = directions;

map.addControl(directions, 'top-left');

map.on('load', () => {
  button.addEventListener('click', function() {
    map.removeControl(directions);
  });

  removeWaypointsButton.addEventListener('click', function() {
    directions.removeRoutes();
  });
});
