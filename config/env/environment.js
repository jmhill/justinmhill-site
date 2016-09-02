const env = process.env.NODE_ENV;

function getConfigFilePath(env) {
  return `./config_objects/${env}.js`;
}

// The env module requires an individual config object
// for each environment (e.g., "production.js") - 
// the application will crash if unable to retrieve the
// correct configuration file.
exports.getConfigurationObject = function() {
  if (env) {
    const config = getConfigFilePath(env);
    return require(config);
  } else {
    throw new Error("NODE_ENV has not been set.");
  }
}
