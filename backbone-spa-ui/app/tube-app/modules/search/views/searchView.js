module.exports = (function () {
    'use strict';

    var searchViewTpl = require('tpl!../templates/search');

    var SearchView = Backbone.View.extend({
        el: '#search-holder',
        template: searchViewTpl,
        initialize: function (options) {
            _.extend(this,options);
            this.render();
        },
        render: function () {
            this.$el.html(this.template);
            Backbone.Events.trigger(this.onLoadEvent);
            return this;
        }
    });

    return SearchView;

})();
