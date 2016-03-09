module.exports = (function () {
    'use strict';

    var headerViewTpl = require('tpl!../templates/header');

    var HeaderView = Backbone.View.extend({
        el: '#header-holder',
        template: headerViewTpl,
        initialize: function () {
            this.render();
        },
        render: function () {
            this.$el.html(this.template);
            return this;
        }
    });

    return HeaderView;

})();
