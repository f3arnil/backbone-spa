'use strict'

module.exports = (function () {

    var Module = require('appCommon/');
    var CommentsView = require('./views/commentsView');

    var CommentsModule = Module.extend({
        name: 'comments',
        layoutView: {
            constructor: CommentsView,
            options: {},
        },
        switchable: false
    });

    return CommentsModule;

})();
