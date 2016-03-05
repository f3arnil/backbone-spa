module.exports = (function () {
    'use strict';

    var VideosListTemplate = require('tpl!../templates/videos-list');
    var VideoListTemplate = require('tpl!../templates/video-list');
    var VideoListView = require('./video-list-view.js');
    var VideoListCollection = require('../collection/video-list-collection');

    var VideosListView = Backbone.View.extend({
        el: '#article',
        template: VideosListTemplate,
        itemTemplate: VideoListTemplate,
        initialize: function () {
            this.collection = new VideoListCollection();
            this.listenTo(this.collection, 'sync', this.onCollectionSync);
            this.listenTo(this.collection, 'error', this.onCollectionError);
            this.on('render:complite', this.onRenderComplite, this);
            this.collection.fetch();
        },
        onCollectionSync: function () {
            this.render();
        },
        onCollectionError: function (model, xhr) {
            console.error(xhr.statusText + '! ' + xhr.responseText);
        },
        onRenderComplite: function () {
            this.collection.each(function (item) {
                this.$el.find('#item-article').append(this.itemTemplate(item.toJSON()));
            }, this);
        },
        render: function () {
            this.$el.html(this.template());
            this.trigger('render:complite');
        }
    });

    return VideosListView;

})();
