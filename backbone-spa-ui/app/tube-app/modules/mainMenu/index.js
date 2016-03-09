module.exports = (function() {
    'use strict';

    var MainMenuRouter = require('./router/router');
    var MainMenuView = require('./views/mainMenuView');

    var MainMenuModule = function () {
        var mainMenuRouter = new MainMenuRouter();

        return {
            mainMenuView: new MainMenuView({router: mainMenuRouter})
        };
    };

    return MainMenuModule;

})();
