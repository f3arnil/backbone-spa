'use strict'

module.exports = (function () {

    var SideBarView = require('./view/sidebar-view');

    var SideBarModule = function () {
        return {
            sideBarView: new SideBarView()
        }
    };

    return SideBarModule;

})();
