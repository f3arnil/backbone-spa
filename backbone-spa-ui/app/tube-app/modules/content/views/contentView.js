module.exports = (function () {
    'use strict';

    var contentTpl = _.template((require('tpl!../templates/content'))());
    //var contentTpl = require('tpl!../templates/content');

    var VideoListModule = require('../../videoList/');

    var ContentView = Backbone.View.extend({
        el: '#main-article',
        template: contentTpl,
        initialize: function (opts) {
            this.render();
        },
        initModules: function () {
            this.initVideoListModule();
        },
        initVideoListModule: function () {
            return new VideoListModule();
        },
        setContent: function () {

        },
        getContent: function () {

        },
        doAfterRender: function () {

        },
        render: function () {
            this.$el.html(this.template);
            this.initModules();
            return this;
        }
    });

    return ContentView;

})();
