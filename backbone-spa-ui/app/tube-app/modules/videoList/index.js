module.exports = (function() {
    "use strict";
    
    var VideoListView = require('./views/video-list-view');
    
    var VideoListModule = function() {
        var videoListView = new VideoListView();
    }
    
    return VideoListModule;
    
})();
