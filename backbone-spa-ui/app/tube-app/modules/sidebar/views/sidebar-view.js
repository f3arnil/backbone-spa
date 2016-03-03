module.exports = (function () {
    'use strict';
    
    var sidebarTpl = _.template((require('tpl!../templates/sidebar'))());
    
    var SidebarView = Backbone.View.extend({
        el: '#left-panel',
        template: sidebarTpl,
        initialize: function () {
            console.log('hi');
            //this.render();
        },
        render: function () {
            this.$el.html(this.template);
            return this;
        }
    });
    
    return SidebarView;
    
})();