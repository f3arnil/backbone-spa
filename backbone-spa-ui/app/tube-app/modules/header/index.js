module.exports = (function() {
    'use strict';

   var HeaderView = require('./views/header-view');

    var HeaderModule = function () {
        var headerView = new HeaderView();
    };

    return HeaderModule;

})();
