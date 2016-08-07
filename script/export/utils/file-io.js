'use strict';

var
  fs = require('fs')
  , path = require('path')
  , mkdirp = require('mkdirp')
  ;

function read(filePath, callback) {
  fs.readFile(filePath, 'utf8', function (err, data) {
    if (err) {
      return callback(err);
    }

    callback(null, data);
  });
}

function write(filePath, data, callback) {
  var dirName = path.dirname(filePath);

  mkdirp(dirName, function (err) {
    if (err) {
      return callback(err);
    }

    var fileContent = typeof data === 'string' ? data : JSON.stringify(data);

    fs.writeFile(filePath, fileContent, function (err) {
      if (err) {
        return callback(err);
      }

      callback();
    });
  });
}

module.exports = {
  read: read,
  write: write
};
