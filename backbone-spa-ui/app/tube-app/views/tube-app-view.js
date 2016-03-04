module.exports = (function () {
    'use strict';

    var HeaderModule = require('../modules/header');
    var SideBarModule = require('../modules/sidebar');
    var ContentModule = require('../modules/content/');

    var TubeAppTpl = _.template((require('tpl!../templates/tube-app-view'))());

    var TubeAppView = Backbone.View.extend({
        el: '#app-view',
        template: TubeAppTpl,
        initialize: function (options) {
            this.router = options.router;
            this.render();
        },
        initModules: function () {
            var headerModule = new HeaderModule();
            var sidebar = new SideBarModule();
            var contentModule = new ContentModule();
        },
        render: function () {
            this.$el.html(this.template);
            this.initModules();
            return this;
        }
    });

    return TubeAppView;

})();
