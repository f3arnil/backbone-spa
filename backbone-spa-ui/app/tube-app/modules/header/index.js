module.exports = (function() {
    'use strict';

    var HeaderView = require('./views/headerView');

    var HeaderModule = function () {
        return {
            headerView: new HeaderView()
        };
    };

    return HeaderModule;

})();
