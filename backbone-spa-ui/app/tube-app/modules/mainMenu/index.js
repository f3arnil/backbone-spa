module.exports = (function() {
    'use strict';

    var MainMenuView = require('./views/mainMenuView');
    var MainMenuRouter = require('./router/router');

    var MainMenuModule = function () {
        var mainMenuRouter = new MainMenuRouter();
        console.log(mainMenuRouter)

        return {
            // mainMenuView: new MainMenuView()
            mainMenuView: new MainMenuView({router: mainMenuRouter})
        };
    };

    return MainMenuModule;

})();
