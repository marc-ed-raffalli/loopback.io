'use strict';

/**
 * Updates the pageDetails and set the converted file name in the destination folder.
 * Drops the destinationDir as we should not need it for next steps.
 *
 * @param structure
 * @param pageDetails
 * @param destinationDir
 * @param callback
 */
module.exports = function (structure, pageDetails, destinationDir, callback) {

  // TODO build new file path.
  // update the file path in pageDetails adding the destinationDir and following the Conversion rules
  // https://github.com/strongloop/loopback.io/wiki/Conversion-rules

  callback(null, structure, pageDetails);

};
