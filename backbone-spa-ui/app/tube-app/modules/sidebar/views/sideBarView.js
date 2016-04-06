'use strict';

module.exports = (function () {
    
    var CustomView = require('appCommon/customView');
    var SideBarTpl = require('tpl!../templates/sidebar-template');

    var SideBarView = CustomView.extend({
        el: '#left-panel',
        template: SideBarTpl,
        initialize: function (options) {
            _.extend(this,options);
            this.render();
        },
        render: function () {
            this.$el.html(this.template());
            Backbone.Events.trigger(this.onLoadEvent);
            return this;
        }
    });

    return SideBarView;

})();
