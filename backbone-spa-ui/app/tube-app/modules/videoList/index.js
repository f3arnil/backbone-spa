module.exports = (function() {
    'use strict';

    var VideoListView = require('./views/videos-list-view');
    var Module = require('../../../common/module');

    var VideoListModule = Module.extend({
        name: 'videoList',
        layoutView: {
            constructor: VideoListView,
            options: { onLoadEvent: 'videoList:loaded' }
        }
    })

    return VideoListModule;

})();
