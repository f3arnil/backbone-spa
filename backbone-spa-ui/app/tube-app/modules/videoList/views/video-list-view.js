module.exports = (function () {
    'use strict';

    //var listViewTpl = _.template((require('tpl!../templates/video-list'))());
    var VideoListTemplate = require('tpl!../templates/video-list');

    var VideoListView = Backbone.View.extend({
        el: '#article',
        template: VideoListTemplate,
        //template: listViewTpl,
        initialize: function (options) {
            this.render();
        },
        initModules: function () {

        },
        render: function () {
            this.$el.html(this.template(this.model.toJSON()));
            return this;
        }
    });

    return VideoListView;

})();
