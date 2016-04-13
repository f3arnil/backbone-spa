module.exports = (function () {
    'use strict';

    var CustomView = require('appCommon/customView');
    var VideoGridTemplate = require('tpl!../templates/video-grid');

    var VideoListView = CustomView.extend({
        el: '#article',
        template: VideoGridTemplate,
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
