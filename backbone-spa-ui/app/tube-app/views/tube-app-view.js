module.exports = (function () {
    'use strict';

    var HeaderModule = require('../modules/header/');
    var SideBarModule = require('../modules/sidebar/');
    var ContentModule = require('../modules/content/');

    var TubeAppTpl = _.template((require('tpl!../templates/tube-app-view'))());

    var TubeAppView = Backbone.View.extend({
        el: '#app-view',
        template: TubeAppTpl,
        modules: {
            sidebarModule: new SideBarModule(),
            headerModule: new HeaderModule(),
            contentModule: new ContentModule()
        },
        initialize: function (options) {
            this.router = options.router;
            this.render();
        },
        initModule: function () {
            this.modules.sidebarModule;
            this.modules.headerModule;
            this.modules.contentModule;
            //get('')
        },
        render: function () {
            this.$el.html(this.template);
            this.initModule();
            return this;
        }
    });

    return TubeAppView;

})();
