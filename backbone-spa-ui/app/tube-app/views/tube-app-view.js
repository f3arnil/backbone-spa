module.exports = (function () {
    'use strict';

    var HeaderModule = require('../modules/header');
    var SideBarModule = require('../modules/sidebar');
    
    var TubeAppTpl = _.template((require('tpl!../templates/tube-app-view'))());

    var TubeAppView = Backbone.View.extend({
        el: '#app-view',
        template: TubeAppTpl,
        initialize: function (opts) {
            this.router = opts.router;
            this.render();
        },
        initModules: function () {
            var headerModule = new HeaderModule();
            var sidebar = new SideBarModule();
        },
        render: function () {
            this.$el.html(this.template);
            this.initModules();
            return this;
        }
    });

    return TubeAppView;

})();
