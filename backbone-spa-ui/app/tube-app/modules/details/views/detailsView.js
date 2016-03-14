module.exports = (function () {
    'use strict';

    var detailsViewTpl = require('tpl!../templates/details');

    var DetailsView = Backbone.View.extend({
        el: '#article',
        template: detailsViewTpl,
        initialize: function () {
            this.render();
        },
        render: function () {
            this.$el.html(this.template);
            return this;
        }
    });

    return DetailsView;

})();
