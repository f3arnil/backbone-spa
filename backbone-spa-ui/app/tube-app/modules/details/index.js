module.exports = (function () {
    'use strict';

    var Module = require('appCommon/');
    var DetailsView = require('./views/detailsView');
    var CommentsModule = require('./comments-module/');

    var DetailsModule = Module.extend({
        name: 'details',
        layoutView: {
            constructor: DetailsView,
            options: {}
        },
        modules: [
            {
                module: CommentsModule,
                weight: 10
            }
        ],
        switchable: true
    })

    return DetailsModule;

})();
