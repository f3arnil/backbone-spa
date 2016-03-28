module.exports = (function () {
    'use strict';

    var MainMenuView = require('./views/mainMenuView');
    var MainMenuRouter = require('./router/mainMenuRouter');
    var Module = require('../../../../common/module');

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
