module.exports = (function () {
    'use strict';

    var SideBarTpl = require('tpl!../template/sidebar-template');
    var ChannelsModule = require('../channels-module');
    var MainMenuModule = require('../../mainMenu');

    var SideBarView = Backbone.View.extend({
        el: '#left-panel',
        template: SideBarTpl,
        initialize: function (opts) {
            
            this.render();
        },
        initModules: function () {
            this.modules = {
                channels: new ChannelsModule(),
                mainMenu: new MainMenuModule()
            }
        },
        render: function () {
            this.$el.html(this.template());
            this.initModules();
            return this;
        }
    });

    return SideBarView;

})();
