'use strict'

module.exports = (function () {

    var ChannelsView = require('./view/channels-view');
    var ChannelsRouter = require('./router/channels-router');

    var ChannelsModule = function () {
        var router = new ChannelsRouter();
        var channelsView = new ChannelsView()
    };

    return ChannelsModule;

})();
