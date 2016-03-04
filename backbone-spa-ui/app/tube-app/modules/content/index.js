module.exports = (function() {
    "use strict";
    
    var ContentView = require('./views/content-view');
    
    var ContentModule = function() {
        var contentView = new ContentView();
    }
    
    return ContentModule;
    
})();
