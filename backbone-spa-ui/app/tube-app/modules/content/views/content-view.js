module.exports = (function () {
    'use strict';
    
    var contentTpl = require('tpl!../templates/content');
    var VideoListModule = require('../../videoList/');
    
    var ContentView = Backbone.View.extend({
        el: '#main-article',
        template: contentTpl,
        initialize: function () {
            this.render();
        },
        initModules: function () {
            var videoListModule = new VideoListModule();            
        },
        render: function () {
            this.$el.html(this.template);
            this.initModules();
            return this;
        }
    });
    
    return ContentView;
    
})();
