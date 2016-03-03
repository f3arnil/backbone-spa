module.exports = (function () {
    'use strict';

    var HeaderViewTpl = _.template((require('tpl!../templates/header'))());

    var HeaderView = Backbone.View.extend({
        el: '#header',
        template: HeaderViewTpl,
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
