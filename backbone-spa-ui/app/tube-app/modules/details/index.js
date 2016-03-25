module.exports = (function() {
    'use strict';

    var DetailsView = require('./views/detailsView');
    var Module = require('../../../common/module');

    var DetailsModule = Module.extend({
        name: 'details',
        layoutView: {
            constructor: DetailsView,
            options: {}
        },
        switchable: true
    })

    return DetailsModule;

})();