module.exports = (function() {
    'use strict';

    var SearchView = require('./views/searchView');

    var ApplicationView = Backbone.View.extend({

        initialize: function(opts){
            this.router = opts.router;
            this.initDom();
        },
        initDom: function () {
            console.log(1)
            //var includeHeader = new IncludeHeader();
        },
        render: function () {
            return this;
        }
    });

    return ApplicationView;

})();
