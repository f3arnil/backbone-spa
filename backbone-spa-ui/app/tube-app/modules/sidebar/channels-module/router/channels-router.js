'use strict';
module.exports = (function () {

    var ChannelsRouter = Backbone.Router.extend({
        routes: {
            'channel/:id': 'showChannel',
            'channel/:id/videos': 'showChannelsVideos',
            'videos/:id': 'show'
        },
        showChannel: function (id) {
            console.log('showChannel', id);
        },
        showChannelsVideos: function (id) {
            console.log('showChannelsVideos', id);
        },
    });

    return ChannelsRouter;

})();
