module.exports = (function () {
    'use strict';

    var ContentView = require('./views/contentView');
    var Module = require('../../../common/module');
    var VideoListModule = require('../videoList/');

    var ContentModule = Module.extend({
        name: 'content',
        layoutView: {
            constructor: ContentView,
            options: { onLoadEvent: 'content:loaded' }
        },
        modules: [
            {
                switchable: true,
                event: 'show:listVideo',
                module: VideoListModule,
                weight: 3
            }
        ]
    })

    return ContentModule;

})();
