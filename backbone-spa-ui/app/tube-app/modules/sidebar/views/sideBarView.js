'use strict';

module.exports = (function () {
    
    var SideBarTpl = require('tpl!../template/sidebar-template');
    var ChannelsModule = require('../channels-module');
    var MainMenuModule = require('../mainMenu-module');

    var SideBarView = Backbone.View.extend({
        el: '#left-panel',
        template: SideBarTpl,
        initialize: function (options) {
            _.extend(this,options);
            this.render();
        },
        render: function () {
            this.$el.html(this.template());
            console.log('<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< VIEW LOAD <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<');
            Backbone.Events.trigger(this.onLoadEvent);
            return this;
        }
    });

    return SideBarView;

})();
