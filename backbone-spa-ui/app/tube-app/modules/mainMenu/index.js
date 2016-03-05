module.exports = (function() {
    'use strict';

    var MainMenuView = require('./views/mainMenuView');

    var MainMenuModule = function () {
        return {
            mainMenuView: new MainMenuView()
        };
    };

    return MainMenuModule;

})();
