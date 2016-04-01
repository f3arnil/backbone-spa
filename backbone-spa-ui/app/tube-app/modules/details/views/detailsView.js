module.exports = (function () {
    'use strict';

    var CustomView = require('appCommon/customView');
//    var DetailsCollection = require('../collection/detailsCollection');
    var detailsViewTpl = require('tpl!../templates/details');

    var DetailsView = CustomView.extend({
        el: '#article',
        template: detailsViewTpl,
        initialize: function (options) {
            _.extend(this,options);
//            this.collection = new DetailsCollection();
            this.render();
        },
        render: function () {
            this.$el.html(this.template);
            Backbone.Events.trigger('comments:load');
            return this;
        }
    });

    return DetailsView;

})();
