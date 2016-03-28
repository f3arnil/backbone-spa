module.exports = (function () {
    'use strict';

    var TubeAppTpl = require('tpl!../templates/tube-app-view');

    var TubeAppView = Backbone.View.extend({
        el: '#app-view',
        template: TubeAppTpl,
        modules: {},
        initialize: function (options) {
            _.extend(this,options);
            this.render();
        },
        render: function () {
            this.$el.html(this.template);
            Backbone.Events.trigger(this.onLoadEvent);              // event -> app:loaded
            return this;
        }
    });

    return TubeAppView;

})();
