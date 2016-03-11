module.exports = (function () {
    'use strict';

    var HeaderView = require('./views/headerView');

    var Module = require('../../../common/module');

    var HeaderModule = Module.extend({
        name: 'header',
        view: {
            constructor: HeaderView,
            options: {}
        }
    })

    return HeaderModule;

})();
