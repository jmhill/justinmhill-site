'use strict';

const config = require('./config');

const db = config.mongoose();
const app = config.express();

app.listen(config.environment.PORT, function() {
  console.log("app listening on port: " + config.environment.PORT);
});