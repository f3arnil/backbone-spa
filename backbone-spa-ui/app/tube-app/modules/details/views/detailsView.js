module.exports = (function () {
    'use strict';

    var CustomView = require('appCommon/customView');
    var DetailsModel = require('../model/detailsModel');
    var detailsViewTpl = require('tpl!../templates/details');

    var DetailsView = CustomView.extend({
        el: '#article',
        template: detailsViewTpl,
        initialize: function (options) {
            _.extend(this, options);
            this.model = new DetailsModel();
            this.listenTo(this.model, 'sync', this.onModelSync);
            this.listenTo(this.model, 'error', this.onModelError);
            this.model.fetch({
                url: Backbone.history.fragment,
            });
        },
        onModelSync: function () {
            console.log(this.model.toJSON());
            this.render();
        },
        onModelError: function (model, xhr) {
            console.error(xhr.statusText + '! ' + xhr.responseText);
        },
        render: function () {
            this.$el.html(this.template(this.model.toJSON()));
            Backbone.Events.trigger('comments:load');
            return this;
        }
    });

    return DetailsView;

})();
