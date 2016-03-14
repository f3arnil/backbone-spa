module.exports = (function() {
    'use strict';

    var DetailsView = require('./views/detailsView');
    var Module = require('../../../common/module');

    var DetailsModule = Module.extend({
        name: 'details',
        view: {
            constructor: DetailsView,
            options: {}
        }
    })

    return DetailsModule;

})();