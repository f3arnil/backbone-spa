module.exports = (function() {
    'use strict';

    var ContentView = require('./views/contentView');

    var ContentModule = function() {
        return {
            contentView: new ContentView()
        };
    };

    return ContentModule;

})();
