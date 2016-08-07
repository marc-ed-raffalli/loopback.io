'use strict';

/**
 * Conversion flow for the HTML file to MD.
 * The pageDetails object reference is as well in structure.
 *
 * @param structure       Complete page <PageDetails> hierarchy
 * @param pageDetails     Page being processed by the flow
 * @param destinationDir  Destination directory where the converted content should be written
 * @param callback
 */
module.exports = function (structure, pageDetails, destinationDir, callback) {

  var async = require('async');

  async.waterfall([
    async.constant(structure, pageDetails, destinationDir)
    , require('./steps/file-name-conversion')
    , require('./steps/read-content')

    // TODO add the conversion steps here
    // see https://github.com/strongloop/loopback.io/wiki/Conversion-rules

    , require('./steps/html-to-md')

    // once fully converted, write the file
    , require('./steps/write-converted-content')
  ], callback);

};
