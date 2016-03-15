module.exports = (function () {
    'use strict'

    var SideBarView = require('./views/sideBarView');
    var Module = require('../../../common/module');
    var MainMenuModule = require('../mainMenu/');
    var ChannelsModule = require('./channels-module/');

    var SideBarModule = Module.extend({
        name: 'sidebar',
        layoutView: {
            constructor: SideBarView,
            options: {
                onLoadEvent: 'sidebar:loaded'
            }
        },
        modules: [
            {
//                switchable: false,
//                event: 'show:mainMenu',
                module: MainMenuModule,
                weight: 2
            },
            {
//                switchable: false,
//                event: 'show:channels',
                module: ChannelsModule,
                weight: 3
            }
        ]
    })

    return SideBarModule;



})();
