module.exports = (function () {
    'use strict';
    
    var listViewTpl = _.template((require('tpl!../templates/video-list'))());
    
    var VideoListView = Backbone.View.extend({
        el: '#article',
        template: listViewTpl,
        initialize: function () {
            this.render();
            console.log(this.$el);
        },
        render: function () {
            this.$el.html(this.template);
            return this;
        }
    });
    
    return VideoListView;
    
})();
