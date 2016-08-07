'use strict';

/**
 * HTML to MD flow step
 *
 * @param structure
 * @param pageDetails
 * @param htmlStr
 * @param callback
 */
module.exports = function (structure, pageDetails, htmlStr, callback) {

  // TODO convert the HTML to MD
  callback(null, structure, pageDetails, 'Dummy md for ' + pageDetails.title);

};
