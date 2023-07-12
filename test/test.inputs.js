'use strict';

const once = require('lodash.once');
const test = require('tape');

test('Directions#inputControl', tt => {
  let container, map, directions;

  const changeEvent = document.createEvent('HTMLEvents');
  changeEvent.initEvent('change', true, false);

  const clickEvent = document.createEvent('HTMLEvents');
  clickEvent.initEvent('click', true, false);

  function setup(opts) {
    container = document.createElement('div');
    map = new trackasiagl.Map({ container: container });
    var TrackAsiaDirections = require('..');
    directions = new TrackAsiaDirections(opts);
    map.addControl(directions);
  }

  tt.test('profiles', (t) => {
    setup({ profile: 'drive' });
    t.plan(3);

    var drivingEl = container.querySelector('#trackasia-directions-profile-car');
    var cyclingEl = container.querySelector('#trackasia-directions-profile-cycling');

    t.equal(drivingEl.checked, false, 'default driving profile should is false');
    t.equal(cyclingEl.checked, true, 'cycling profile is active');

    directions.on('profile', once((e) => {
      t.equal(e.profile, 'mapbox/driving', 'driving profile is set and event emitted');
    }));

    drivingEl.dispatchEvent(changeEvent);
  });

  tt.end();
});

