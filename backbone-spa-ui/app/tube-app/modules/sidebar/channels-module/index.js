'use strict'

module.exports = (function () {

    var ChannelsView = require('./views/channels-view');
    var ChannelsRouter = require('./router/channels-router');
    var Module = require('../../../../common/module');

    var ChannelsModule = Module.extend({
        name: 'channels',
        layoutView: {
            constructor: ChannelsView,
            options: {
                onLoadEvent: 'channels:loaded'
            },
        },
        router: {
            constructor: ChannelsRouter,
            options: {}
        }
    });

    return ChannelsModule;

})();
