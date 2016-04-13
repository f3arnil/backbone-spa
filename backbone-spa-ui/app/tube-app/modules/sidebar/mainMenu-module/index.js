module.exports = (function () {
    'use strict';

    var Module = require('appCommon/');
    var MainMenuView = require('./views/mainMenuView');
    var MainMenuRouter = require('./router/mainMenuRouter');

    var MainMenuModule = Module.extend({
        name: 'mainMenu',
        layoutView: {
            constructor: MainMenuView,
            options: {}
        },
        router: {
            constructor: MainMenuRouter,
            options: {}
        },
        switchable: true
    });

    return MainMenuModule;

})();
