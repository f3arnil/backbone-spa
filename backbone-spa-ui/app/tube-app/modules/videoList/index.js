module.exports = (function() {
    'use strict';

    var VideoListView = require('./views/video-list-view');

    var VideoListModule = function() {
        return {
            videoListView: new VideoListView()
        }
    }

    return VideoListModule;

})();
