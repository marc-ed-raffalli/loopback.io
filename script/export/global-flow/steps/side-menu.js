'use strict';

/**
 * Writes the side menu and forward the arguments to the next step
 * @param structure
 * @param destinationDir
 * @param callback
 */
module.exports = function (structure, destinationDir, callback) {

  // TODO create side menu in destinationDir

  callback(null, structure, destinationDir);

};
