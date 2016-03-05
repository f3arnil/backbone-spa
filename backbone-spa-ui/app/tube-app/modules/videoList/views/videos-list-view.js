module.exports = (function () {
    'use strict';

    var listViewTpl = require('tpl!../templates/videos-list');
    var VideoListView = require('./video-list-view.js');
    var VideoListCollection = require('../collection/video-list-collection');

    var VideosListView = Backbone.View.extend({
        el: '#article',
        template: listViewTpl,
        initialize: function () {
            var that = this;
            this.collection = new VideoListCollection();
            this.collection.fetch({
                success: function (item) {
                    that.render();
                    //console.log('item > ', item);
                }
            });
            //console.log(this.collection);
        },
        render: function () {
            this.$el.append(this.template());
            this.collection.each(function (item) {
                var view = new VideoListView({
                    model: item
                });
                this.$el.append(view.render().el);
            }, this);
            return this;
        }
    });

    return VideosListView;

})();
