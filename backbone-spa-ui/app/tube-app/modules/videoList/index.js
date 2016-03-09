module.exports = (function() {
    'use strict';

    var VideoListView = require('./views/videos-list-view');

    var VideoListModule = function() {
        return {
            videoListView: new VideoListView()
        }
    }

    return VideoListModule;

})();
