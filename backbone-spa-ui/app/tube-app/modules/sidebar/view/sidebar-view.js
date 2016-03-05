'use strict';

module.exports = (function () {

    var SideBarTpl = _.template((require('tpl!../template/sidebar-template'))());
    var ChannelsModule = require('../channels-module');

    var SideBarView = Backbone.View.extend({
        el: '#left-panel',
        template: SideBarTpl,
        initialize: function (opts) {
            this.render();
        },
        initModules: function () {
            this.modules = {
                channels: new ChannelsModule()
            }
        },
        render: function () {
            this.$el.html(this.template);
            this.initModules();
            console.log(this.modules.channels.channelsView);
            
            return this;
        }
    });

    return SideBarView;

})();
