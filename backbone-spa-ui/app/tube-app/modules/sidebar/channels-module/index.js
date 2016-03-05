'use strict'

module.exports = (function () {

    var ChannelsView = require('./view/channels-view');
    var ChannelsRouter = require('./router/channels-router');

    var ChannelsModule = function () {
        return {
            router: new ChannelsRouter(),
            channelsView: new ChannelsView()
        }
    };

    return ChannelsModule;

})();
