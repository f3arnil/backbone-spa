module.exports = (function () {
    'use strict';

    var detailsViewTpl = require('tpl!../templates/details');

    var DetailsView = Backbone.View.extend({
        el: '#article',
        template: detailsViewTpl,
        initialize: function (options) {
            _.extend(this,options);
            this.render();
        },
        render: function () {
            this.$el.html(this.template);
            Backbone.Events.trigger(this.onLoadEvent);
            Backbone.Events.trigger('submodule:loaded');
            return this;
        }
    });

    return DetailsView;

})();
