// Configuration module containing environment information and
// set up config for individual application components

module.exports = {
  // contains an object with information such as
  // port number, database connection strings, etc.
  environment: require('./env').env,

  // function containing mongoose set-up
  mongoose: require('./mongoose'),
  
  // function containing all set-up information for
  // creating an express application on the server
  express: require('./express')

}