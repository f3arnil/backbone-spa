module.exports = (function () {
    'use strict'

    var SideBarView = require('./views/sideBarView');

    var SideBarModule = function () {
        return {
            sideBarView: new SideBarView()
        }
    };

    return SideBarModule;

})();
