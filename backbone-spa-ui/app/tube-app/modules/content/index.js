module.exports = (function () {
    'use strict';

    var Module = require('appCommon/');
    var ContentView = require('./views/contentView');
    var ContentRouter = require('./router/contentRouter');
    var VideoListModule = require('appModules/videoList/');
    var DetailsModule = require('appModules/details/');

    var ContentModule = Module.extend({
        name: 'content',
        layoutView: {
            constructor: ContentView,
            options: {}
        },
        router: {
            constructor: ContentRouter,
            options: {}
        },
        modules: [
            {
                module: VideoListModule,
                weight: 8
            },
            {
                module: DetailsModule,
                weight: 9
            }
        ],
        switchable: false
    })

    
    return ContentModule;

})();
