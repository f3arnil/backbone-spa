module.exports = (function () {
    'use strict';
    
    var SidebarView = require('./views/sidebar-view');

    function SidebarModule () {
        var sidebarView = new SidebarView();
        sidebarView.render();
    };
    
    return SidebarModule();
    
})();