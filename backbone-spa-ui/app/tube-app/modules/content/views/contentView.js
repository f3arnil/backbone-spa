module.exports = (function () {
    'use strict';

    var contentTpl = require('tpl!../templates/content');

    var ContentView = Backbone.View.extend({
        el: '#main-article',
        template: contentTpl,
        initialize: function (options) {
            _.extend(this,options);
            this.render();
//            this.listenTo(Backbone.Events, 'page:home', this.getContentHomePage);
//            this.listenTo(Backbone.Events, 'page:my-channel', this.getContentOtherPage);
//            this.listenTo(Backbone.Events, 'page:trending', this.getContentOtherPage);
//            this.listenTo(Backbone.Events, 'page:subscriptions', this.getContentOtherPage);
//            this.listenTo(Backbone.Events, 'page:history', this.getContentOtherPage);
//            this.listenTo(Backbone.Events, 'page:watch-later', this.getContentOtherPage);
        },
        getContentOtherPage: function () {
            this.$el.html('Empty content!');
        },
        getContentHomePage: function () {
            this.render();
        },
        render: function () {
            this.$el.html(this.template);
            Backbone.Events.trigger(this.onLoadEvent);              // event -> content:loaded
            //Backbone.Events.trigger('show:listVideo');
            return this;
        }
    });

    return ContentView;

})();
