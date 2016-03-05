'use strict'

module.exports = (function () {

    var VideoListTemplate = require('tpl!../templates/video-list');

    var videoListView = Backbone.View.extend({
        template: VideoListTemplate,
        initialize: function (options) {
        },
        initModules: function () {},
        render: function () {
            this.$el.html(this.template(this.model.toJSON()));
            return this;
        }
    });

    return videoListView;

})();