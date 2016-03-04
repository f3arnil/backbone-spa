module.exports = (function () {
    'use strict';
    
    var listViewTpl = _.template((require('tpl!../templates/video-list'))());
    
    var VideoListView = Backbone.View.extend({
        el: '#main-article',
        tempalte: listViewTpl,
        initialize: function (options) {
            this.router = options.router;
            this.render();
        },
        render: function () {
            this.$el.html(this.template);
            return this;
        }
    });
    
    return VideoListView;
    
})();
