'use strict'

module.exports = (function() {

   var SideBarView = require('./view/sidebar-view');

    var SideBarModule = function () {
        var sideBarView = new SideBarView();
    };

    return SideBarModule;

})();