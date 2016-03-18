module.exports = (function () {
    'use strict';

    var headerViewTpl = require('tpl!../templates/header');

    var HeaderView = Backbone.View.extend({
        el: '#header-holder',
        template: headerViewTpl,
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

    return HeaderView;

})();
