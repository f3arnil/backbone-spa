module.exports = (function () {
    'use strict';

    var TubeAppTpl = require('tpl!../templates/tube-app-view');

    var TubeAppView = Backbone.View.extend({
        el: '#app-view',
        template: TubeAppTpl,
        modules: {},
        initialize: function (options) {
            this.modules = options.modules;
            this.router = options.router;
            this.render();
        },
        initModules: function () {
            this.modules.headerMdl();
            this.modules.searchMdl();
            this.modules.sideBarMdl();
            this.modules.contentMdl();
        },
        render: function () {
            this.$el.html(this.template());
            this.initModules();
            return this;
        }
    });

    return TubeAppView;

})();
