module.exports = (function () {
    'use strict';

    var HeaderModule = require('../modules/header/index');
    var ContentModule = require('../modules/content/index');

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
