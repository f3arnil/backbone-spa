'use strict';
module.exports = (function () {

    var ChannelsRouter = Backbone.Router.extend({
        routes: {
            'channel/:id': 'showChannel',
            'channel/:id/videos': 'showChannelsVideos',
            'videosByChannel/:id': 'showVideoByChannel',
        },
        showChannel: function (id) {
            console.log('showChannel', id);
        },
        showChannelsVideos: function (id) {
            console.log('showChannelsVideos', id);
        },
        showVideoByChannel: function(id) {
            Backbone.Events.trigger('route:showVideoByChannel');
            console.log('showVideoByChannel', id);
        }
    });

    return ChannelsRouter;

})();
