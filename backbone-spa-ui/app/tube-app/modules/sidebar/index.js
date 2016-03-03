module.exports = (function () {
    'use strict';
    
    var SidebarView = require('./views/sidebar-view');

    function SidebarView () {
        var sidebarView = new SidebarView();
        sidebarView.render();
    };
    
    return SidebarView;
    
})();