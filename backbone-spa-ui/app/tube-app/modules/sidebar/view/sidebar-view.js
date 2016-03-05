module.exports = (function () {
    'use strict';

    var SideBarTpl = _.template((require('tpl!../template/sidebar-template'))());
    var ChannelsModule = require('../channels-module');

    var SideBarView = Backbone.View.extend({
        el: '#left-panel',
        template: SideBarTpl,
        initialize: function (opts) {
            this.render();
        },
        initModules: function () {
            var channels = new ChannelsModule();
        },
        render: function () {
            this.$el.html(this.template);
            this.initModules();
            return this;
        }
    });

    return SideBarView;

})();