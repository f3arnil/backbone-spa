module.exports = (function() {
    'use strict';

    var Module = require('appCommon/');
    var VideoListView = require('./views/videos-list-view');
    var VideoListRouter = require('./router/video-list-router');

    var VideoListModule = Module.extend({
        name: 'videoList',
        layoutView: {
            constructor: VideoListView,
            options: {}
        },
        router: {
            constructor: VideoListRouter,
            options: {}
        },
        switchable: true
    })

    return VideoListModule;

})();
