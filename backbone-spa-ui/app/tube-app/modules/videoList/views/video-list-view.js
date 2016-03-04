module.exports = (function () {
    'use strict';

    //var listViewTpl = _.template((require('tpl!../templates/video-list'))());
    var VideoListCollection = require('../collection/video-list-collection');

    var VideoListView = Backbone.View.extend({
        el: '#article',
        //template: listViewTpl,
        template: '<li><%= name %></li>',
        initialize: function () {
            //_.bindAll(this, 'render');
            var that = this;
            this.collection = new VideoListCollection;
            this.collection.fetch({
                    success: function (item) {
                        //that.render();
                        console.log('item > ', item);
                    }
                });
            console.log(this.collection);
        },
        render: function () {
            this.$el.append(this.template({
                name: 'hello'
                VideoListCollection: this.collection.models.toJSON()
            }));
            return this;
        }
    });

    return VideoListView;

})();
