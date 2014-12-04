/* jshint node: true */
'use strict';

module.exports = {
  name: 'addon-config-test',
  config: function() {
    return {
      customEvents: {
        paste: 'paste'
      }
    }
  }
};
