module.exports = (function () {
    'use strict';

    var CustomView = require('appCommon/customView');
    var VideoListTemplate = require('tpl!../templates/video-list');

    var VideoListView = CustomView.extend({
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
