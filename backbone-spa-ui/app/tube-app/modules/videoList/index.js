module.exports = (function() {
    'use strict';

    var VideoListView = require('./views/videos-list-view');
    var Module = require('../../../common/module');

    var VideoListModule = Module.extend({
        name: 'videoList',
        view: {
            constructor: VideoListView,
            options: {}
        }
    })

    return VideoListModule;

})();
