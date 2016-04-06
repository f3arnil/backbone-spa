module.exports = (function () {
    'use strict'

    var Module = require('appCommon/');
    var SideBarView = require('./views/sideBarView');
    var SideBarRouter = require('./router/sideBarRouter');
    var MainMenuModule = require('./mainMenu-module/');
    var ChannelsModule = require('./channels-module/');

    var SideBarModule = Module.extend({
        name: 'sidebar',
        layoutView: {
            constructor: SideBarView,
            options: {
                onLoadEvent: 'sidebar:loaded'
            }
        },
        router: {
            constructor: SideBarRouter,
            options: {}
        },
        modules: [
            {
//                switchable: false,
//                event: 'show:mainMenu',
                module: MainMenuModule,
                weight: 6
            },
            {
//                switchable: false,
//                event: 'show:channels',
                module: ChannelsModule,
                weight: 7
            }
        ]
    })

    return SideBarModule;

})();
