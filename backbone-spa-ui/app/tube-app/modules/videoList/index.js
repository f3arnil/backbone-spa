module.exports = (function() {
    'use strict';

    var VideoListView = require('./views/videos-list-view');

    var VideoListModule = function() {
        //console.log(arguments[0].channel);
        return {
            videoListView: new VideoListView({channel: arguments[0].channel})
        }
    }

    return VideoListModule;

})();
