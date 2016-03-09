'use strict'

module.exports = (function () {

    var ChannelsCollection = require('../collection/channels-collection');

    var ChannelTemplate = require('tpl!../template/channel-item');
    var ChannelsTemplate = require('tpl!../template/channels-template');

    var channelsView = Backbone.View.extend({
        el: '#channels-view',
        template: ChannelsTemplate,
        itemTemplate: ChannelTemplate,
        initialize: function (options) {
            this.collection = new ChannelsCollection();
            this.listenTo(this.collection, 'sync', this.onCollectionSync);
            this.listenTo(this.collection, 'error', this.onCollectionError);
            this.on('render:complite', this.onRenderComplite, this);
            this.collection.fetch();
        },
        onCollectionSync: function () {
            this.render();
        },
        events: {
            'click .channel': 'clickChannel'

        },
        clickChannel: function(event){
            event.preventDefault();
            console.log('Click on ', event.currentTarget.innerText);
            Backbone.history.navigate(event.target.hash, {trigger: true});
            
        },
        onCollectionError: function (model, xhr) {
            console.error(xhr.statusText + '! ' + xhr.responseText);
        },
        onRenderComplite: function () {
            this.collection.each(function (item) {
                this.$el.find('ul').append(this.itemTemplate(item.toJSON()));
            }, this);
        },
        render: function () {
            this.$el.html(this.template());
            this.trigger('render:complite');
        }
    });

    return channelsView;

})();
