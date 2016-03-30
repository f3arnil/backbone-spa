module.exports = (function () {
    'use strict';

    var Module = require('appCommon/');
    var SearchView = require('./views/searchView');

    var SearchModule = Module.extend({
        name: 'search',
        layoutView: {
            constructor: SearchView,
            options: { onLoadEvent: 'search:loaded' }
        }
    })

    return SearchModule;

})();
