'use strict';
module.exports = (function () {

    var ChannelsRouter = Backbone.Router.extend({
        routes: {
            'channel/:id': 'showChannel',
            'channel/:id/videos': 'showChannelsVideos',
        },
        showChannel: function (id) {
            console.log('showChannel');
        },
        showChannelsVideos: function (id) {
            console.log('showChannelsVideos');
        },
    });

    return ChannelsRouter;

})();
