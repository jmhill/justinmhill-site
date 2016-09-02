const tape = require('tape');

tape('Tape should run *.spec.js files', function(t) {
  t.pass("It worked!");
  t.end();
});

// Server set-up test

tape('Server should load with correct configuration', function(t) {
  const config = require('../config');
  const testConfig = require('../config/env/config_objects/test.js');

  t.deepEqual(config.environment, testConfig);
  t.end();
});

