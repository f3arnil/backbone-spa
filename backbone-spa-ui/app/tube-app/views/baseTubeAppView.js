module.exports = (function () {
    'use strict';

    var CustomView = require('appCommon/customView');
    var TubeAppTpl = require('tpl!../templates/tube-app-view');

    var TubeAppView = CustomView.extend({
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
