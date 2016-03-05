'use strict'

module.exports = (function () {

    var ChannelTemplate = require('tpl!../template/channel-item');

    var channelView = Backbone.View.extend({
        //        el: '#channel-menu',
        template: ChannelTemplate,
        param: {
            name2: ''
        },
        initialize: function (options) {
            //this.render();
        },
        initModules: function () {},
        render: function () {
            this.$el.html(this.template(this.model.toJSON()));
            return this;
        }
    });

    return channelView;

})();
