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
            options: {}
        },
        router: {
            constructor: SideBarRouter,
            options: {}
        },
        switchable: false,
        modules: [
            {
                module: MainMenuModule,
                weight: 6
            },
            {
                module: ChannelsModule,
                weight: 7
            }
        ]
    })

    return SideBarModule;

})();
