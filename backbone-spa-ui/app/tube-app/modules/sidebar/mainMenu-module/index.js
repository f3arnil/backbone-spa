module.exports = (function () {
    'use strict';

    var Module = require('../../../../common/module');
    var MainMenuRouter = require('./router/router');
    var MainMenuView = require('./views/mainMenuView');

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
    })

    return MainMenuModule;

})();
