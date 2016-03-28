module.exports = (function() {
    'use strict';

    var VideoListView = require('./views/videos-list-view');
    var VideoListRouter = require('./router/video-list-router');
    var Module = require('../../../common/module');

    var VideoListModule = Module.extend({
        name: 'videoList',
        layoutView: {
            constructor: VideoListView,
            options: { onLoadEvent: 'videoList:loaded' }
        },
        router: {
            constructor: VideoListRouter,
            options: {}
        },
        switchable: true
    })

    return VideoListModule;

})();
