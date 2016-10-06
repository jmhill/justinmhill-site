/**
 * Simple node script to be used via npm run.
 * 
 * Will transpile ES2015 client code to ES5
 * using the babelify transform, and then
 * use browserify/watchify to read all of the
 * require/import statements and put everything 
 * together into a single bundle file.
 * 
 */

const fs = require('fs');
const browserify = require('browserify');
const watchify = require('watchify');
const errorify = require('errorify');

function runBundler() {
  b.transform("babelify", {
      presets: ["es2015", "react"]
    })
    .bundle()
    .pipe(fs.createWriteStream("./public/js/app.js"));
}

const b = browserify({
  entries: ["./src/client/main.js"],
  cache: {},
  packageCache: {},
  plugin: [watchify, errorify]
});

b.on('update', function(ids) {
  console.log("Files changed: " + ids);
});
b.on('update', runBundler);

b.on('log', function(msg) {
  console.log("Watchify: new bundle created: " + msg);
});

runBundler();