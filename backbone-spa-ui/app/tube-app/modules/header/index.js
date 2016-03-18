module.exports = (function () {
    'use strict';

    var HeaderView = require('./views/headerView');
    
    var Module = require('../../../common/module');

    var HeaderModule = Module.extend({
        name: 'header',
        layoutView: {
            constructor: HeaderView,
            options: { onLoadEvent: 'header:loaded' }
        }
    })

    return HeaderModule;

})();
