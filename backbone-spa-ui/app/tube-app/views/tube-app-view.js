module.exports = (function () {
    'use strict';

    var HeaderView = require('./header-view');

    var TubeAppMainTpl = _.template((require('tpl!../templates/tube-app-main'))());

    var TubeAppView = Backbone.View.extend({
        el: '#app-view',
        template: TubeAppMainTpl,
        initialize: function (opts) {
            this.router = opts.router;
            this.render();
        },
        initHeader: function () {
            var headerView = new HeaderView();
            headerView.render();
        },
        render: function () {
            this.$el.html(this.template);
            this.initHeader();
            return this;
        }
    });

    return TubeAppView;

})();
