'use strict';

/**
 * Reads the file pointed by the pageDetails.path
 * forwards the arguments to the next step adding the file html content
 *
 * @param structure
 * @param pageDetails
 * @param callback
 */
module.exports = function (structure, pageDetails, callback) {

  var fileIO = require('../../utils/file-io');

  fileIO.read(pageDetails.path, function (err, htmlStr) {
    if (err) {
      return callback(err);
    }

    callback(null, structure, pageDetails, htmlStr);
  });

};
