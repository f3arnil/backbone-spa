'use strict';

module.exports = (function () {
    
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

//    console.log(new SideBarView());
//    var sbv = SideBarView.extend({test: 'this is test msg', el: '#left-panel'});
//
//    var tstSbv = new sbv();
//    console.log(tstSbv);
    
    return SideBarView;

})();
