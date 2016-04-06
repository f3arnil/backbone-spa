'use strict'

module.exports = (function () {

    var Module = require('appCommon/');
    var ChannelsView = require('./views/channelsView');
    var ChannelsRouter = require('./router/channelsRouter');

    var ChannelsModule = Module.extend({
        name: 'channels',
        layoutView: {
            constructor: ChannelsView,
            options: {},
        },
        router: {
            constructor: ChannelsRouter,
            options: {}
        }
    });

    return ChannelsModule;

})();
