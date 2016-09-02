const env = process.env.NODE_ENV;

// The env module requires an individual config object
// for each environment (e.g., "production.js") - 
// the application will crash if unable to retrieve the
// correct configuration file.
exports.getConfigurationObject = function() {
  if (env) {
    const configFilePath = "./config_objects/" + env + ".js";
    return require(configFilePath);
  } else {
    throw new Error("NODE_ENV has not been set.");
  }
}
