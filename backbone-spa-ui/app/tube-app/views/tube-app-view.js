module.exports = (function () {
    'use strict';

    var HeaderView = require('./header-view');
    var SidebarView = require('../modules/sidebar/index');
    

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
        initSidebar: function () {
            var sidebarModule = new SidebarView();
            sidebarView.render();
        },
        render: function () {
            this.$el.html(this.template);
            this.initHeader();
            this.initSidebar();
            return this;
        }
    });

    return TubeAppView;

})();
