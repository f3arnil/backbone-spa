module.exports = (function () {
    'use strict';

    var ContentView = require('./views/contentView');
    var ContentRouter = require('./router/contentRouter');
    var Module = require('../../../common/module');
    var VideoListModule = require('../videoList/');
    var DetailsModule = require('../details/');

    var ContentModule = Module.extend({
        name: 'content',
        layoutView: {
            constructor: ContentView,
            options: { onLoadEvent: 'content:loaded' }
        },
        router: {
            constructor: ContentRouter,
            options: {}
        },
        modules: [
            {
//                switchable: true,
//                event: 'show:listVideo',
                module: VideoListModule,
                weight: 8
            },
            {
                switchable: true,
                event: 'show:details',
                module: DetailsModule,
                weight: 9
            }
        ]
    })

    
    return ContentModule;

})();
