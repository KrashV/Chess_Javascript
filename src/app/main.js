requirejs.config({
    baseUrl: 'lib',
    paths: {
        app: '../app'
    }
  });
  
  requirejs(['app/main']);

define(function (require) {
    // Load any app-specific modules
    // with a relative require call,
    // like:
    var messages = require('./messages');

    // Load library/vendor modules using
    // full IDs, like:
    var print = require('print');
});
