'use strict';

module.exports = function (sourceDir, destinationDir) {

  var async = require('async');

  async.waterfall([
    async.constant(sourceDir, destinationDir)

    , require('./steps/read-page-hierarchy')
    , require('./steps/individual-file-conversion') // process each pages with the conversion flow
    , require('./steps/link-update')                // TODO after the pages are processed, need to update the internal links 
    , require('./steps/side-menu')                  // TODO build the side menu with the updated page details

  ], function (err, result) {
    console.log('Done', err, result);
  });

};
