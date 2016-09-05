const fs = require('fs');
const browserify = require('browserify');

browserify("./src/client/main.js")
  .transform("babelify", {
    presets: ["es2015", "react"]
  })
  .bundle()
  .pipe(fs.createWriteStream("./public/js/app.js"));