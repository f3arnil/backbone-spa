'use strict'

module.exports = (function () {

    var ChannelsCollection = require('../collection/channels-collection');

    var ChannelsTemplate = require('tpl!../template/channels-template');
    var ChannelView = require('./channel-view.js');

    var channelsView = Backbone.View.extend({
        el: '#channels-view',
        template: ChannelsTemplate,
        initialize: function (options) {
            this.collection = new ChannelsCollection();
            var view = this;
            this.collection.fetch({
                success: function () {
                    view.render();
                },
                error: function () {
                    console.log('Error getting collection')
                }
            });
        },
        initModules: function () {

        },
        render: function () {
            var colView = this;
            this.$el.html(this.template());
            this.collection.each(function (item) {
                var view = new ChannelView({
                    model: item
                });
                colView.$el.append(view.render().el);
            });
            return this;
        }
    });

    return channelsView;

})();
