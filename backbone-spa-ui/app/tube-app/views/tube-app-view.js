module.exports = (function () {
    'use strict';

    var HeaderModule = require('../modules/header/');
    var SideBarModule = require('../modules/sidebar/');
    var ContentModule = require('../modules/content/');

    var TubeAppTpl = _.template((require('tpl!../templates/tube-app-view'))());

    var TubeAppView = Backbone.View.extend({
        el: '#app-view',
        template: TubeAppTpl,
        modules: {},
        initialize: function (options) {
            this.router = options.router;
            this.render();
        },
        initModule: function () {
            this.modules.headerModule = new HeaderModule();
            this.modules.sidebarModule = new SideBarModule();
            this.modules.contentModule = new ContentModule();
        },
        render: function () {
            this.$el.html(this.template);
            this.initModule();
            return this;
        }
    });

    return TubeAppView;

})();
