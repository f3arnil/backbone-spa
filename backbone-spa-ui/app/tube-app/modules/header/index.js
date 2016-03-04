module.exports = (function() {
    'use strict';

   var HeaderView = require('./views/headerView');

    var HeaderModule = function () {
        var headerView = new HeaderView();
    };

    return HeaderModule;

})();
