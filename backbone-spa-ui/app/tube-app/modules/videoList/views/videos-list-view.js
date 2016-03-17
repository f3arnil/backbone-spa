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
        initialize: function (options) {
             _.extend(this,options);
            //console.log('Init VideosListView');
            this.collection = new VideoListCollection();
            this.listenTo(Backbone.Events, 'Channel:videos', this.listVideosLoad);
            this.listenTo(this.collection, 'sync', this.onCollectionSync);
            this.listenTo(this.collection, 'error', this.onCollectionError);
            this.on('render:complite', this.onRenderComplite, this);
            this.collection.fetch();
        },
        listVideosLoad: function (id) {
            if (!id) {
                var id = this.collection.toJSON()[0].channel;
            }
            this.$el.html(this.template());
            this.collection.each(function (item) {
                if (item.toJSON().channel == id) {
                    this.$el.find('#item-article')
                        .append(this.itemTemplate(item.toJSON()));
                }
            }, this);
        },
        events: {
            'click .item-video': 'clickVideo'
        },
        clickVideo: function (event) {
            event.preventDefault();
            Backbone.Events.trigger('show:details');
            Backbone.history.navigate(event.target.hash, {trigger: true});
        },
        onCollectionSync: function () {
            this.render();
        },
        onCollectionError: function (model, xhr) {
            console.error(xhr.statusText + '! ' + xhr.responseText);
        },
        onRenderComplite: function () {
            this.listVideosLoad();
        },
        render: function () {
            this.$el.html(this.template());
            this.trigger('render:complite');
            Backbone.Events.trigger(this.onLoadEvent);
            return this;
        }
    });

        
    return VideosListView;

})();
