'use strict';

/**
 * Update the internal links and forward the arguments to the next step
 *
 * @param structure
 * @param destinationDir
 * @param callback
 */
module.exports = function (structure, destinationDir, callback) {

  // TODO update the links in the files

  callback(null, structure, destinationDir);

};
