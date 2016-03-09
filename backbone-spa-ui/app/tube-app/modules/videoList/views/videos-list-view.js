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
        initialize: function (id) {
            this.collection = new VideoListCollection();
            this.listenTo(Backbone.Events, 'page:home', this.pageHome);
            this.listenTo(Backbone.Events, 'Channel:videos', this.onRenderComplite);
            this.listenTo(this.collection, 'sync', this.onCollectionSync);
            this.listenTo(this.collection, 'error', this.onCollectionError);
            this.on('render:complite', this.onRenderComplite, this);
            this.collection.fetch();
        },
        listVideosLoad: function(id) {
            this.collection.each(function (item) {
                if (item.toJSON().channel == id) {
                    this.$el.find('#item-article').append(this.itemTemplate(item.toJSON()));
                }
            }, this);
        },
        onCollectionSync: function () {
            this.render();
        },
        pageHome: function(id){
            console.log(">>>> ", id);
        },
        onCollectionError: function (model, xhr) {
            console.error(xhr.statusText + '! ' + xhr.responseText);
        },
        onRenderComplite: function (id) {
            
            this.$el.html(this.template());
            this.listVideosLoad(id);
        },
        render: function () {
            this.trigger('render:complite');
        }
    });

    return VideosListView;

})();
