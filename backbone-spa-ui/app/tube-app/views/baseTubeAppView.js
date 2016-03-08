module.exports = (function () {
    'use strict';

    var TubeAppTpl = _.template((require('tpl!../templates/tube-app-view'))());

    var TubeAppView = Backbone.View.extend({
        el: '#app-view',
        template: TubeAppTpl,
        modules: {},
        initialize: function (options) {
            this.modulesNS = options.modules;
            this.router = options.router;
            //Backbone.Events.on('get:post', this.getLayout, this);
            this.render();
        },
        initModule: function () {
            this.modules.headerModule = new this.modulesNS.headerM();
            this.modules.searchModule = new this.modulesNS.searchM();
            this.modules.sidebarModule = new this.modulesNS.sideBarM();
            this.modules.contentModule = new this.modulesNS.contentM();
        },
        getLayout: function () {
            //console.log(arguments)
        },
        render: function () {
            this.$el.html(this.template);
            this.initModule();
            return this;
        }
    });

    return TubeAppView;

})();
