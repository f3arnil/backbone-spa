module.exports = (function () {
    'use strict';

    var searchViewTpl = require('tpl!../templates/search');

    var SearchView = Backbone.View.extend({
        el: '#search-holder',
        template: searchViewTpl,
        initialize: function () {
            this.render();
        },
        render: function () {
            this.$el.html(this.template);
            return this;
        }
    });

    return SearchView;

})();
