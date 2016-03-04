module.exports = (function () {
    'use strict';
    
    var contentTpl = _.template((require('tpl!../templates/content'))());
    
    var ContentView = Backbone.View.extend({
        el: '#main-article',
        template: contentTpl,
        initialize: function () {
            this.render();
        },
        render: function () {
            this.$el.html(this.template);
            return this;
        }
    });
    
    return ContentView;
    
})();
