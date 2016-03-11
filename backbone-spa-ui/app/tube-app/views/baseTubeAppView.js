module.exports = (function () {
    'use strict';

    var TubeAppTpl = require('tpl!../templates/tube-app-view');

    var TubeAppView = Backbone.View.extend({
        el: '#app-view',
        template: TubeAppTpl,
        modules: {},
        initialize: function (options) {
            this.render();
        },
        render: function () {
            this.$el.html(this.template());
            return this;
        }
    });

    return TubeAppView;

})();
