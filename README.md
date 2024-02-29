TrackAsia GL Directions
---

A full featured directions plugin for [TrackAsia GL JS](https://github.com/track-asia/trackasia-gl-js) using the [TrackAsia Directions API](https://docs.track-asia.com/example/direction-between-two-points/). Quickly add UI to display driving, cycling, or walking directions on the map. The TrackAsia Directions API is powered by the [OSRM](http://project-osrm.org/) routing engine and open data from the [OpenStreetMap](https://www.openstreetmap.org/) project.

For directions functionality in native mobile and desktop applications, see [TrackAsia Android Services](https://github.com/track-asia/trackasia-java), [TrackAsiaDirections.swift](https://github.com/track-asia/trackasia-directions-swift/), [TrackAsiaNavigation IOS](https://github.com/track-asia/trackasia-navigation-ios), [TrackAsiaNavigation Android](https://github.com/track-asia/trackasia-navigation-android)
### Installation

```bash
npm install trackasiagl --save # if not already installed
npm install trackasia-gl-directions --save
```

### Usage
- CommonJS
```javascript
var trackasiagl = require('trackasia-gl');
var TrackAsiaDirections = require('trackasia-gl-directions');

var directions = new TrackAsiaDirections({
  unit: 'metric',
  profile: 'drive'
});

var map = new trackasiagl.Map({
  container: 'map',
  style: 'https://tiles.track-asia.com/tiles/v1/style-streets.json?key=public'
});

map.addControl(directions, 'top-left');
```
- ESM
```javascript
import trackasiagl from 'trackasia-gl';
import TrackAsiaDirections from 'trackasia-gl-directions/dist/trackasia-gl-directions';
import 'trackasia-gl/dist/trackasia-gl.css';
import 'trackasia-gl-directions/dist/trackasia-gl-directions.css';

var directions = new TrackAsiaDirections({
  unit: 'metric',
  profile: 'drive'
});

var map = new trackasiagl.Map({
  container: 'map',
  style: 'https://tiles.track-asia.com/tiles/v1/style-streets.json?key=public'
});

map.addControl(directions, 'top-left');
```
Live example: https://docs.track-asia.com/example/direction-between-two-points/

### Flow publish to npm
- **B1**: **Build the project and skip warning redux in production**:
  ```json
    npm run prepublish
  ```
- **B2**: **Pusblish to npm. Note: check version again. Example current version: 4.1.9 after publishing it is 4.2.0**
  ```json
    npm run publish
  ```
### Deeper dive

See [API.md](https://github.com/track-asia/trackasia-gl-directions/blob/master/API.md) for complete reference.

### Contributing

See [CONTRIBUTING.md](https://github.com/track-asia/trackasia-gl-directions/blob/master/CONTRIBUTING.md).
