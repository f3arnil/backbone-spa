module.exports = (function () {
    'use strict';

    var Module = require('appCommon/');
    var MainMenuView = require('./views/mainMenuView');
    var MainMenuRouter = require('./router/mainMenuRouter');

    var MainMenuModule = Module.extend({
        name: 'mainMenu',
        layoutView: {
            constructor: MainMenuView,
            options: {
                onLoadEvent: 'mainMenu:loaded'
            }
        },
        router: {
            constructor: MainMenuRouter,
            options: {}
        }
    });

    return MainMenuModule;

})();
