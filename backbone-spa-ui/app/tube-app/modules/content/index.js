module.exports = (function () {
    'use strict';

    var ContentView = require('./views/contentView');
    var Module = require('../../../common/module');
    var VideoListModule = require('../videoList/');
    var DetailsModule = require('../details/');

    var ContentModule = Module.extend({
        name: 'content',
        view: {
            constructor: ContentView,
            options: {}
        },
        modules: [
            {
                switchable: true,
                event: 'show:listVideo',
                module: VideoListModule,
                weight: 3
            },
            {
                switchable: true,
                event: 'show:details',
                module: DetailsModule,
                weight: 4
            }
        ]
    })

    return ContentModule;

})();
