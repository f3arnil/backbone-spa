module.exports = (function () {
    'use strict';

    var SearchViewTpl = _.template((require('tpl!../templates/search'))());

    var SearchView = Backbone.View.extend({
        el: '#search-holder',
        template: SearchViewTpl,
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
