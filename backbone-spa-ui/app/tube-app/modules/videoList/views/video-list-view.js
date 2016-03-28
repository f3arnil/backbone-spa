module.exports = (function () {
    'use strict';

    var VideoListTemplate = require('tpl!../templates/video-list');

    var VideoListView = Backbone.View.extend({
        el: '#article',
        template: VideoListTemplate,
        initialize: function (options) {
            this.render();
        },
        initModules: function () {

        },
        render: function () {
            console.log(this.model.toJSON());
            this.$el.html(this.template(this.model.toJSON()));
            return this;
        }
    });

    return VideoListView;

})();
